import Link from "next/link";

export default function HomeLinks() {
  return (
    <div className="homeLinksContainer">
      <h1 className="homeLinksTitle">blogTemplate</h1>
      <div className="homeLinksLinkContainer">
        <a
          href="link"
          target="_blank"
          className="homeLinksLink"
        >
          LinkedIn
        </a>
        <a
          href="link"
          target="_blank"
          className="homeLinksLink"
        >
          YouTube
        </a>
        <a
          href="link"
          target="_blank"
          className="homeLinksLink"
        >
          Instagram
        </a>
      </div>
      <div className="homeQuote">Quote of your blog</div>
    </div>
  );
}
