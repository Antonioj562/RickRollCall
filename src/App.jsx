
import { useState, useEffect } from 'react'
import './App.css'
import RollCall from './components/RollCall.jsx'

const App = () => {
  const [ hist, setHist] = useState([]);
  return (
    <div className='parentContainer'>
      <div className='leftContainer'>
        <div>
          <h2>History</h2>
        </div>
      </div>

      <div className='middleContainer'>
        <div className='RollCallContainer'>
          <RollCall hist={hist}/>
        </div>
      </div>

      <div className='rightContainer'>
        <h2>BanList</h2>
      </div>
      
    </div>
  )
}

export default App
