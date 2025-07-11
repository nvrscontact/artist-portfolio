import { LanguageProvider } from './languages/context/LanguageContext';
import { ImageProvider } from './album_img/ImageContext';

export const GlobalContext = ({children}) => {
    return (
        <>
        <LanguageProvider>
         <ImageProvider>
            {children}
         </ImageProvider>
        </LanguageProvider>
          
        </>
    )
}