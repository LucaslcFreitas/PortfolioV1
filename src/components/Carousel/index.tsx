'use client';
import { useState } from 'react';
import * as Styled from './styles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type CarouselProps = {
    images: Image[];
    width: string;
    height: string;
};

type Image = {
    id: string;
    imgSource: string;
    alt: string;
};

function Carousel({ images }: CarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [positions, setPositions] = useState<number[]>(
        images.map((_, index) => (index !== 0 ? 100 : 0)),
    );

    const handleNext = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage((prev) => {
                const newPosition = prev + 1;
                setPositions((prevProsition) => {
                    const updatePosition = prevProsition.map((_, index) =>
                        index < newPosition
                            ? -100
                            : index > newPosition
                              ? 100
                              : 0,
                    );
                    return updatePosition;
                });
                return newPosition;
            });
        }
    };

    const handleBack = () => {
        if (currentImage > 0) {
            setCurrentImage((prev) => {
                const newPosition = prev - 1;
                setPositions((prevProsition) => {
                    const updatePosition = prevProsition.map((_, index) =>
                        index < newPosition
                            ? -100
                            : index > newPosition
                              ? 100
                              : 0,
                    );
                    return updatePosition;
                });
                return newPosition;
            });
        }
    };

    return (
        <Styled.CarouselContainer>
            <Styled.ArrowBack visible={currentImage !== 0} onClick={handleBack}>
                <IoIosArrowBack />
            </Styled.ArrowBack>

            {images.map((item, index) => (
                <Styled.ImageView
                    key={index}
                    src={item.imgSource}
                    alt={item.alt}
                    left={`${positions[index]}%`}
                />
            ))}

            <Styled.ArrowForward
                visible={currentImage < images.length - 1}
                onClick={handleNext}
            >
                <IoIosArrowForward />
            </Styled.ArrowForward>
        </Styled.CarouselContainer>
    );
}

export default Carousel;
