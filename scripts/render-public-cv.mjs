import { execFileSync } from "node:child_process";
import { createWriteStream, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = join(root, "content", "public-cv.md");
const outputPath = join(root, "public", "lucas-dalan-resume.pdf");

const browsers = [
	"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
	"C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
	"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];

const escapeHtml = (value) =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");

const linkify = (value) =>
	escapeHtml(value).replaceAll(
		/https:\/\/[^\s<]+/g,
		(url) => `<a href="${url}">${url}</a>`,
	);

const professionalEmail = () => {
	if (process.env.PUBLIC_CV_EMAIL) {
		return process.env.PUBLIC_CV_EMAIL;
	}

	const socialLinks = readFileSync(
		join(root, "app", "components", "social-links.tsx"),
		"utf8",
	);
	const match = socialLinks.match(/mailto:([^"'?\s]+)/);
	if (!match) {
		throw new Error(
			"Set PUBLIC_CV_EMAIL. No professional email is available to render the public CV.",
		);
	}

	return match[1];
};

const markdownToHtml = (markdown) => {
	const lines = markdown.replaceAll("\r\n", "\n").split("\n");
	const parts = [];
	let list = [];

	const flushList = () => {
		if (list.length === 0) {
			return;
		}
		parts.push(`<ul>${list.join("")}</ul>`);
		list = [];
	};

	for (const line of lines) {
		if (line.startsWith("- ")) {
			list.push(`<li>${linkify(line.slice(2))}</li>`);
			continue;
		}

		flushList();

		if (line.trim() === "") {
			continue;
		}

		if (line.startsWith("### ")) {
			parts.push(`<h3>${linkify(line.slice(4))}</h3>`);
		} else if (line.startsWith("## ")) {
			parts.push(`<h2>${linkify(line.slice(3))}</h2>`);
		} else if (line.startsWith("# ")) {
			parts.push(`<h1>${linkify(line.slice(2))}</h1>`);
		} else {
			parts.push(`<p>${linkify(line)}</p>`);
		}
	}

	flushList();

	const wrapped = [];
	let role = null;
	const flushRole = () => {
		if (!role) {
			return;
		}
		wrapped.push(`<section class="role">${role.join("\n")}</section>`);
		role = null;
	};

	for (const part of parts) {
		if (part.startsWith("<h1") || part.startsWith("<h2")) {
			flushRole();
			wrapped.push(part);
			continue;
		}
		if (part.startsWith("<h3")) {
			flushRole();
			role = [part];
			continue;
		}
		if (role) {
			role.push(part);
			continue;
		}
		wrapped.push(part);
	}

	flushRole();
	return wrapped.join("\n");
};

const browser =
	process.env.PUBLIC_CV_RENDERER === "pdfkit"
		? undefined
		: browsers.find((candidate) => existsSync(candidate));

const email = professionalEmail();
const markdown = readFileSync(sourcePath, "utf8").replaceAll("{{email}}", email);
if (markdown.includes("{{email}}") || markdown.includes(email) === false) {
	throw new Error("The public CV render did not substitute the professional email.");
}

const outputPathOverride = process.env.PUBLIC_CV_OUTPUT;
const pdfPath = outputPathOverride ? resolve(outputPathOverride) : outputPath;

const renderWithBrowser = () => {
	const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Lucas Dalan</title>
  <style>
    @page { size: letter; margin: 0.7in; }
    body { font-family: Arial, Helvetica, sans-serif; font-size: 11pt; line-height: 1.35; color: #111; margin: 0; }
    h1 { font-size: 20pt; line-height: 1.2; margin: 0 0 4pt; }
    h2 { font-size: 13pt; line-height: 1.2; margin: 14pt 0 6pt; padding-bottom: 2pt; border-bottom: 1px solid #ccc; }
    h3 { font-size: 11.5pt; line-height: 1.3; margin: 10pt 0 0; }
    section.role { break-inside: avoid; page-break-inside: avoid; }
    p { margin: 2pt 0; }
    ul { margin: 2pt 0 6pt; padding-left: 18pt; }
    li { margin: 0 0 2pt; }
    a { color: #111; text-decoration: none; }
  </style>
</head>
<body>
${markdownToHtml(markdown)}
</body>
</html>`;

	const directory = mkdtempSync(join(tmpdir(), "public-cv-"));
	const htmlPath = join(directory, "public-cv.html");
	const profilePath = join(directory, "profile");
	writeFileSync(htmlPath, html, "utf8");

	try {
		execFileSync(
			browser,
			[
				"--headless=new",
				"--disable-gpu",
				"--no-first-run",
				"--disable-extensions",
				`--user-data-dir=${profilePath}`,
				"--no-pdf-header-footer",
				`--print-to-pdf=${pdfPath}`,
				htmlPath,
			],
			{ stdio: "inherit" },
		);
	} finally {
		rmSync(directory, { recursive: true, force: true });
	}
};

const parseBlocks = (source) => {
	const blocks = [];
	let role = null;

	const flushRole = () => {
		if (!role) {
			return;
		}
		blocks.push(role);
		role = null;
	};

	for (const line of source.replaceAll("\r\n", "\n").split("\n")) {
		if (line.startsWith("### ")) {
			flushRole();
			role = { type: "role", title: line.slice(4), body: [] };
			continue;
		}

		if (line.startsWith("## ") || line.startsWith("# ")) {
			flushRole();
			blocks.push({
				type: line.startsWith("## ") ? "h2" : "h1",
				text: line.slice(line.startsWith("## ") ? 3 : 2),
			});
			continue;
		}

		if (line.trim() === "") {
			continue;
		}

		const item = line.startsWith("- ")
			? { type: "li", text: line.slice(2) }
			: { type: "p", text: line };

		if (role) {
			role.body.push(item);
		} else {
			blocks.push(item);
		}
	}

	flushRole();
	return blocks;
};

const renderWithPdfKit = async () => {
	const PDFDocument = require("pdfkit");
	const doc = new PDFDocument({
		size: "LETTER",
		margins: { top: 50, bottom: 50, left: 54, right: 54 },
		info: { Title: "Lucas Dalan", Author: "Lucas Dalan" },
	});
	const stream = createWriteStream(pdfPath);
	doc.pipe(stream);
	doc.fillColor("#111111");

	const contentWidth = () =>
		doc.page.width - doc.page.margins.left - doc.page.margins.right;
	const pageBottom = () => doc.page.height - doc.page.margins.bottom;

	const writeLinked = (text, { font, size, indent = 0, paragraphGap = 2 }) => {
		doc.font(font).fontSize(size);
		const parts = text.split(/(https:\/\/[^\s]+)/g).filter((part) => part !== "");
		parts.forEach((part, index) => {
			const isLast = index === parts.length - 1;
			doc.text(part, {
				width: contentWidth() - indent,
				indent,
				continued: !isLast,
				link: part.startsWith("https://") ? part : undefined,
			});
		});
		doc.moveDown(paragraphGap / size);
	};

	const writeContact = (text) => {
		const parts = text.split(" · ");
		doc.font("Helvetica").fontSize(11);
		parts.forEach((part, index) => {
			const isLast = index === parts.length - 1;
			const link = part.startsWith("https://")
				? part
				: part.includes("@")
					? `mailto:${part}`
					: undefined;
			doc.text(isLast ? part : `${part} · `, {
				continued: !isLast,
				link,
			});
		});
		doc.moveDown(0.2);
	};

	for (const block of parseBlocks(markdown)) {
		if (block.type === "h1") {
			doc.font("Helvetica-Bold").fontSize(20).text(block.text, { lineGap: 2 });
			continue;
		}

		if (block.type === "h2") {
			doc.moveDown(0.7);
			doc.font("Helvetica-Bold").fontSize(13).text(block.text);
			const lineY = doc.y + 2;
			doc
				.moveTo(doc.page.margins.left, lineY)
				.lineTo(doc.page.width - doc.page.margins.right, lineY)
				.strokeColor("#cccccc")
				.lineWidth(0.6)
				.stroke();
			doc.strokeColor("#111111");
			doc.y = lineY + 8;
			continue;
		}

		if (block.type === "role") {
			const estimated = 18 + block.body.length * 28;
			if (doc.y + estimated > pageBottom()) {
				doc.addPage();
			}
			doc.moveDown(0.35);
			doc.font("Helvetica-Bold").fontSize(11.5).text(block.title);
			for (const item of block.body) {
				if (item.type === "li") {
					writeLinked(`•  ${item.text}`, {
						font: "Helvetica",
						size: 11,
						paragraphGap: 1,
					});
				} else {
					writeLinked(item.text, {
						font: "Helvetica",
						size: 11,
						paragraphGap: 1,
					});
				}
			}
			continue;
		}

		if (block.type === "p" && block.text.includes(" · ")) {
			writeContact(block.text);
			continue;
		}

		writeLinked(block.text, { font: "Helvetica", size: 11, paragraphGap: 2 });
	}

	doc.end();
	await new Promise((resolvePromise, reject) => {
		stream.on("finish", resolvePromise);
		stream.on("error", reject);
	});
};

if (browser) {
	renderWithBrowser();
} else {
	await renderWithPdfKit();
}
