import { TbTruckDelivery, TbCertificate } from 'react-icons/tb'
import { GrUserManager } from 'react-icons/gr'
import '../styles/ShopInfo.scss'
const ShopInfo =()=>{
    return(
        <div className='shop-info-wrapper'>
            <div className='shop-info-box'>
                <TbTruckDelivery size={60} className='icon'/>
                <p>Darmowa szybka dostawa od 250 zł na terenie Polski </p>
            </div>

            <div className='shop-info-box'>
                 <GrUserManager size={60} className='icon'/>
                <p>Fachowa obsługa </p>
            </div>

            <div className='shop-info-box'>
                 <TbCertificate size={60} className='icon'/>
                <p>Szybkie i bezproblemowe reklamacje </p>
            </div>

        </div>

    )
}

export default ShopInfo;
