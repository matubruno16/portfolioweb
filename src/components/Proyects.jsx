import { CardProyect } from "./CardProyect";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import homeBoutique from "../assets/Inicio-Boutique-de-Hebras.webp";
import homeTodoList from "../assets/Inicio-TODOLIST.webp";
import homeDolarHoy from "../assets/home-dolar-hoy.webp";
import homeSocialMedia from "../assets/home-social-media.webp";
import homeRelojJs from "../assets/home-reloj.webp";
import homeTaTeTi from "../assets/HomeTaTeTi.webp";

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
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://boutiquedehebras.com.ar"
            urlCod="https://boutiquedehebras.com.ar"
            img={homeBoutique}
            title="Boutique de Hebras"
            description="Tienda E-commerce en Wordpress y Woocommerce"
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://dolarhoyargentina.vercel.app/"
            urlCod="https://github.com/matubruno16/dolar-hoy"
            img={homeDolarHoy}
            title="Dólar Hoy"
            description="Cotización de Dólar y otras divisas en vivo"
          />
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://todo-list-react-mb.netlify.app/"
            urlCod="https://github.com/matubruno16/todolist"
            img={homeTodoList}
            title="ToDo List"
            description="Lista de tareas desarrollado con React JS and Tailwind CSS"
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.9, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://social-media-dashboard-matias-bruno.netlify.app"
            urlCod="https://github.com/matubruno16/social-media-dashboard"
            img={homeSocialMedia}
            title="Social Media Dashboard"
            description="Dashboard en React y Tailwind CSS."
          />
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.2, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://relojenvivo.netlify.app"
            urlCod="https://github.com/matubruno16/reloj-js"
            img={homeRelojJs}
            title="Reloj"
            description="Reloj desarrollado en Javascript con transiciones."
          />
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.5, duration: 2, stiffness: 100 }}
        >
          <CardProyect
            urlSit="https://tatetireactjs.netlify.app/"
            urlCod="https://github.com/matubruno16/tateti"
            img={homeTaTeTi}
            title="Ta-Te-Ti"
            description="Juego Ta te ti desarrollado en React JS"
          />
        </motion.article>
      </div>
    </section>
  );
};
