import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContext';

const LanguageSelector = () => {
    
    const {textos,idioma,setIdioma} = useContext(LanguageContext);
    
    return (
    <div>
        <label htmlFor="">{textos.idioma} </label>
        <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option value="es">espanish</option>
            <option value="de">deutch</option>
            <option value="fr">français</option>
            <option value="en">english</option>

        </select>
    </div>
)
}

export default LanguageSelector;