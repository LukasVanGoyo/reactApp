import orzechowka from '../assets/images/orzechowka.jpg'
import slonecznik from '../assets/images/slonecznik.png'
import bez from '../assets/images/bez.jpg'
import '../styles/SuggestedArticles.scss'

const SuggestedArticles = () => {
    return(
        <div className='suggested-wrapper'>
           <div className='suggested-element'>
               <img src={orzechowka} alt='' className='suggested-element-image' />
               <div className='suggested-caption'>
                   <p className='caption'>Prozdrowotna nalewka z orzechów włoskich</p>
               </div>
           </div>

            <div className='suggested-element'>
                <img src={slonecznik} alt='' className='suggested-element-image' />
                <div className='suggested-caption'>
                    <p className='caption'>Niesamowite właściwości słonecznika</p>
                </div>
            </div>

            <div className='suggested-element'>
                <img src={bez} alt='' className='suggested-element-image' />
                <div className='suggested-caption'>
                    <p className='caption'>Zobacz co można zrobić z kwiatów bzu</p>
                </div>
            </div>

        </div>
    )
}

export default SuggestedArticles;