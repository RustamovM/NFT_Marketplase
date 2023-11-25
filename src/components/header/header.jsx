function Header() {
  return (
    <header className="pb-7">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex items-center gap-10 text-[#515150] ">
          <li className="hover:text-white">Marketplace</li>
          <li className="hover:text-white">Artists</li>
          <li className="hover:text-white">Community</li>
          <li className="hover:text-white">Collections</li>
        </ul>
        <button className="py-3 px-10 rounded-lg bg-[#D6EF0E] font-bold text-white hover:scale-95 duration-500	transition-all">
          Contact
        </button>
      </div>
    </header>
  );
}
export default Header;
