import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const client = createClient('hHn0MQpqe1pmewb2UlVCA99TGC9j9OQ2cmgClw2PolozWWzq4MRCEFLi');
    const query = 'Nature';

    client.photos.search({ query, per_page: 10 }).then(photos => {
      setImages(photos.photos);
    }).catch(error => {
      console.error('Error al obtener imágenes de Pexels:', error);
    });
  }, []);

  const handleLike = (id) => {
    const isLiked = favorites.includes(id);
    if (isLiked) {
      // Si la imagen ya está en favoritos, la quitamos
      const updatedFavorites = favorites.filter(imageId => imageId !== id);
      setFavorites(updatedFavorites);
    } else {
      // Si la imagen no está en favoritos, la agregamos
      setFavorites([...favorites, id]);
    }
  };

  const isImageLiked = (id) => favorites.includes(id);

  return (
    <div className="container-home"> 
      <section>
        <h1>Imágenes de Naturaleza, Likea las que más te gustan!</h1>
        <div className="image-container">
          {images.map(image => (
            <div key={image.id} className="image-item" style={{ position: 'relative' }}>
              <div className="image-overlay">
                <button onClick={() => handleLike(image.id)} className="like-button" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'transparent', border: 'none' }}>
                  <FontAwesomeIcon 
                    icon={faHeart} 
                    style={{ fontSize: '2rem', color: isImageLiked(image.id) ? 'red' : 'white' }}
                  />
                </button>
              </div>
              <img src={image.src.medium} alt={image.photographer} className='img' />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

