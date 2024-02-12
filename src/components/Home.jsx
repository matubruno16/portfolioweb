import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SocialShareButton } from "./SocialShareButton";
import ovni from "../assets/ufo.png";

export const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const moveOvni = async () => {
      while (inView) {
        await controls.start({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          transition: { duration: 2, ease: "linear" },
        });
  
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };
  
    if (inView) {
      moveOvni();
    }
  
    return () => {
      controls.stop();
    };
  }, [controls, inView]);

  return (
    <div ref={ref} className="section">
      <section
        name="Inicio"
        className="bg-BackgroundHome bg-cover bg-center h-screen overflow-hidden mx-auto flex flex-col relative font-Oswald"
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
          className="mx-auto w-[100%] p-2 md:w-[80%] xl:w-[60%] text-white text-center z-10 pt-20 lg:pt-32"
        >
          <h2 className="text-4xl md:text-6xl font-Oswald text-balance">
            ¡Hola! Soy Matías Bruno
          </h2>
          <h1 className="text-lg md:text-4xl pt-2 md:pt-4 md:pb-8">
            Desarrollador Web Junior
          </h1>
          <p className="flex w-[80%] mx-auto text-base md:text-2xl mt-6 md:pb-10 text-balance">
            Me especializo en la elegancia, diseño y funcionalidad de sitios
            web. Actualmente, soy estudiante de desarrollo de aplicaciones
            informáticas en La Universidad Nacional del Centro de la Provincia
            de Buenos Aires.
          </p>
          <SocialShareButton />
        </motion.div>
      </section>
    </div>
  );
};
