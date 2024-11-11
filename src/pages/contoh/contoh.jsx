import { useState } from "react";
import Image from "next/image";

export default function Contoh() {
    const image = [
        '/gambar1.jpg',
        '/gambar2.jpg',
        '/gambar3.jpg',
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlider = () => {
        setCurrentIndex((currentIndex) => 
            currentIndex === image.length - 1 ? 0 : currentIndex + 1
        );
    };

    const prevSlider = () => {
        setCurrentIndex((currentIndex) => 
            currentIndex === 0 ? image.length - 1 : currentIndex - 1
        );
    };

    return (  
        <div className="relative w-full max-w-xl mx-auto">
            <div className="relative w-full h-[600px] overflow-hidden">
                {/* Gambar dengan efek fade */}
                <div className="transition-opacity delay-300 duration-700 ease-in-out opacity-100">
                    <Image
                        src={image[currentIndex]}
                        alt="Slider Image"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                    />
                </div>
            </div>

            {/* Tombol Navigasi */}
            <div>
                <button 
                    className="w-[140px] h-[45px] bg-yellow-500 rounded-full absolute z-50 left-0" 
                    onClick={prevSlider}
                >
                    Tombol Kiri
                </button>
                <button 
                    className="w-[140px] h-[45px] bg-yellow-500 rounded-full absolute z-20 right-0" 
                    onClick={nextSlider}
                >
                    Tombol Kanan
                </button>
            </div>
        </div>
    );
}
