import hero from "../../../assets/hero.jpg";
import "./intro.css";
function Intro() {
  return (
    <section className="pt-24">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[544px] h-[585px]">
          <h1 className="font-medium text-[64px] text-white pb-5">
            Discover and Collect The Best NFTs{" "}
            <span className="font-medium text-[64px] text-#D6EF0E">
              Digital Art.
            </span>
          </h1>
          <p className="text-base text-white pb-10">
            Get started with the easiest and most secure platform to buy and
            trade digital ART and NFT’s. Start exploring the world of digital
            art and NFTs today and take control of your digital assets with
            confidence!
          </p>
          <div className="flex items-center gap-9 pb-[72px]">
            <button className="py-3 px-10 rounded-lg bg-[#D6EF0E] font-bold text-white hover:scale-95 duration-500	transition-all">
              Explore Now
            </button>
            <p className="font-bold text-white hover:cursor-pointer">
              Learn More
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="border-r-2 border-[#D6EF0E] pe-7">
              <p className="font-medium text-5xl text-white pb-2">
                <span className="text-[#D6EF0E]">8.9</span>K
              </p>
              <p className="text-white">Art work</p>
            </div>
            <div className="border-r-2 border-[#D6EF0E] pe-7">
              <p className="font-medium text-5xl text-white pb-2">
                <span className="text-[#D6EF0E]">65</span>K
              </p>
              <p className="text-white">Artist</p>
            </div>
            <div className="border-r-2 border-[#D6EF0E] pe-7">
              <p className="font-medium text-5xl text-white pb-2">
                <span className="text-[#D6EF0E]">87</span>K
              </p>
              <p className="text-white">Collection</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={hero} alt="" className="rounded-3xl relative" />
          <div className="box w-[304px] p-5 rounded-2xl absolute end-3 bottom-[-210px]">
            <div className="flex items-center justify-between pb-6">
              <div className="">
                <p className="text-[#D6EF0E] pb-2">Ends in</p>
                <p className=" font-bold text-white">05:45:47</p>
              </div>
              <div className="">
                <p className="text-[#D6EF0E] pb-2">Current bid</p>
                <p className="  font-bold text-white">0.24ETH</p>
              </div>
            </div>
            <button className="py-3 px-10 rounded-lg border-2 border-[#D6EF0E] bg-text-tr   ansparent	 font-bold text-white hover:scale-95 duration-500	transition-all">
              Place A Bid
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Intro;
