import styles from './Popular.module.scss'

const popularImages = [
    {
      "path": "/assets/images/popular/foto-1.png",
      "alt": "galáxia",
      "id": 1
    },
    {
      "path": "/assets/images/popular/foto-2.png",
      "alt": "lua",
      "id": 2
    },
    {
      "path": "/assets/images/popular/foto-3.png",
      "alt": "terra",
      "id": 3
    },
    {
      "path": "/assets/images/popular/foto-4.png",
      "alt": "nuvem",
      "id": 4
    },
    {
      "path": "/assets/images/popular/foto-5.png",
      "alt": "meteoro",
      "id": 5
    }
  ]
  


const Popular = () => {
    return (
        <aside className={styles.popular}>
            <h2>Populares</h2>
            <ul className={styles.popular__images}>
                {popularImages.map(pupularImage => {
                    return (
                        <li key={pupularImage.id}>
                            <img src={pupularImage.path} alt={pupularImage.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais</button>
        </aside>
    )
}


export default Popular;
