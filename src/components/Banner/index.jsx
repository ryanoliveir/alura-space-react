
const Banner = ({text, imagePath}) => {
    return (
        <>
            <h1>{text}</h1>
            <img src={imagePath} alt="Page Banner"/>
        </>
    
    )
}

export default Banner;