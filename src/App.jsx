
import { useState, useEffect } from 'react'
import './App.css'
import RollCall from './components/RollCall.jsx'

const App = () => {
  const [ banList, setBanList] = useState([]);
  const [ histList, setHistList] = useState([]);
  return (
    <div className='parentContainer'>
      <div className='leftContainer'>
        <div>
          <h2>History:</h2>
          <>
          {histList.map((item, index) => (
              <h4 key={index}>{item}</h4>
          ))}
        </>
        </div>
      </div>

      <div className='middleContainer'>
        <div className='RollCallContainer'>
          <h1>Rick Roll Call</h1>
          <RollCall banList={banList} setBanList={setBanList} histList={histList} setHistList={setHistList}/>
        </div>
      </div>

      <div className='rightContainer'>
        <h2>BanList:</h2>
        <>
          {banList.map((item, index) => (
              <h4 key={index}>{item}</h4>
          ))}
        </>
      </div>
      
    </div>
  )
}

export default App
