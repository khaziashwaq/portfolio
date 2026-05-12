import { NextResponse } from "next/server";

const USER_ID = "162685763";
const SHELVES = ["currently-reading", "read", "to-read"] as const;

interface Book {
  title: string;
  author: string;
  rating: string;
  userRating: number;
  cover: string;
  link: string;
  dateAdded: string;
}

function extractBooks(xml: string): Book[] {
  const items: Book[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  // Helper to extract tag content, handling optional CDATA wrapping
  const tag = (block: string, name: string) => {
    const cdata = new RegExp(`<${name}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${name}>`);
    const plain = new RegExp(`<${name}>([^<]*)</${name}>`);
    return block.match(cdata)?.[1]?.trim() ?? block.match(plain)?.[1]?.trim() ?? "";
  };

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const title = tag(block, "title");
    const author = tag(block, "author_name");
    const link = tag(block, "link");

    // Extract from description HTML
    const desc = tag(block, "description");
    const rating = desc.match(/average rating:\s*([\d.]+)/)?.[1] ?? "0";
    const userRating = parseInt(desc.match(/rating:\s*(\d+)<br/)?.[1] ?? "0", 10);
    const dateAdded = desc.match(/date added:\s*([\d/]+)/)?.[1] ?? "";

    // Prefer large cover, fall back to medium/small
    const cover =
      tag(block, "book_large_image_url") ||
      tag(block, "book_medium_image_url") ||
      tag(block, "book_small_image_url") ||
      "";

    items.push({ title, author, rating, userRating, cover, link, dateAdded });
  }

  return items;
}

export async function GET() {
  try {
    const results = await Promise.all(
      SHELVES.map(async (shelf) => {
        const url = `https://www.goodreads.com/review/list_rss/${USER_ID}?shelf=${shelf}`;
        const res = await fetch(url, {
          next: { revalidate: 300 }, // revalidate every 5 minutes
        });
        if (!res.ok) return [];
        const xml = await res.text();
        return extractBooks(xml);
      })
    );

    return NextResponse.json({
      currentlyReading: results[0],
      read: results[1],
      toRead: results[2],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
