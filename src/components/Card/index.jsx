import styles from './Card.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdResize } from 'react-icons/io'


const iconsProps = {
    size: 24,
    color: "#d9d9d9"

}

const Card = ({pictureName, imagePATH, credits}) => {
    return (
        <div className={styles.card}>
            <img 
                className={styles.card__image} 
                src={process.env.PUBLIC_URL + imagePATH} 
                alt={pictureName} 
            />
            <p className={styles.card__description}>
                {pictureName}
            </p>
            <div className={styles.card__credits}>
                <p>{credits}</p>
                <span>
                    <AiOutlineHeart {...iconsProps} />
                    <IoMdResize {...iconsProps} />
                </span>
            </div>
        </div>
    );
}


export default Card;


