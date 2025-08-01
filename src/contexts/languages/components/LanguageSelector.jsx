import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContext';

/* /context/LanguageContext */

import Germany from '../../../assets/germany.svg'
import Spain from '../../../assets/spain.svg'
import France from '../../../assets/france.svg'
import Uk from '../../../assets/uk.svg'


const LanguageSelector = () => {
    const {textos,idioma,setIdioma} = useContext(LanguageContext);
 
    const [menuAbierto,setMenuAbierto] = useState(false);

    const idiomasDisponibles = [
        {codigo: 'es', nombre:'Español',bandera:Spain},
        {codigo: 'de', nombre:'Deutsch',bandera:Germany},
        {codigo: 'fr', nombre:'Français',bandera:France},
        {codigo: 'en', nombre:'English',bandera:Uk},
    ]
    
    let idiomaActual = null;
    for(let i = 0; i < idiomasDisponibles.length; i++){
        if(idiomasDisponibles[i].codigo === idioma){
            idiomaActual = idiomasDisponibles[i]}}

    function alternarMenu(){
        setMenuAbierto(!menuAbierto);
    }

    function seleccionarIdioma(codigoIdioma){
        setIdioma(codigoIdioma);
        setMenuAbierto(false);
    }

    return (
    <div className='relative'>

        <button onClick={alternarMenu} className='flex items-center gap-3'>
            <span className='text-[12px] lg:text-sm inter-200 text-white/70'>{idiomaActual.nombre}</span> 
            <img src={idiomaActual.bandera} alt='' className='h-4 lg:h-5' />
        </button>


         {menuAbierto && (

            <div className='absolute right-[-14px] z-2 mt-[15px] bg-black/60 inter-200 text-end'  > {idiomasDisponibles.map((idioma) => (

                
                <div key={idioma.codigo} onClick={() => seleccionarIdioma(idioma.codigo)} className='w-28 m-[2px] pr-2 flex flex-cols justify-end bg-white/10 '>

                    <section className='flex gap-2 items-center text-white/70 lg:w-24 py-3 pr-2 w-full justify-end '>
                        <span className='text-[14px] lg:text-md '>{idioma.nombre} </span>
                        <img src={idioma.bandera} alt="" className='h-4' />
                    </section>

                </div>) )}

            </div>)}
    </div>
)
}

export default LanguageSelector;
