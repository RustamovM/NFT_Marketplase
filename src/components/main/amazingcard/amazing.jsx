import cyber from "../../../assets/cyberpnk.jpg";
import charge from "../../../assets/charge.jpg";
import surgeon from "../../../assets/surgeon.jpg";
import drop from "../../../assets/drop.svg";
import clock from "../../../assets/clock.svg";
import "./amazing.css";
function AmazingCard() {
  return (
    <section className="pt-[184px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-5xl text-white w-[506px]">
            <span className="font-medium text-5xl text-[#D6EF0E]">Amazing</span>{" "}
            and Super Unique Art of This{" "}
            <span className="font-medium text-5xl text-[#D6EF0E]">Week</span>
          </h3>
          <button className="btn py-3 px-10 rounded-lg bg-[#D6EF0E] font-bold text-white hover:scale-95 duration-500	transition-all">
            See All
          </button>
        </div>
        <div className=" flex items-center gap-8 mt-16 mb-24">
          <div className="box_amazing w-[410px] h-[498px] bg-[##131E3A] p-5 hover:skew-y-6 transition-all duration-1000 hover:cursor-pointer">
            <img
              src={cyber}
              width={370}
              height={340}
              alt=""
              className="mx-auto"
            />
            <div className="flex items-center pt-6 pb-4">
              <h4 className="font-bold text-2xl text-white">Cyberpunk Como</h4>
              <div className="flex items-center ps-10">
                <img src={drop} alt="" />
                <p className="ps-1 font-bold text-white">490ETH</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="text-[#838382] text-sm pb-1 text-start">
                  Ending In
                </p>
                <div className="flex items-center gap-3 text-[#fff] font-bold">
                  <img src={clock} alt="" />
                  <p className="">03:24:56</p>
                </div>
              </div>
              <button className="btn px-10 py-3 rounded-lg text-[#D6EF0E] hover:scale-95 duration-500	transition-all">
                Place A Bid
              </button>
            </div>
          </div>
          <div className="box_amazing w-[410px] h-[498px] bg-[##131E3A] p-5 hover:skew-y-6 transition-all duration-1000 hover:cursor-pointer">
            <img
              src={charge}
              width={370}
              height={340}
              alt=""
              className="mx-auto"
            />
            <div className="flex items-center pt-6 pb-4">
              <h4 className="font-bold text-2xl text-white">
                Charge, Qi tiao yu
              </h4>
              <div className="flex items-center ps-10">
                <img src={drop} alt="" />
                <p className="ps-1 font-bold text-white">490ETH</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="text-[#838382] text-sm pb-1 text-start">
                  Ending In
                </p>
                <div className="flex items-center gap-3 text-[#fff] font-bold">
                  <img src={clock} alt="" />
                  <p className="">03:24:56</p>
                </div>
              </div>
              <button className="btn px-10 py-3 rounded-lg text-[#D6EF0E] hover:scale-95 duration-500	transition-all">
                Place A Bid
              </button>
            </div>
          </div>
          <div className="box_amazing w-[410px] h-[498px] bg-[##131E3A] p-5 hover:skew-y-6 transition-all duration-1000 hover:cursor-pointer">
            <img
              src={surgeon}
              width={370}
              height={340}
              alt=""
              className="mx-auto"
            />
            <div className="flex items-center pt-6 pb-4">
              <h4 className="font-bold text-2xl text-white">
                Surgeon, Josh Rife
              </h4>
              <div className="flex items-center ps-10">
                <img src={drop} alt="" />
                <p className="ps-1 font-bold text-white">490ETH</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="text-[#838382] text-sm pb-1 text-start">
                  Ending In
                </p>
                <div className="flex items-center gap-3 text-[#fff] font-bold">
                  <img src={clock} alt="" />
                  <p className="">03:24:56</p>
                </div>
              </div>
              <button className="btn px-10 py-3 rounded-lg text-[#D6EF0E] hover:scale-95 duration-500	transition-all">
                Place A Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AmazingCard;
