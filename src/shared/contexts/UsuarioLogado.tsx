import { createContext, useCallback, useEffect, useState } from "react";


interface UsuarioLogadoContextData{
    nomeDoUsuario: string;
    logout?: () => void;
}
interface UsuarioLogadoContextProps{
    children: React.ReactNode;
}
export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>({} as UsuarioLogadoContextData);

export const UsuarioLogadoContextProvider: React.FC<UsuarioLogadoContextProps> = ({children}) =>{
    const [nome, setNome] = useState('');

    useEffect(()=>{
        setTimeout(() =>{
            console.log('Nome: ', nome);

            setNome('Sorak')

            console.log('Nome mudado:', nome)
        },3100);

    },[])
    const handleLogout = useCallback( () =>{
        console.log('logout foi executado')
    },[])

    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}