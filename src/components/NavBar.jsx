import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from '../assets/logo.webp'
import { IconMenuHamburger } from "./IconMenuHamburger";

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      if (currentScrollPosition > 600) {
        setNavbarBackground("bg-BackgroundHome");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      link: "Inicio",
      id: 1,
    },
    {
      link: "Sobre Mi",
      id: 2,
    },
    {
      link: "Proyectos",
      id: 3,
    },
    {
      link: "Certificaciones",
      id: 4,
    },
    {
      link: "Servicios",
      id: 5,
    },
    {
      link: "Contacto",
      id: 6,
    },
  ];

  return (
    <nav
      className={[
        "",
        !isMenuOpen
          ? ` ${navbarBackground === "transparent"
            ? "bg-transparent"
            : " bg-BackgroundHome"
          } fixed w-screen h-[61px] z-[300] `
          : " h-screen fixed bg-BackgroundHome bg-left-top z-[300] ",
      ]}
    >
      <div className="flex justify-between items-center px-10 xl:px-20 w-screen pt-2 lg:pt-0">
        <a
          href="https://matubruno16.github.io/portfolio"
          title="Logo Matias Bruno Desarrollador Web"
        >
          <img
            className="lg:w-[270px] m-2"
            src={Logo}
            alt="Logo Matias Bruno" 
            width={200}
            />
        </a>
        <IconMenuHamburger 
          handleClick={handleClick}
        />
        <div className="hidden lg:inline-flex ">
          {!isMenuOpen &&
            links.map((l) => (
              <Link
                className="text-white font-Oswald font-semibold  xl:tracking-wide text-medium xl:text-lg m-1 lg:m-2 xl:m-4 align-middle hover:cursor-pointer border-b
              border-b-transparent hover:border-b hover:border-b-white hover:transition-all duration-200 ease-in-out uppercase active:border-b active:border-b-blue-400"
                smooth={'easeInOutQuint'}
                to={l.link}
                key={l.id}
                title={`Enlace ${l.link}`}
                href={l.link}
              >
                {l.link}
              </Link>
            ))}
        </div>
      </div>
      {isMenuOpen &&
        links.map((l) => (
          <Link
            onClick={() => setMenuOpen(false)}
            className="flex font-Oswald max-w-max text-white text-3xl mt-10 my-6 ml-6 hover:cursor-pointer
            hover:border-b-4 hover:border-b-white hover:transition-all duration-300 uppercase"
            smooth={'easeInOutQuint'}
            to={l.link}
            key={l.id}
            title={`Enlace ${l.link}`}
            href={l.link}
          >
            {l.link}
          </Link>
        ))}
    </nav>
  );
};
