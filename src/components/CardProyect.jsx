/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

export const CardProyect = ({ title, description, img, urlSit }) => {
  return (
    <>
      <motion.div
        id="cardProyect"
        className="flex max-w-[350px] flex-col rounded-xl overflow-hidden max-md:mx-auto bg-BackgroundCard bg-clip-border text-gray-700 shadow-md"
      >
        <div className="overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none ">
          <img
            className="hover:scale-110 transition-all duration-500 overflow-hidden w-full max-w-[100%] bg-cover aspect-video object-cover "
            src={img}
            alt={`Imagen del sitio ${title}`}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h4 className="block text-2xl font-Oswald font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mt-3 block text-xl font-normal leading-relaxed text-gray-700 antialiased font-Roboto">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-around p-4">
          <a
            title={`Boton sitio ${title}`}
            href={urlSit}
            rel="noopener noreferrer"
            target="_blank"
            className="button-send w-40 flex items-center justify-center px-4 py-2 rounded-lg text-lg capitalize bg-Blue  text-white"
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Visitar</span>
          </a>
        </div>
      </motion.div>
    </>
  );
};
