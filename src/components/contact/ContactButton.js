import Link from "next/link";

export default function ContactButton({ src, name }) {
  return (
    <Link
      href={src}
      target="_blank"
      className="relative p-3 border border-black text-black hover:cursor-pointer"
    >
      {name}
    </Link>
  );
}
