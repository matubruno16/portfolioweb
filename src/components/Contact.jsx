import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer className="bg-Overlay bg-cover  h-80" name="Contacto">
      <div className="md:bg-center flex flex-col justify-center items-center">
        <h3 className=" text-white text-2xl lg:text-4xl text-center font-Oswald pt-6">
          ¿Nos ponemos en contacto?
        </h3>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="mx-auto bg-Blue hover:bg-BlueHover transition-all border-Blue text-white rounded-md px-6 py-2 mt-6 shadow-lg hover:shadow-blue-500/50  duration-500"
          title="Icono Red Social"
          href="mailto:matubruno16@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contacto
        </motion.a>
        <ul className="flex items-center justify-center mt-8">
          <li className=" ">
            <a
              title="Icono Red Social"
              href="https://www.facebook.com/matias.bruno19/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook className="text-blue-500 w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4" />
            </a>
          </li>
          <li>
            <a
              title="Icono Red Social"
              href="https://www.instagram.com/matubruno16/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram className=" text-Instagram w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4" />
            </a>
          </li>
          <li>
            <a
              title="Icono Red Social"
              href="https://www.linkedin.com/in/matiasbruno19/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className=" text-LinkedIn w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4" />
            </a>
          </li>
          <li>
            <a
              title="Icono Red Social"
              href="https://github.com/matubruno16"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className=" text-white w-10 h-10 hover:scale-125 transition-all duration-500 hover:brightness-125 mx-4" />
            </a>
          </li>
        </ul>
        <p className="text-white text-sm lg:text-base pt-14">
          © Copyright 2023 <strong>Matias Bruno. </strong>All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};
