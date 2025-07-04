import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContext';

import Germany from '../../assets/germany.svg'
import Spain from '../../assets/spain.svg'
import France from '../../assets/france.svg'


const LanguageSelector = () => {
    const {textos,idioma,setIdioma} = useContext(LanguageContext);
 



    /* false significa desplegable cerrado */
    /* empezamos con el menu cerrado */
    const [menuAbierto,setMenuAbierto] = useState(false);


    /* idiomas disponible con nombre y bandera */
    const idiomasDisponibles = [
        {codigo: 'es', nombre:'español',bandera:Spain},
        {codigo: 'de', nombre:'Deutsch',bandera:Germany},
        {codigo: 'fr', nombre:'Français',bandera:France},
    ]
    

    /* idima actual='fr' */
    let idiomaActual = null;
/* crea la variable vacia en null, hace un recorrido por los idiomas de la lista con for,  */
    for(let i = 0; i < idiomasDisponibles.length; i++){
/* en cada vuelta comprueba si el codigo 'fr' o 'es' coincide con el idioma actual. */
        if(idiomasDisponibles[i].codigo === idioma){
/*   si coincide guarda ese idioma como idiomaActual. */
            idiomaActual = idiomasDisponibles[i]
        }
    }

    /* al final del buclé tendre:  idiomaActual = { codigo: 'fr', nombre: 'Français', bandera: France } */

    function alternarMenu(){
        setMenuAbierto(!menuAbierto);
    }
    /* !menuAbierto es el opuesto del valor actual(que es cerrado) */
    /* y pasarle el valor opuesto a la funcion que restablece el valor hace */
    /* que la funcion que en un principio era false ahora sea true */

    
    function seleccionarIdioma(codigoIdioma){
        setIdioma(codigoIdioma); /* la funcion actualizadora usa el parametro ofrecido y cambia */
        /* cambia el idioma actual usando el codigo 'es' 'fr' */
        
        setMenuAbierto(false); /* luego de elegir el idioma cierra el menu */
    }

    return (
    <div>
        
    
{/* el usuario presiona la bandera y se dispara la funcion alternarMenu que abre el menu...
se ejecuta seleccionarIdioma('fr')     
        */}



        <button onClick={alternarMenu} className='flex items-center gap-2'>
            <img src={idiomaActual.bandera} alt='' className='h-4' />
            {idiomaActual.nombre}
        </button>

        <div className='relative'>
         {menuAbierto && (

            <div> {idiomasDisponibles.map((idioma) => (

                <div key={idioma.codigo} onClick={() => seleccionarIdioma(idioma.codigo)}>

                    <img src={idioma.bandera} alt="" className='h-4' />
                    {idioma.nombre}

                </div>) )}  

            </div>)}

        </div>
    

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