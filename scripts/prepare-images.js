const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const logoSrc =
  "C:/Users/khush/.cursor/projects/d-inkvary/assets/c__Users_khush_AppData_Roaming_Cursor_User_workspaceStorage_4dec5b44d1c7ad29e468ac1b3b19fbcd_images_WhatsApp_Image_2026-09-25_at_2.40.22_PM-7b0dfc15-abdf-4679-90cf-d12ab9f52bba.jpg";

const photos = {
  "hero.webp": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85",
  "about-a.webp": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
  "about-b.webp": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
  "handshake.webp": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=85",
  "svc-bis.webp": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  "svc-isi.webp": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
  "svc-wpc.webp": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
  "svc-tec.webp": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85",
  "svc-cdsco.webp": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
  "svc-lmpc.webp": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  "svc-bee.webp": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
  "svc-waste.webp": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=85",
  "blog-1.webp": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=85",
  "blog-2.webp": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=85",
  "blog-3.webp": "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1600&q=85",
};

async function download(url, file) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await sharp(buffer)
    .rotate()
    .grayscale()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5, smartSubsample: false })
    .toFile(file);
  const stat = fs.statSync(file);
  console.log(path.basename(file), stat.size);
}

async function makeLogo() {
  const { data, info } = await sharp(logoSrc)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const white = Buffer.from(data);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    if (max > 236) data[i + 3] = 0;
    white[i] = 255 - r;
    white[i + 1] = 255 - g;
    white[i + 2] = 255 - b;
    white[i + 3] = max > 236 ? 0 : 255;
  }
  await sharp(data, { raw: info }).trim().png().toFile("public/logo.png");
  await sharp(white, { raw: info }).trim().png().toFile("public/logo-white.png");
  await sharp({
    create: { width: 64, height: 64, channels: 4, background: "#F7FF36" },
  })
    .png()
    .toFile("app/icon.png");
  console.log("logo ready", fs.statSync("public/logo.png").size);
}

async function main() {
  fs.mkdirSync("public/images", { recursive: true });
  await makeLogo();
  for (const [name, url] of Object.entries(photos)) {
    await download(url, path.join("public/images", name));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
