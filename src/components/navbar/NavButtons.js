import Link from "next/link";

export const handleScroll = (e) => {
  // stop regular scroll
  e.preventDefault();
  //get href
  const href = e.currentTarget.href;
  // erase everything before the hashtag so that getElementById understands where to go
  const targetId = href.replace(/.*\#/, "");
  // get the id
  const elem = document.getElementById(targetId);
  // just scroll, see scrollIntoView doc
  elem?.scrollIntoView({ behavior: "smooth" });
};

export default function NavButtons({ onClick }) {
  const navScroll = (e) => {
    handleScroll(e);
    onClick();
  };
  return (
    <>
      <Link
        onClick={navScroll}
        href="#about"
        className="hover:cursor-pointer hover:scale-105 transition-all duration-300"
      >
        About
      </Link>
      <Link
        onClick={navScroll}
        href="#projects"
        className="hover:cursor-pointer hover:scale-105 transition-all duration-300"
      >
        Works
      </Link>
      <Link
        onClick={navScroll}
        href="#contact"
        className="hover:cursor-pointer hover:scale-105 transition-all duration-300"
      >
        Contact Me
      </Link>
    </>
  );
}
