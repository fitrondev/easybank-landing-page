const NavData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Blog",
    link: "#blog",
  },
  {
    name: "Careers",
    link: "#careers",
  },
];

const NavMenu = ({ className }: { className?: string }) => {
  return (
    <nav>
      <ul className={className}>
        {NavData.map((item, index) => (
          <li
            key={index}
            className="hover:text-foreground transition-colors duration-300 ease-in-out">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
