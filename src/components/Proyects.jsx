import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import homeBoutique from "../assets/Inicio-Boutique-de-Hebras.webp";
import homeTodoList from "../assets/Inicio-TODOLIST.webp";
import homeDolarHoy from "../assets/home-dolar-hoy.webp";
import homeRelojJs from "../assets/home-reloj.webp";
import homeTrekking from "../assets/home-trekking.webp";
import homeMemoria from "../assets/home-memoriaStudio.webp";
import { CardProyect } from "./CardProyect";

export const Proyects = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isVisible =
        window.scrollY + window.innerHeight >
        document.getElementById("seccion-proyects").offsetTop;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section name="Proyectos" className="w-[80%] py-10 mx-auto h-auto ">
      <h3 className="text-5xl lg:text-6xl uppercase font-bold font-Oswald mt-6 text-center">
        Proyectos
      </h3>
      <p className="text-center font-Oswald text-md pb-[40px]">
        Proyectos creados con HTML5, CSS3, Javascript, React JS, Tailwind CSS y Wordpress
      </p>

      <div
        id="seccion-proyects"
        className="grid grid-cols-1 gap-x-[20px] gap-y-[40px] p-[10px] md:grid-cols-2 xl:grid-cols-3 place-content-center justify-items-center"
      >
        <motion.article
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://memoriastudio.net"
            img={homeMemoria}
            title="Memoria Studio"
            description="Sitio Web desarrollado en Next.js con Blog con CMS de Contentful"
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://trekkingenargentina.vercel.app"
            img={homeTrekking}
            title="Trekking"
            description="Blog de trekking en Argentina con React, Parallax y Tailwind CSS "
          />
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 50, y: -50 }}
          animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://boutiquedehebras.com.ar"
            img={homeBoutique}
            title="Boutique de Hebras"
            description="Tienda E-commerce en Wordpress y Woocommerce"
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://dolarhoyargentina.vercel.app/"
            img={homeDolarHoy}
            title="Dólar Hoy"
            description="Cotización de Dólar y otras divisas en vivo"
          />
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://relojenvivo.netlify.app"
            img={homeRelojJs}
            title="Reloj"
            description="Reloj desarrollado en Javascript con transiciones."
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://todo-list-react-mb.netlify.app"
            img={homeTodoList}
            title="ToDo List"
            description="Lista de tareas desarrollado con React JS and Tailwind CSS"
          />
        </motion.article>
      </div>
    </section>
  );
};
