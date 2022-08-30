import photo0 from '../../assets/images/bielunka.jpg'
import photo1 from '../../assets/images/bez.jpg'
import photo2 from '../../assets/images/domowa-nalewka.jpg'
import photo3 from '../../assets/images/orzechowka.jpg'
import photo4 from '../../assets/images/rumianek.jpg'
import photo5 from '../../assets/images/slonecznik.png'

import {motion, useScroll, useTransform} from 'framer-motion'

import '../../styles/Slider.scss';
import {useEffect, useRef, useState} from "react";
import Item from './Item';

const Slider =() => {

    const slider = useRef();
    const images = [photo0, photo1, photo2, photo3, photo4, photo5, photo1, photo2, photo3, photo4, photo1, photo2]
    const [width, setWidth] = useState(0);



    useEffect(() => {
        setWidth((prevState) => slider.current.scrollWidth - slider.current.offsetWidth)
    }, [])
    return (
        <div className='slider-wrapper'>

            <br />

                <motion.div className='slider-inner' drag="x"
                            dragConstraints={{right: 0, left: -width}}
                            ref={slider}>
                    {
                        images.map( (item, index) =>
                            <Item image={item} index={index}/>
                        )



                    }


            </motion.div>


        </div>
    )
}

export default Slider;