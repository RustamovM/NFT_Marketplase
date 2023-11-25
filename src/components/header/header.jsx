function Header() {
  return (
    <header className="pb-7">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex items-center gap-10 text-[#515150] ">
          <li className="hover:text-white hover:border-b-2 hover:cursor-pointer border-[#D6EF0E]">
            Marketplace
          </li>
          <li className="hover:text-white hover:border-b-2 hover:cursor-pointer border-[#D6EF0E]">
            Artists
          </li>
          <li className="hover:text-white hover:border-b-2 hover:cursor-pointer border-[#D6EF0E]">
            Community
          </li>
          <li className="hover:text-white hover:border-b-2 hover:cursor-pointer border-[#D6EF0E]">
            Collections
          </li>
        </ul>
        <button className="btn py-3 px-10 rounded-lg bg-[#D6EF0E] font-bold text-white hover:scale-95 duration-500	transition-all">
          Contact
        </button>
      </div>
    </header>
  );
}
export default Header;
