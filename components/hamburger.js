
import { motion } from 'framer-motion'
import styles from '../customTypeComponents/navigation/navigation.module.css'


const HamburgerButton = ({isHamburgerOpen, setIsHamburgerOpen}) => {
   
    return (
        <div 
        className={styles.hamburger}
        onClick={() => {setIsHamburgerOpen(prev => !prev)}}
        >
                <motion.svg
                width='34'
                height='34'
                overflow="visible">
                    <motion.line
                    x1='0'
                    x2='30'
                    y1='10'
                    y2='10'               
                    animate={isHamburgerOpen ? {rotate: 45, translateY: 10} : {rotate: 0, translateY : 0}}
                    stroke="#404040"
                    strokeWidth='2'
                    />    
                    <motion.line
                    x1='0'
                    x2='30'
                    y1='20'
                    y2='20'
                    stroke="#404040"
                    strokeWidth='2'
                    animate={isHamburgerOpen? {opacity: 0}: {opacity : 1}}                   
                    />
                    <motion.line
                    x1='0'
                    x2='30'
                    y1='30'
                    y2='30'
                    stroke="#404040"
                    strokeWidth='2'
                    animate={isHamburgerOpen ? {rotate: -45, translateY : -10}:{rotate: 0, translateY : 0} }    
                   />
                </motion.svg>
            </div>
    )
}

export default HamburgerButton