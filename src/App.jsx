import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {

    setIsOpen(!isOpen)

  }

  return (
    <>
    <div>
      <button className='bg-blue-700' onClick={togglePopup}>show popup</button>

      {isOpen && (
        
              <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40'>

                <div><h2>popup</h2>
                <p>Lorem ipsum dolor si</p>
                <button className='bg-red-400' onClick={togglePopup}>close</button>
                </div>
              </div>
          
      )}

    </div>
      
    
    </>
  )
}

export default App
