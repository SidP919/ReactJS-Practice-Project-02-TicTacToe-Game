import React from 'react';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

const Icon = ({name}) => {
    switch(name){
        case "Cross" : 
            return(
                <h1><FaTimes className='icon'/></h1>
            );
        case "Circle" : 
            return(
                <h1><FaRegCircle className='icon'/></h1>
            );
        default : 
            return(
                <h1><FaPen className='icon'/></h1>
            );    
    }
}

export default Icon;