import './App.css'
import { Outlet } from 'react-router-dom';
import Navegacao from './components/Navegacao';

export default function App() {
  return (
    <div className='App'>
      <Navegacao />
      <div className='App'>
        <Outlet />
      </div>
    </div>
  )
}