import '../styles/AboutPage.scss'
import image from '../assets/products/pojemnik.jpg'
import image2 from '../assets/products/IMG_20220515_230303.jpg'

import { HiOutlineShoppingCart } from 'react-icons/hi'
const AboutPage = () => {
    return(
        <div className="divider">
            <section className="about-page-wrapper">
                <div className="container">
                    <div className='card-title'>
                        Wiadro fermentacyjne 15L
                    </div>

                    <div className='card-desc'>
                        <p>Short description about the product</p>
                    </div>
                    <div className='card-prize'>
                        <p>22.50</p>
                    </div>
                    <div className='card-footer'>
                        <button><HiOutlineShoppingCart /></button>
                        <button><HiOutlineShoppingCart /></button>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={image} />
                </div>
                <h4 className='title'>Wiadro fermentacyjne 15L</h4>
            </section>






            <section className="about-page-wrapper">
                <div className="container">
                    <div className='card-title'>
                        Nalewka z kwiatów mniszka lekarskiego
                    </div>
                    <div className='card-desc'>
                        <p>Short description about the product</p>
                    </div>
                    <div className='card-footer'>
                        <button><HiOutlineShoppingCart /></button>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={image2} />
                </div>
                <h4 className='title'>Nalewka z kwiatów mniszka lekarskiego</h4>
            </section>
            <section className="about-page-wrapper">
                <div className="container">
                    <div className='card-title'>
                        Nalewka z kwiatów mniszka lekarskiego z nutka owoacową, pomidorami i ogórkami
                    </div>
                    <div className='card-desc'>
                        <p>Short description about the product Short description about the product Short description about the product</p>
                    </div>
                    <div className='card-footer'>
                        <button><HiOutlineShoppingCart /></button>
                        <button><HiOutlineShoppingCart /></button>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={image2} />
                </div>
                <h4 className='title'>Nalewka z kwiatów mniszka lekarskiego z nutka owoacową, pomidorami i ogórkami</h4>
            </section>


        </div>

    )
}

export default AboutPage;