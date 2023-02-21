import { useState } from 'react'
import '../../src/App.css'
import { Rotas } from '../routes'
import { UsuarioLogadoContextProvider } from '../shared/contexts'

function App() {
  return(
    <UsuarioLogadoContextProvider>
      <Rotas/>
    </UsuarioLogadoContextProvider>
  )
}
export default App
