import React, {useState,createContext} from 'react';

import es from '../i18n/es'
import de from '../i18n/de'
import en from '../i18n/en'
import fr from '../i18n/fr'

const idiomas = {en,es,fr,de}

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [idioma,setIdioma] = useState('es');

    const textos = idiomas[idioma];

    return (
        <LanguageContext.Provider value={{idioma,setIdioma,textos}} >
            {children}
        </LanguageContext.Provider>
    )
}