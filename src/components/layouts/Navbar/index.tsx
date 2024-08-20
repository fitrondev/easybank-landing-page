import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header className="shadow-sm bg-background relative z-50">
      <div className="container h-16 flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <NavMenu className="hidden lg:flex gap-5 text-muted-foreground" />

        <div className="hidden lg:block">
          <Button>Request Invite</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
