import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FullScreenAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [isAnimatingLe, setIsAnimatingLe] = useState(true);
    const [isAnimatingLeRev, setIsAnimatingLeRev] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isVisibleFondo, setIsVisibleFondo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisibleFondo(false);
            console.log('He activado setIsVisibleFondo ');
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed w-full h-full z-30 ${!isVisibleFondo ? 'hidden' : ''}`}>
        <motion.div
            className='fixed top-0 left-0 w-full h-full bg-black z-50'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: isAnimating ? 1 : 0}}
            transition={{
                type: "spring",
                damping: 20,
                duration: 5
            }}
            style={{ transformOrigin: 'top ' }} // Cambia el origen de la transformación
        />
        <div>
            
        
        </div>
        </div>


    );
};

export default FullScreenAnimation;