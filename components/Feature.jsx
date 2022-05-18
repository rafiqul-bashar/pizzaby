import Image from 'next/image'
import React from 'react'

export default function Feature() {

    const [slide, setSlide] = React.useState(0)

    const images = ["/assets/featured.png", "/assets/featured2.png", "/assets/featured3.png"]

    const handleArrow = (dir) => {
        if (dir === "left") {
            setSlide(slide !== 0 ? slide - 1 : 2)
        }
        if (dir === "right") {
            setSlide(slide !== 2 ? slide + 1 : 0)
        }
    }

    return (
        <div className='h-[calc(50vh-100px)] md:h-[calc(100vh-100px)] bg-primary overflow-hidden relative'>
            <div style={{ left: 0 }} className='arrowContainer' onClick={() => handleArrow("left")}>
                <Image src="/assets/arrowl.png" alt="arrowLeft" layout="fill" objectFit='contain'  />
            </div>

            <div className='w-[300vw] h-full flex transition-all duration-[1.5s] ease-in-out' style={{transform:`translateX(${-100*slide}vw)`}}>
                {images.map((item, i) => (
                    <div className='w-[100vw] h-full relative' key={i}>
                        <Image src={item} alt="featured" layout="fill" objectFit='contain' />
                    </div>
                ))}
            </div>

            <div style={{ right: 0 }} className='arrowContainer' onClick={() => handleArrow("right")}>
                <Image src="/assets/arrowr.png" alt="arrowRight" layout="fill" objectFit='contain'  />
            </div>
        </div>
    )
}
