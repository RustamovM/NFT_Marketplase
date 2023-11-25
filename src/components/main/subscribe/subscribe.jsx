import subs from "../../../assets/subscribe.png";
import upD from "../../../assets/update.png";
function Subs() {
  return (
    <section className="pt-24 mb-24">
      <div className="container mx-auto flex items-start justify-between">
        <div className="relative">
          <img
            src={subs}
            alt=""
            className="relative hover:scale-95 duration-700	transition-all hover:cursor-pointer"
          />
          <img
            src={upD}
            alt=""
            className="absolute top-[100px] -right-[150px] hover:scale-95 duration-700	transition-all hover:cursor-pointer"
          />
        </div>
        <div className="w-[516px]">
          <h3 className="text-5xl font-bold text-white pb-5">
            Subscribe And
            <span className="text-[#D6EF0E]"> get our Updates</span> Every Week
          </h3>
          <p className="text-white pb-10 text-start">
            We have a blog related to NFT so we can share thoughts and routines
            on our blog which is updated weekly
          </p>
          <form className="w-[516px] bg-[#131E3A] rounded-lg flex items-center justify-between">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your e-mail"
              className="py-4 px-6 text-slate-200 rounded-lg outline-none bg-[#131E3A]"
            />
            <button className="m-1 py-3 px-10 rounded-lg bg-[#D6EF0E] text-white hover:scale-95 duration-700	transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Subs;
