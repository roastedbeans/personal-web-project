import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Logo from "/src/assets/VA-Logo.svg";
import Picture from "/src/assets/profile-image.png";

function App() {
  const [darkMode, setDarkMode] = useState(0);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gradient-to-b from-slate-50 to-slate-300 dark:from-slate-800 dark:to-slate-500 px-10 dark:text-white transition-all duration-300 ease-in-out">
        <section className="bg-gradient-to-b from-slate-50 to-slate-300 dark:from-slate-800 dark:to-slate-500 min-h-screen">
          <nav className="py-8 mb-0 flex justify-between">
            <img
              src={Logo}
              className="drop-shadow-sm w-10 transition-all hover:rotate-[360deg] duration-700 rotate-0 ease-in-out"></img>
            <ul className="flex items-center">
              <li className="">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-gray-900 transition-all hover:cursor-pointer hover:rotate-[360deg] hover:text-gray-700 duration-700 rotate-0 ease-in-out dark:text-secondary"
                />
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">
            <img
              src={Picture}
              className="select-none w-40 drop-shadow-md"></img>
          </div>
          <div className="select-none text-center p-8 ">
            <h2 className="hover:cursor-default text-4xl font-raleway font-[900] text-secondary drop-shadow-sm">
              VINCENT D. ABELLA
            </h2>
            <h2 className="hover:cursor-default text-xl font-rajdhani">
              Developer
            </h2>
            <p className="hover:cursor-default max-w-xs py-5 text-[16px] font-rajdhani leading-7 text-gray-700 mx-auto dark:text-white">
              Hi, I'm a 3rd-year computer engineering student at the University
              of San Carlos. Follow me as I walk through the adventure of web
              and game development.
              <br />
              <br />
              Where to find me on the web...
              <span className="text-3xl align-middle animate-[pulse_0.8s_linear_infinite]">
                |
              </span>
            </p>

            <div className="flex text-3xl justify-center gap-7">
              <a href="https://www.facebook.com/thevinchi05" target="_blank">
                <AiFillFacebook className="rounded-full drop-shadow-sm text-gray-900 transition-all hover:cursor-pointer hover:rotate-[360deg] hover:text-secondary duration-700 rotate-0 ease-in-out dark:text-white dark:hover:text-secondary" />
              </a>
              <a href="https://github.com/roastedbeans" target="_blank">
                <AiFillGithub className="drop-shadow-sm text-gray-900 transition-all hover:cursor-pointer hover:rotate-[360deg] hover:text-secondary duration-700 rotate-0 ease-in-out dark:text-white dark:hover:text-secondary" />
              </a>
              <a href="https://www.linkedin.com/in/vinch05/" target="_blank">
                <AiFillLinkedin className="rounded-full drop-shadow-sm text-gray-900 transition-all hover:cursor-pointer hover:rotate-[360deg] hover:text-secondary duration-700 rotate-0 ease-in-out dark:text-white dark:hover:text-secondary" />
              </a>
              <a
                href="https://www.instagram.com/vinchoutsidewalls"
                target="_blank">
                <AiFillInstagram className="drop-shadow-sm text-gray-900 transition-all hover:cursor-pointer hover:rotate-[360deg] hover:text-secondary duration-700 rotate-0 ease-in-out dark:text-white dark:hover:text-secondary" />
              </a>
              <a href="https://twitter.com/vinchi_05" target="_blank">
                <AiFillTwitterCircle className="drop-shadow-sm text-gray-900 transition-all hover:cursor-pointer hover:rotate-[360deg] hover:text-secondary duration-700 rotate-0 ease-in-out dark:text-white dark:hover:text-secondary" />
              </a>
            </div>
          </div>
          <div>
            <div></div>
          </div>

          <div>
            <footer className="hover:cursor-default text-center text-sm text-gray-500 dark:text-white">
              © 2023 Vincent D. Abella. All rights reserved.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
