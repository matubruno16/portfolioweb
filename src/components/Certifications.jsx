
import Galeria from "./Galeria";

export const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section name="Certificaciones" className="w-[85%] mx-auto py-10">
      <h3 className="text-4xl lg:text-6xl uppercase font-bold font-Oswald mt-6 text-center">
        Certificados
      </h3>
      <p className="text-center text-md pb-[40px]">
        Certificaciones obtenidas
      </p>
      <div className="">
        <Galeria galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                'https://i.postimg.cc/qRghthwL/Certificado-Curso-profesional-de-React-2-001.webp',
              thumbnailURL:
                'https://i.postimg.cc/4ynXbqSk/Certificado-Curso-profesional-de-React-2-001-5.webp',
              width: 900,
              height: 590,
              title: "Certificado Profesional React",
            },
            {
              largeURL:
                'https://i.postimg.cc/65X5kpV1/Certificado-UTNDesarrollo-Web-REACTJS.webp',
              thumbnailURL:
                'https://i.postimg.cc/DZpLCb4D/Certificado-UTN-Desarrollo-Web-REACT-JS.png',
              width: 900,
              height: 590,
              title: "Certificado Desarrollo Web React UTN",
            },
            {
              largeURL:
                'https://i.postimg.cc/wjWqR5CS/Certificado-Desarrollo-Web-Completo.webp',
              thumbnailURL:
                'https://i.postimg.cc/GhWJwYgn/Certificado-Desarrollo-Web-Completo-con-HTML5-CSS3-JS-AJAX-PHP-y-My-SQL-001.png',
              width: 900,
              height: 590,
              title: "Certificado Desarrollo Web Completo",
            },
            {
              largeURL:
                'https://i.postimg.cc/jj5jM36x/Certidicado-Google-Activate-Desarrollo-Web.webp',
              thumbnailURL:
                'https://i.postimg.cc/rsbGpt8W/Certidicado-Google-Activate-Desarrollo-Web-1-001.png',
              width: 900,
              height: 590,
              title: "Certificado Google Activate Desarrollo Web",
            },
            {
              largeURL:
                'https://i.postimg.cc/4x4432S6/Certificado-Wordpress.webp',
              thumbnailURL:
                'https://i.postimg.cc/FKZjL6rh/Certificado-Wordpress-001.png',
              width: 900,
              height: 590,
              title: "Certificado Wordpress",
            },
            {
              largeURL:
                'https://i.postimg.cc/tRdPsT5F/certificado-Testing-Instituto-Web-001.webp',
              thumbnailURL:
                'https://i.postimg.cc/jq9yPPbn/certificado-Testing-Instituto-Web-001.png',
              width: 900,
              height: 590,
              title: "Certificado Testing",
            },
            {
              largeURL:
                'https://i.postimg.cc/kXvXqPfM/Certificado-Software-Testing-Master-Class.webp',
              thumbnailURL:
                'https://i.postimg.cc/c4gMbTmc/Certificado-Software-Testing-Master-Class-001.png',
              width: 900,
              height: 590,
              title: "Certificado Software Testing Master",
            },
            {
              largeURL:
                'https://i.postimg.cc/cJbL27TQ/Certificado-Analisis-De-Datos-Con-Python.webp',
              thumbnailURL:
                'https://i.postimg.cc/dt18gF2d/Certificado-analisis-de-datos-con-Python-001.png',
              width: 900,
              height: 590,
              title: "Certificado Analisis de Datos con Python",
            },
            {
              largeURL:
                'https://i.postimg.cc/Tw536yHB/Certificado-Argentina-Programa2022.webp',
              thumbnailURL:
                'https://i.postimg.cc/gjfRpFDH/Certificado-argentina-programa-2022-001.png',
              width: 900,
              height: 590,
              title: "Certificado Argentina Programa",
            },
            {
              largeURL:
                'https://i.postimg.cc/3NgrkshB/Certificado-HTMLy-CSS.webp',
              thumbnailURL:
                'https://i.postimg.cc/YSk6j7wX/Certificado-HTML-y-CSS-Open-Bootcamp-001.png',
              width: 900,
              height: 590,
              title: "Certificado HTML Y CSS Open-Bootcamp",
            },
            {
              largeURL:
                'https://i.postimg.cc/BZDn7KFK/Certificado-Javascript.webp',
              thumbnailURL:
                'https://i.postimg.cc/Jzj31nSD/Certificado-Javascript-Open-Bootcamp-001.png',
              width: 900,
              height: 590,
              title: "Certificado Javascript",
            },
            {
              largeURL:
                'https://i.postimg.cc/qqfMMkPq/Certificado-Primeros-Paso-Del-Desarrollo-Front-End-TICMAS.webp',
              thumbnailURL:
                'https://i.postimg.cc/QCB5vxpM/Certificado-Primeros-Pasos-del-Desarrollo-Front-End-TICMAS-001.png',
              width: 900,
              height: 590,
              title: "Certificado Desarrollo web TICMAS",
            },
          ]} />

      </div>
    </section>
  );
};



