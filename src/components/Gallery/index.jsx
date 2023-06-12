import styles from './Gallery.module.scss'
import Tags from  '../Tags';
import Card from '../Card';
import { useState } from 'react';


const Gallery = () => {

  const galleryImages = [
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-1.png",
        "id": "1",
        "tag": "Galáxias"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-2.png",
        "id": "2",
        "tag": "Estrelas"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-3.png",
        "id": "3",
        "tag": "Lua"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-4.png",
        "id": "4",
        "tag": "Galáxias"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-5.png",
        "id": "5",
        "tag": "Estrelas"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-6.png",
        "id": "6",
        "tag": "Nebulosas"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-7.png",
        "id": "7",
        "tag": "Galáxias"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-8.png",
        "id": "8",
        "tag": "Nebulosas"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-9.png",
        "id": "9",
        "tag": "Estrelas"
      },
      {
        "title": "Nome da Foto",
        "credits": "Alura Space",
        "image": "/assets/images/gallery/foto-10.png",
        "id": "10",
        "tag": "Estrelas"
      }
  ] 

  const [items, setItems] = useState(galleryImages);

  const availableTags = [...new Set(galleryImages.map(tag => tag.tag))];


  const filterImages = (tag) => {
    const newImages = galleryImages.filter(image => {
      return image.tag === tag;
    })


    setItems(newImages);
  };
    
  const showAllImages = () => {
    setItems(galleryImages);
  }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={availableTags} onTagClick={filterImages}  completeGallery={showAllImages}/>
            <ul className={styles.gallery__cards}>
                {items.map(galleryImage => {
                    return (
                        <li key={galleryImage.id}>
                          <Card 
                            pictureName={galleryImage.title}
                            imagePATH={galleryImage.image}
                            credits={galleryImage.credits}
                          />
                      </li>
                    ) 
                })}
            </ul>
        </section>
    )
}


export default Gallery;