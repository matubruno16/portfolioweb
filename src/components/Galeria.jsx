import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Galeria({ galleryID, images }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (

    <div className="pswp-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  " id={galleryID}>
      {images && images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          className='hover:cursor-pointer hover:scale-110 transition-all duration-500 grid place-content-center'
          loading="lazy"
          title={image.title}
        >
          <img
            src={image.thumbnailURL}
            alt={image.title}
            className='shadow-xl' />
        </a>
      ))}
    </div>
  );
}
