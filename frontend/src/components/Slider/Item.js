import {motion} from 'framer-motion'

const Item = ({image,  index}) =>{
    const w = window.innerWidth;
    return(
        <motion.div className='slider-item'
                    whileHover={{ scale: 1.1 }}
                    transition={{duration: .5}}

                    style={w < 500 ? {
                        left: index * 100 + "%"
                    }:{
                        left: index * 33.33 + "%"
                    }
        }
        >
            <div className='title'>
                Niesamowite właściwości słonecznika
            </div>
            <img src={image} alt='' className='slider-photo' />
        </motion.div>
    )
}

export default Item;