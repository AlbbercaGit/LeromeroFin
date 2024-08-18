import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FullScreenAnimation = ({ key }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [isAnimatingLe, setIsAnimatingLe] = useState(true);
    const [isAnimatingLeRev, setIsAnimatingLeRev] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isVisibleFondo, setIsVisibleFondo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimatingLeRev(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisibleFondo(false);
            console.log('He activado setIsVisibleFondo');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id='Entrada' className={`w-full h-full ${!isVisibleFondo ? 'hidden' : ''}`}>
            <motion.div
                className='fixed top-0 left-0 w-full h-full bg-black z-40'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isAnimatingLeRev ? 0 : 1 }}
                transition={{
                    type: "spring",
                    damping: 20,
                    duration: 5
                }}
                style={{ transformOrigin: 'top' }} // Cambia el origen de la transformación
            />
            <div>
                {/* Contenido adicional */}
            </div>
        </div>
    );
};

export default FullScreenAnimation;