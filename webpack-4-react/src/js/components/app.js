import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)

function App() {

  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      What a wonderful app made with React.js
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