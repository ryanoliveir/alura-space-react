import styles from './Gallery.module.scss'
import Tags from  '../Tags';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags />
        </section>
    )
}


export default Gallery;