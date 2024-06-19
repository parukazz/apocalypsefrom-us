import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import LogoFooter from "../assets/logo-footer.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 px-6 md:px-12 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-8 md:p-10 bg-white bg-opacity-10 border border-zinc-600 rounded-xl gap-6 md:gap-0">
        <div className="">
          <img
            className="w-[200px] md:w-[300px] lg:w-full md:scale-90 -ml-4"
            src={LogoFooter}
            alt=""
          />
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="social-list">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="social-list">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="social-list">
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li className="social-list">
              <a href="#">
                <FaTiktok />
              </a>
            </li>
            <li className="social-list">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
