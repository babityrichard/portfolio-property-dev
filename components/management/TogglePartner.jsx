import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const TogglePartner = ({ children, partner }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div 
            layout 
            transition={ {duration: 0.5} } 
            onClick={() => setToggle(!toggle)} className="toggle-main"
        >
            
            <motion.h2 layout>
                { toggle ? <IoIosArrowDropup /> : <IoIosArrowDropdown /> } {partner.name} - {partner.title} 
            </motion.h2>         
            
            {toggle ? children : ''}                 

        </motion.div>
    )
}

export default TogglePartner;
