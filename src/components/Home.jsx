import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { SocialShareButton } from "./SocialShareButton";
import ovni from "../assets/ufo.png";

export const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    moveOvni();
  }, []);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      moveOvni();
    } else {
      controls.stop();
    }
  };

  const moveOvni = async () => {
    while (true) {
      await controls.start({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        transition: { duration: 2, ease: "linear" },
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
      {({ isVisible }) => (
        <section
          onMouseMove={handleMouseMove}
          name="Inicio"
          className="bg-BackgroundHome bg-cover bg-center  h-screen overflow-hidden mx-auto flex flex-col relative font-Oswald"
          loading="lazy"
        >
          <motion.img
            src={ovni}
            alt="ovni"
            className="absolute w-14 h-14"
            animate={controls}
          />
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            className="mx-auto w-[100%] p-2 md:w-[80%] xl:w-[60%] text-white text-center z-10 pt-20 lg:pt-32 "
          >
            <h2 className="text-4xl md:text-6xl font-Oswald text-balance">¡Hola! Soy Matías Bruno</h2>
            <h1 className="text-lg md:text-4xl pt-2 md:pt-4 md:pb-8">Desarrollador Web Junior</h1>
            <p className="text-lg w-[80%] mx-auto md:text-2xl mt-6 md:pb-10 text-balance">
              Me especializo en la elegancia, diseño y funcionalidad de sitios web. Actualmente, soy estudiante de desarrollo de aplicaciones informáticas en La Universidad Nacional del Centro de la Provincia de Buenos Aires.
            </p>
            <SocialShareButton />
          </motion.div>
        </section>
      )}
    </VisibilitySensor>
  );
};
