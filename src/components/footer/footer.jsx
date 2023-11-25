import fasebook from "../../assets/fasebook.svg";
import telegram from "../../assets/telegram.svg";
import twiter from "../../assets/twiter.svg";
import linkdin from "../../assets/linkidin.svg";
function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto  ">
        <div className="flex items-start gap-24 mx-auto border-b-2 bottom-12">
          <div className="flex flex-col items-start gap-6">
            <p className="w-[272px] text-white text-start">
              Discover NFTs by category, track the latest drop, and and follow
              the collections you love. Enjoy it!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/?locale=ru_RU"
                target="_blink"
                className=""
              >
                <img
                  src={fasebook}
                  alt=""
                  className="hover:cursor-pointer hover:scale-150 duration-700	transition-all"
                />
              </a>
              <a
                href="https://web.telegram.org/k/"
                target="_blink"
                className=""
              >
                <img
                  src={telegram}
                  alt=""
                  className="hover:cursor-pointer hover:scale-150 duration-700	transition-all"
                />
              </a>
              <a
                href="https://twitter.com/?lang=ru"
                target="_blink"
                className=""
              >
                <img
                  src={twiter}
                  alt=""
                  className="hover:cursor-pointer hover:scale-150 duration-700	transition-all"
                />
              </a>
              <a href="https://linkedin.com/" target="_blink" className="">
                <img
                  src={linkdin}
                  alt=""
                  className="hover:cursor-pointer hover:scale-150 duration-700	transition-all"
                />
              </a>
            </div>
          </div>
          <div className="flex items-start gap-24">
            <div className="w-28">
              <h4 className="text-xl font-bold text-white mb-6 items-start flex">
                Explore
              </h4>
              <ul className="flex items-start flex-col gap-2 text-white">
                <li className="">Art Sign In</li>
                <li className="">Collectibles</li>
                <li className="">Domain Name</li>
                <li className="">Utility</li>
              </ul>
            </div>
            <div className="w-28">
              <h4 className="text-xl font-bold text-white mb-6 items-start flex">
                Statistic
              </h4>
              <ul className="flex items-start flex-col gap-2 text-white">
                <li className="">Ranking</li>
                <li className="">Collectibles</li>
                <li className="">Activity</li>
              </ul>
            </div>
            <div className="w-28">
              <h4 className="text-xl font-bold text-white mb-6 items-start flex">
                Company
              </h4>
              <ul className="flex items-start flex-col gap-2 text-white">
                <li className="">About Us</li>
                <li className="">Career</li>
                <li className="">Support</li>
                <li className="">Partners</li>
              </ul>
            </div>
            <div className="w-28">
              <h4 className="text-xl font-bold text-white mb-6 items-start flex">
                Resources
              </h4>
              <ul className="flex items-start flex-col gap-2 text-white">
                <li className="">Help Center</li>
                <li className="">Platform Status</li>
                <li className="">Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between text-white">
          <p className="">© Copyright 2023 - davixq</p>
          <div className="flex  items-center gap-7">
            <a
              href="https://elamant.markets/?gclid=CjwKCAiA04arBhAkEiwAuNOsIpEaZDSYHYG81A5zwmQk6d5JYQzrTWarZWHdTAlhyFF7KH6a-LSOLRoCmh4QAvD_BwE"
              target="_blink"
              className=""
            >
              Privacy Policy
            </a>
            <a
              href="https://elamant.markets/?gclid=CjwKCAiA04arBhAkEiwAuNOsIpEaZDSYHYG81A5zwmQk6d5JYQzrTWarZWHdTAlhyFF7KH6a-LSOLRoCmh4QAvD_BwE"
              target="_blink"
              className=""
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
