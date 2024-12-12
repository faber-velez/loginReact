import { useEffect, useState } from 'react'
import './App.css'
import InventoryPage from './InventoryPage'

function App() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [logueado, setLogueado] = useState(false)

function cambiarUsuario(evento) {
  setUsuario(evento.target.value)
}

function cambiarPassword(evento) {
  setPassword(evento.target.value)  
}

async function ingresar() {
  const peticion = await fetch('http://localhost:3000/login?usuario='+usuario+'&password='+password)

  if(peticion.ok){
    setLogueado(true)
  }else{
    alert("usuario y/o password incorrectos")
  }
}

async function validar() {
  const peticion = await fetch('http://localhost:3000/validacion',{credentials: 'include'})

  if(peticion.ok){
    setLogueado(true)
  }
}

useEffect(()=>{
  validar()
},[])

if(logueado){
  return <  InventoryPage/>
}

  return (
    <>
    <h1>Inicio de sesion</h1>
     <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario}/>
     <input placeholder='password'type="password" name="password" id="password" value={password} onChange={cambiarPassword}/>
     <button onClick={ingresar}>Ingresar</button>        
    </>
  )
}

export default App
