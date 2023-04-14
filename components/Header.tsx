import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-header-gray-1 to-header-gray-2 ">
      <div className="mx-auto container flex flex-row justify-center gap-12 text-white p-4">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Portofolios</div>
      </div>
    </header>
  );
}
