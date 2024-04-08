import ToggleDarkMode from "@/ui/ToggleDarkMode";
import Navbar from "@/Data/Navbar.json";
import { useEffect } from "react";

function Header({ font }: any) {
  const onscroll = () => {
    const hamburger = document.getElementById("hamburger") as HTMLElement;
    const navMenu = document.getElementById("nav-menu") as HTMLElement;
    const header = document.querySelector("header") as HTMLElement;
    header.classList.toggle("navbar-fixed", window.scrollY > 0);
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  };

  function menuBehavior() {
    window.addEventListener("scroll", onscroll);
    document.addEventListener("click", function (e: any) {
      if (!e.target.classList.contains("hamburger-active")) {
        closeMenu();
      }
    });
  }

  function toggleMenu() {
    const hamburger = document.getElementById("hamburger") as HTMLElement;
    const navMenu = document.getElementById("nav-menu") as HTMLElement;
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  }

  function closeMenu() {
    const hamburger = document.getElementById("hamburger") as HTMLElement;
    const navMenu = document.getElementById("nav-menu") as HTMLElement;
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }

  useEffect(() => {
    menuBehavior();
  }, []);

  return (
    <>
      <header
        className={`${font} absolute left-0 top-0 z-10 flex h-16 w-full items-center justify-center bg-transparent px-4 transition-all lg:h-20`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#home"
                className="block py-6 text-2xl font-bold text-primary"
              >
                hifni
                <span className="text-slate-500 dark:text-slate-300">
                  nazih.
                </span>
              </a>
            </div>
            <div className="mx-0 flex items-center  px-4">
              <button
                type="button"
                id="hamburger"
                className="absolute right-0 block lg:hidden"
                onClick={toggleMenu}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>

              <nav
                id="nav-menu"
                className="absolute right-0 top-full hidden w-full max-w-[260px] rounded-lg bg-slate-50 py-5 shadow-xl dark:bg-slate-700 lg:static lg:block lg:max-w-full lg:translate-x-0 lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
                onClick={closeMenu}
              >
                <ul className="block lg:flex">
                  {Navbar.map((item, index) => (
                    <li className="group" key={index}>
                      <a
                        href={item.url}
                        className="mx-8 flex py-4 font-semibold text-dark group-hover:text-primary dark:text-slate-100 lg:mx-4"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
