const res = await fetch("https://www.goodreads.com/review/list_rss/162685763?shelf=currently-reading");
const xml = await res.text();

function tag(block, name) {
  const cdata = new RegExp(`<${name}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${name}>`);
  const plain = new RegExp(`<${name}>([^<]*)</${name}>`);
  return block.match(cdata)?.[1]?.trim() ?? block.match(plain)?.[1]?.trim() ?? "";
}

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
items.forEach((m) => {
  const b = m[1];
  const title = tag(b, "title");
  const author = tag(b, "author_name");
  const cover = tag(b, "book_large_image_url") || tag(b, "book_medium_image_url") || tag(b, "book_small_image_url");
  const link = tag(b, "link");
  console.log({ title, author, cover, link: link.substring(0, 60) });
});
