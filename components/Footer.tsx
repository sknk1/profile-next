export default function Footer() {
  return (
    <footer className="mb-16 flex flex-col flex-wrap items-center justify-center gap-2 border-t-2 border-gray-900 bg-gradient-to-t from-black to-gray-custom py-5 md:mb-0">
      <div className="">Copyright &#169; 2023 All rights reserved.</div>
      <div className="flex flex-row gap-4">
        <i className="lab la-github text-2xl"></i>
        <i className="lab la-linkedin text-2xl"></i>
      </div>
    </footer>
  );
}
