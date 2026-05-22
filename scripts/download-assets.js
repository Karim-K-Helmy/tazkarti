/*
  Downloads clear photographic event images into public/assets/images.
  Run: npm run assets
  The app uses only local paths such as /assets/images/concert-1.jpg at runtime.
  If your network is unavailable, the project already includes local fallback images.
*/
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const outDir = path.join(__dirname, "..", "public", "assets", "images");
fs.mkdirSync(outDir, { recursive: true });

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&h=1000&q=90`;

const assets = [
  { file: "hero-event.jpg", title: "concert crowd hero", source: "Unsplash", url: img("photo-1501281668745-f7f57925c3b4") },
  { file: "concert-1.jpg", title: "live concert stage", source: "Unsplash", url: img("photo-1506157786151-b8491531f063") },
  { file: "concert-2.jpg", title: "music festival crowd", source: "Unsplash", url: img("photo-1514525253161-7a46d19cd819") },
  { file: "conference-1.jpg", title: "conference audience", source: "Unsplash", url: img("photo-1517245386807-bb43f82c33c4") },
  { file: "conference-2.jpg", title: "business conference hall", source: "Unsplash", url: img("photo-1540575467063-178a50c2df87") },
  { file: "cinema-1.jpg", title: "cinema seats", source: "Unsplash", url: img("photo-1489599849927-2ee91cede3ba") },
  { file: "cinema-2.jpg", title: "movie night", source: "Unsplash", url: img("photo-1536440136628-849c177e76a1") },
  { file: "stadium-1.jpg", title: "stadium match", source: "Unsplash", url: img("photo-1508098682722-e99c43a406b2") },
  { file: "theater-1.jpg", title: "theater stage", source: "Unsplash", url: img("photo-1503095396549-807759245b35") },
  { file: "theater-2.jpg", title: "performance stage", source: "Unsplash", url: img("photo-1527261834078-9b37d35a4a32") },
  { file: "workshop-1.jpg", title: "creative workshop", source: "Unsplash", url: img("photo-1517048676732-d65bc937f952") },
  { file: "exhibition-1.jpg", title: "art exhibition", source: "Unsplash", url: img("photo-1531058020387-3be344556be6") },
  { file: "exhibition-2.jpg", title: "public event space", source: "Unsplash", url: img("photo-1492684223066-81342ee5ff30") }
];

function download(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { headers: { "User-Agent": "Tazkarti-asset-downloader/1.0" } }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 8) {
        const next = new URL(res.headers.location, url).toString();
        res.resume();
        return resolve(download(next, dest, redirects + 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const type = res.headers["content-type"] || "";
      if (!type.includes("image")) {
        res.resume();
        return reject(new Error(`Not an image: ${url} (${type})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
      file.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(30000, () => {
      req.destroy(new Error(`Timeout downloading ${url}`));
    });
  });
}

(async () => {
  const sources = [];
  let failures = 0;

  for (const asset of assets) {
    const dest = path.join(outDir, asset.file);
    process.stdout.write(`Downloading ${asset.file} ... `);
    try {
      await download(asset.url, dest);
      const stat = fs.statSync(dest);
      if (stat.size < 10000) throw new Error("Downloaded file is too small");
      console.log("done");
      sources.push(asset);
    } catch (error) {
      failures += 1;
      console.log("failed");
      console.error(`  ${error.message}`);
    }
  }

  fs.writeFileSync(
    path.join(outDir, "sources.json"),
    JSON.stringify({ downloadedAt: new Date().toISOString(), assets: sources, failures }, null, 2),
    "utf8"
  );

  if (failures) {
    console.log("\nSome images failed. Existing local fallback photos were kept for failed files.");
    process.exitCode = 1;
  } else {
    console.log("\nAll images downloaded locally. The website now runs without external image requests.");
  }
})();
