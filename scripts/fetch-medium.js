import fs from "fs";
import path from "path";
import Parser from "rss-parser";
import "dotenv/config";

const username = process.env.GH_USERNAME;
if (!username) throw new Error("GH_USERNAME environment variable is required");

const feedUrl = `https://medium.com/feed/@${username}`;
const parser = new Parser();
const outputDir = "src/data";
const outputFile = path.join(outputDir, "posts.json");

async function fetchPosts() {
  const feed = await parser.parseURL(feedUrl);

  const posts = feed.items.map((item) => ({
    title: item.title || "Untitled",
    link: item.link || "#",
    pubDate: item.pubDate || new Date().toISOString(),
  }));

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Fetched ${posts.length} posts to ${outputFile}`);
}

fetchPosts().catch((err) => {
  console.error(err);
  process.exit(1);
});
