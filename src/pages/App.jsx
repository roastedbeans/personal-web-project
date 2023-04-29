import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import Logo from "/src/assets/VA-Logo.svg";
import Picture from "/src/assets/profile-image.png";
import QuizBowl from "/src/assets/quiz-bowl.jpg";
import DevCon from "/src/assets/devcon.jpg";
import Robomania from "/src/assets/robomania-portfolio.png";
import Roastedbeans1 from "/src/assets/roastedbeans-portfolio1.png";
import Roastedbeans2 from "/src/assets/roastedbeans-portfolio2.png";

const notifySuccess = () =>
  toast.success("Message sent successfully!", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
const notifyFail = () =>
  toast.error("Unable to send message!", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

function App() {
  const [darkMode, setDarkMode] = useState(0);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xk4dy1r",
        "template_iru9guy",
        form.current,
        "gHywZv6fIJ-1YHQMH"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
          notifyFail();
        }
      );

    e.target.reset();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gradient-to-b from-slate-50 to-slate-400 dark:from-slate-800 dark:to-slate-500 px-10 dark:text-white transition-all duration-300 ease-in-out">
        <section className="bg-gradient-to-b from-slate-50 to-slate-400 dark:from-slate-800 dark:to-slate-500 min-h-screen">
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
            <div className="overflow-hidden flex justify-center w-52 h-52 rounded-full bg-gradient-to-b from-secondary to-white">
              <img
                src={Picture}
                className="object-cover select-none w-40 drop-shadow-md"></img>
            </div>
          </div>
          <div className="select-none text-center p-4">
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

            <div className="flex text-3xl justify-center gap-7 my-8">
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
          <div className="flex flex-col gap-10 justify-start items-center min-h-screen p-4">
            <h1 className="font-raleway font-extrabold text-2xl">
              ACHIEVEMENTS
            </h1>
            <div className="text-white dark:text-primary flex flex-col lg:flex-row justify-evenly w-full items-center gap-10">
              <div className="flex flex-col justify-start gap-10 items-center border-solid border-black border-transparent px-0 pb-5 rounded-sm bg-gradient-to-tl from-slate-500 to-slate-800 dark:from-slate-200 dark:to-slate-500 shadow-lg">
                <img src={QuizBowl} className="h-52" />
                <h2 className="w-[16rem] text-xl font-rajdhani text-center">
                  1st Place - Regional ICpEP Quiz Bowl Competition 2022
                  <span className="text-3xl align-middle animate-[pulse_0.8s_linear_infinite]">
                    |
                  </span>
                </h2>
              </div>
              <div className="text-white dark:text-primary flex flex-col justify-start gap-10 items-center border-solid border-black border-transparent pb-5 bg-gradient-to-tl from-slate-500 to-slate-800 dark:from-slate-200 dark:to-slate-500 shadow-lg">
                <img src={DevCon} className="h-52" />
                <h2 className="w-[16rem] text-xl font-rajdhani text-center">
                  DEVCON Cebu - Lead Learner Workshop 2023
                  <span className="text-3xl align-middle animate-[pulse_0.8s_linear_infinite]">
                    |
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-start items-center min-h-screen p-4">
            <h1 className="font-raleway font-extrabold text-2xl">PORTFOLIO</h1>
            <div className="text-white dark:text-primary flex flex-col lg:flex-row justify-evenly w-full items-center gap-10">
              <a href="https://robomania-timer.vercel.app/" target="_blank">
                <div className="flex flex-col justify-start gap-10 items-center border-solid border-black border-transparent px-0 pb-5 rounded-sm bg-gradient-to-tl from-slate-500 to-slate-800 dark:from-slate-200 dark:to-slate-500 shadow-lg">
                  <img src={Robomania} className="h-52 object-fill" />
                  <h2 className="w-[16rem] text-xl font-rajdhani text-center">
                    Official Timer for RoboMANIA Vex Competition
                    <span className="text-3xl align-middle animate-[pulse_0.8s_linear_infinite]">
                      |
                    </span>
                  </h2>
                </div>
              </a>
              <a href="https://roastedbeans-coffee.vercel.app/" target="_blank">
                <div className="text-white dark:text-primary flex flex-col justify-start gap-10 items-center border-solid border-black border-transparent pb-5 bg-gradient-to-tl from-slate-500 to-slate-800 dark:from-slate-200 dark:to-slate-500 shadow-lg">
                  <img src={Roastedbeans1} className="shadow-inner h-52" />
                  <img
                    src={Roastedbeans2}
                    className="absolute z-10 object-scale-down h-20 -translate-x-32 translate-y-40 shadow-lg"
                  />
                  <h2 className="w-[16rem] text-xl font-rajdhani text-center">
                    The Roastedbeans - Website for a concept coffee shop
                    <span className="text-3xl align-middle animate-[pulse_0.8s_linear_infinite]">
                      |
                    </span>
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-start items-center lg:px-24">
            <h1 className="font-raleway font-extrabold text-2xl">CONTACT ME</h1>
            <div className="shadow-lg flex flex-col  gap-5 p-10 bg-white w-full items-center text-slate-900">
              <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-5">
                <div className="flex flex-row gap-2 ">
                  <AiFillPhone className="text-2xl fill-slate-700" />
                  <h1 className="font-rajdhani">+63 945 386 9447</h1>
                </div>
                <div className="flex flex-row gap-2">
                  <AiFillMail className="text-2xl fill-slate-700" />
                  <h1 className="font-rajdhani">vinceabella05@gmail.com</h1>
                </div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-5 justify-start w-full items-start">
                <div className="flex flex-row gap-2 w-full">
                  <label className="font-rajdhani">NAME</label>
                  <input
                    name="user_name"
                    type="text"
                    id="name"
                    className="font-rajdhani border-b-2 border-slate-200 outline-none w-2/4 px-2"
                    required></input>
                  <label className="ml-10 p-0 font-rajdhani">EMAIL</label>
                  <input
                    name="user_email"
                    type="email"
                    id="email"
                    className="font-rajdhani border-b-2 border-slate-200 outline-none w-3/4 px-2"
                    required></input>
                </div>
                <div className="flex flex-row gap-5 w-2/6">
                  <label className="font-rajdhani">SUBJECT</label>
                  <input
                    name="subject"
                    type="text"
                    id="name"
                    className="font-rajdhani border-b-2 border-slate-200 outline-none w-full px-2"
                    required></input>
                </div>
                <div className="flex flex-col gap-5 w-full text-start items-start justify-start">
                  <textarea
                    required
                    type="text"
                    placeholder="Message"
                    id="message"
                    name="message"
                    maxLength="250"
                    className="resize-none font-rajdhani outline-1 outline-slate-500 border-slate-200 border-2 w-full h-40 overflow-y-auto break-words justify-start items-start align-top text-start p-2"></textarea>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-slate-700 to-slate-500 px-2 py-1 rounded-lg font-rajdhani text-slate-50 font-bold shadow-lg">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <footer className="hover:cursor-default text-center text-sm text-gray-500 dark:text-white py-10">
              © 2023 Vincent D. Abella. All rights reserved.
            </footer>
          </div>
        </section>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
