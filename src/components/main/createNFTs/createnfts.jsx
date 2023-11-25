import sell from "../../../assets/sell.png";
import buy from "../../../assets/buy.png";
function CreateNFTs() {
  return (
    <section className="mb-24">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[426px]">
          <h3 className="font-medium text-5xl text-white mb-5">
            Create And Sell Your
            <span className="text-[#D6EF0E]">Best NFTs</span>
          </h3>
          <p className="text-white pb-10">
            Start exploring the world of digital art and NFTs today and take
            control of your digital assets with confidence!
          </p>
          <div className="flex items-center gap-9">
            <button className="btn py-3 px-10 rounded-lg bg-[#D6EF0E] font-bold text-white hover:scale-95 duration-700	transition-all">
              Create Now
            </button>
            <p className="learn text-white font-bold hover:cursor-pointer">
              Learn More
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={sell}
            width={410}
            height={400}
            alt=""
            className="absolute top-[200px] right-[300px] z-10 hover:scale-95 duration-700	transition-all hover:cursor-pointe"
          />
          <img
            src={buy}
            width={410}
            height={445}
            alt=""
            className="relative hover:scale-95 duration-700	transition-all hover:cursor-pointe"
          />
        </div>
      </div>
    </section>
  );
}
export default CreateNFTs;
