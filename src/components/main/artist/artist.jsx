import oswald from "../../../assets/osvald.png";
import oswaldIcon from "../../../assets/osvald_icon.svg";
import ranson from "../../../assets/ranson.png";
import ransonIcon from "../../../assets/ranson_icon.svg";
import cristio from "../../../assets/cristio.png";
import cristioIcon from "../../../assets/cristio_icon.svg";
import sebastian from "../../../assets/sebastian.png";
import sebastianIcon from "../../../assets/sebastian_icon.svg";
import abraham from "../../../assets/abraham.png";
import abrahamIcon from "../../../assets/abraham_icon.svg";
import "./artist.css";
function PopularArtist() {
  return (
    <section className="mt-48 pb-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h3 className="text-5xl text-white font-medium">
            Popular <span className="text-[#D6EF0E]">Artists</span> On This Week
          </h3>
          <button className="btn py-3 px-10 rounded-lg bg-[#D6EF0E] font-bold text-white hover:scale-95 duration-700	transition-all">
            See All
          </button>
        </div>
        <div className="flex items-start gap-8">
          <div className="flex items-center flex-col gap-5">
            <div className="flex items-center gap-8">
              <div className="w-[290px] h-[311px] relative hover:scale-105 duration-700	transition-all hover:cursor-pointer">
                <img src={oswald} width={290} height={311} alt="" />
                <div className="absolute bottom-6 start-6 flex items-center gap-3">
                  <img
                    src={oswaldIcon}
                    width={48}
                    height={48}
                    alt=""
                    className=""
                  />
                  <div className="flex items-start flex-col gap-1">
                    <p className="text-sm text-white">Owner</p>
                    <h5 className="font-bold text-white">Osvaldo Percy</h5>
                  </div>
                </div>
              </div>
              <div className="w-[490px] h-[311px] relative hover:scale-105 duration-700	transition-all ease-in-out hover:cursor-pointer	">
                <img src={ranson} width={490} height={311} alt="" />
                <div className="absolute bottom-6 start-6 flex items-center gap-3">
                  <img src={ransonIcon} width={48} height={48} alt="" />
                  <div className="flex items-start flex-col gap-1">
                    <p className="text-sm text-white">Owner</p>
                    <h5 className="font-bold text-white">Cristio leo</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-[400px] h-[311px] relative hover:scale-105 duration-700	transition-all hover:cursor-pointer">
                <img src={sebastian} width={410} height={311} alt="" />
                <div className="absolute bottom-6 start-6 flex items-center gap-3">
                  <img src={sebastianIcon} width={48} height={48} alt="" />
                  <div className="flex items-start flex-col gap-1">
                    <p className="text-sm text-white">Owner</p>
                    <h5 className="font-bold text-white">Cristio leo</h5>
                  </div>
                </div>
              </div>
              <div className="w-[390px] h-[311px] relative hover:scale-105 duration-700	transition-all hover:cursor-pointer">
                <img src={abraham} width={390} height={311} alt="" />
                <div className="absolute bottom-6 start-6 flex items-center gap-3">
                  <img src={abrahamIcon} width={48} height={48} alt="" />
                  <div className="flex items-start flex-col gap-1">
                    <p className="text-sm text-white">Owner</p>
                    <h5 className="font-bold text-white">Cristio leo</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[410px] h-[652px] relative hover:scale-105 duration-700	transition-all hover:cursor-pointer">
            <img
              src={cristio}
              className="artist_box"
              width={410}
              height={652}
              alt=""
            />
            <div className="flex items-center gap-3 absolute bottom-10 start-6">
              <img src={cristioIcon} alt="" />
              <div className="flex items-start flex-col gap-1">
                <p className="text-sm text-white">Owner</p>
                <h5 className="font-bold text-white">Cristio leo</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PopularArtist;
