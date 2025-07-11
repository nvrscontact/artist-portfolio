import { LanguageProvider } from './languages/context/LanguageContext';

export const GlobalContext = ({children}) => {
    return (
        <>
        <LanguageProvider>
            {children}
        </LanguageProvider>
        </>
    )
}