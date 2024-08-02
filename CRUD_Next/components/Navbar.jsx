import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral px-8 py-3 rounded-xl ">
      <Link className="text-white font-bold" href={"/"}>
        GTCoding.
      </Link>
      <Link className="btn" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
