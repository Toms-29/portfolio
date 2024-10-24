import assets from "../../assets"
import { useState } from "react"


const Carrusel = () => {

    const images = [
        assets.technology.javascript.src,
        assets.technology.javascript.src,
        assets.technology.javascript.src,
        assets.technology.javascript.src,
        assets.technology.javascript.src,
    ];

    const Carousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const prevSlide = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        return (
            <div className="carousel-container">
                <div className="carousel">
                    {images.map((image, index) => {
                        const isActive = index === currentIndex;
                        const isPrev = index === (currentIndex - 1 + images.length) % images.length;
                        const isNext = index === (currentIndex + 1) % images.length;

                        return (
                            <div
                                key={index}
                                className={`carousel-item ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                            >
                                <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                            </div>
                        );
                    })}
                </div>
                <button className="prev-button" onClick={prevSlide}>‹</button>
                <button className="next-button" onClick={nextSlide}>›</button>
            </div>
        );
    };

}

export default Carrusel