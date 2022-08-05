import React from "react";

import laslesImg from "../assets/lasles-vpn.jpg";
import weatherImg from "../assets/weather.jpg";
import todolistImg from "../assets/to-do-list.jpg";
import bctigersImg from "../assets/bctigers.jpg";

function Works() {
  return (
    <div id="works" className="p-40 bg-secondary">
      <h2 className="text-3xl computer:text-4xl text-primary mb-28">
        Here are some of my works:
      </h2>

      <div className="m-16 mb-32 p-12 bg-primary flex flex-col shadow-lg shadow-black rounded-lg">
        <img
          src={laslesImg}
          alt="vpn service"
          className="w-full border-2 border-secondary rounded-md"
        />
        <div className="mt-12 flex justify-between">
          <h3 className="text-3xl text-secondary font-bold leading-loose">
            VPN Service Landing Page
          </h3>
          <a
            href="https://danhutsuliak.github.io/lasles-vpn-landing/"
            target="_blank"
            className="text-xl text-primary bg-secondary rounded-lg p-4 font-bold block shadow-black ease-in-out duration-300 transition-all hover:scale-110 hover:shadow-md"
            rel="noreferrer"
          >
            Visit -&gt;
          </a>
        </div>
      </div>

      <div className="m-16 mb-32 p-12 bg-primary flex flex-col shadow-lg shadow-black rounded-lg">
        <img
          src={bctigersImg}
          alt="sport club"
          className="w-full border-2 border-secondary rounded-md"
        />
        <div className="mt-12 flex justify-between">
          <h3 className="text-3xl text-secondary font-bold leading-loose">
            Sport Club Website
          </h3>
          <a
            href="https://bctigers.herokuapp.com/"
            target="_blank"
            className="text-xl text-primary bg-secondary rounded-lg p-4 font-bold block shadow-black ease-in-out duration-300 transition-all hover:scale-110 hover:shadow-md"
            rel="noreferrer"
          >
            Visit -&gt;
          </a>
        </div>
      </div>

      <div className="m-16 mb-40 p-12 bg-primary flex flex-col shadow-lg shadow-black rounded-lg">
        <img
          src={weatherImg}
          alt="weather app"
          className="w-full border-2 border-secondary rounded-md"
        />

        <div className="mt-12 flex justify-between">
          <h3 className="text-3xl text-secondary font-bold leading-loose">
            Simple Weather App
          </h3>
          <a
            href="https://danhutsuliak.github.io/weather-react/"
            target="_blank"
            className="text-xl text-primary bg-secondary rounded-lg p-4 font-bold block shadow-black ease-in-out duration-300 transition-all hover:scale-110 hover:shadow-md"
            rel="noreferrer"
          >
            Visit -&gt;
          </a>
        </div>
      </div>

      <div className="m-16 mb-40 p-12 bg-primary flex flex-col shadow-lg shadow-black rounded-lg">
        <img
          src={todolistImg}
          alt="to do list"
          className="w-full border-2 border-secondary rounded-md"
        />
        <div className="mt-12 flex justify-between">
          <h3 className="text-3xl text-secondary font-bold leading-loose">
            Simple To-Do List App
          </h3>
          <a
            href="https://danhutsuliak.github.io/to-do-list-react/"
            target="_blank"
            className="text-xl text-primary bg-secondary rounded-lg p-4 font-bold block shadow-black ease-in-out duration-300 transition-all hover:scale-110 hover:shadow-md"
            rel="noreferrer"
          >
            Visit -&gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Works;
