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
    <div>

        <button onClick={alternarMenu} className='flex item gap-2'>
            <span className='text-[11px] inter-200 text-white/70'>{idiomaActual.nombre}</span> 
            <img src={idiomaActual.bandera} alt='' className='h-4' />
        </button>


        <section className='relative'>
         {menuAbierto && (

            <div className='absolute top-4 right-0 z-2 flex flex-col gap-[1px]'> {idiomasDisponibles.map((idioma) => (

                
                <div key={idioma.codigo} onClick={() => seleccionarIdioma(idioma.codigo)} className='bg-black/60'>

                    <section className='flex w-20 gap-2 p-[10px] inter-200 text-white/70 '>
                    <span className='text-[11px] '>{idioma.nombre} </span>
                    <img src={idioma.bandera} alt="" className='h-4' />
                    </section>

                </div>) )}  

            </div>)}

        </section>
    

    </div>
)
}

export default LanguageSelector;

     {/*  <label htmlFor="">{textos.idioma} </label>
        <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option value="es"> es </option>
            <option value="de">deutch</option>
            <option value="fr">français</option>
            <option value="en">english</option>
        </select> */}