/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

export const CardProyect = ({ title, description, img, urlSit, urlCod }) => {
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
          <motion.a
            title={`Boton sitio ${title}`}
            whileHover={{ scale: 1.1 }}
            href={urlSit}
            rel="noopener noreferrer"
            target="_blank"
            className="w-[85px] items-end bg-Blue hover:bg-BlueHover  border-Blue text-white rounded-md text-center py-2 shadow-lg hover:shadow-blue-500/50 transition-all duration-500"
          >
            Sitio
          </motion.a>
          <motion.a
            title={`Boton codigo ${title}`}
            whileHover={{ scale: 1.1 }}
            href={urlCod}
            rel="noopener noreferrer"
            target="_blank"
            className="w-[85px] items-end bg-Blue hover:bg-BlueHover  border-Blue text-white rounded-md text-center py-2  shadow-lg hover:shadow-blue-500/50 transition-all duration-500"
          >
            Codigo
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};
