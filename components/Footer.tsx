export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-center gap-2 border-t-2 border-gray-900 bg-gradient-to-t from-black to-gray-custom py-5">
      <div className="">Copyright &#169; 2023 All rights reserved.</div>
      <div className="flex flex-row gap-4">
        <i className="lab la-github"></i>
        <i className="lab la-linkedin"></i>
      </div>
    </footer>
  );
}
