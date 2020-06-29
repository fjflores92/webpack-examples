import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../img/platzi.png'
import video from '../../video/que-es-core.mp4'

console.log(data)

function App() {

  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <h1>What a wonderful app made with React.js</h1>
      <p>
        <video src={video} width={360} controls poster={logo}></video>
      </p>
      <p>
        <img src={logo} alt="" width={480}/>
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id}/> )
        }
      </ul>
      <button onClick={handleClick}>Show loaders that I know</button>
    </div>
  )
}

export default App