import BgHeroLg from "@/assets/bg-intro-desktop.svg";
import BgHeroSm from "@/assets/bg-intro-mobile.svg";
import Mockups from "@/assets/image-mockups.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container h-[calc(100vh-64px)] flex flex-col-reverse lg:flex-row">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-5 lg:gap-10">
          <h1 className="text-5xl lg:text-6xl">
            Next generation <br /> digital banking
          </h1>

          <p className="lg:max-w-[450px] lg:text-lg text-muted-foreground text-center lg:text-start">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <div>
            <Button>Request Invite</Button>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
      <img
        src={BgHeroLg}
        alt=""
        className="hidden lg:block absolute -top-[270px] -right-96 -z-10"
      />

      <img
        src={BgHeroSm}
        alt=""
        className="lg:hidden w-full absolute top-0 sm:-top-20 -z-10"
      />

      <img
        src={Mockups}
        alt=""
        className="absolute -top-36 sm:-top-60 lg:-inset-y-[130px] lg:-right-32 -z-10"
      />
    </section>
  );
};

export default Hero;
