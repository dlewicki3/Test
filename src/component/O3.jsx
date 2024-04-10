import React from 'react';
import "./O3.css";
import {motion, useInView, useScroll, useTransform,} from "framer-motion";

const O3 = () => {
    return (
        <div className="o3">
            <motion.div className="anime"
            initial={{opacity:1}}
            whileInView={{opacity:0.1}}
            viewport={{margin:"-300px"}}


            >SORA
            
            </motion.div>
        </div>
    );
}

export default O3;
