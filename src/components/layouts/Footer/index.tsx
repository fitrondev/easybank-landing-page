import Logo from "@/assets/logo.svg";
import Facebook from "@/assets/icon-facebook.svg";
import Youtube from "@/assets/icon-youtube.svg";
import Twitter from "@/assets/icon-twitter.svg";
import Pinterest from "@/assets/icon-pinterest.svg";
import Instagram from "@/assets/icon-instagram.svg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#2d314e] py-10 text-background">
      <div className="container lg:h-[100px] flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="flex flex-col items-center justify-center lg:justify-between gap-5 lg:gap-0">
            <div className="bg-background max-w-max p-2 rounded-full">
              <img src={Logo} alt="" />
            </div>

            <div className="flex justify-between gap-4">
              <img src={Facebook} alt="" />
              <img src={Youtube} alt="" />
              <img src={Twitter} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <div className="h-full text-center lg:text-start">
              <ul className="h-full flex flex-col lg:justify-between gap-4 lg:gap-0">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="h-full text-center lg:text-start">
              <ul className="h-full flex flex-col lg:justify-between gap-4 lg:gap-0">
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:items-end lg:justify-between gap-4 lg:gap-0">
          <div>
            <Button>Request Invite</Button>
          </div>

          <div>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
