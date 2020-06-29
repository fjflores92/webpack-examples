import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../img/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data)

function App() {

  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <h1>What a wonderful app made with React.js</h1>

      <p className="sass">This is Sass</p>
      <p className="less">This is Less</p>
      <p className="stylus">This is Stylus</p>
      <p className="post-css">This is PostCSS</p>

      <p>
        <video src={video} width={360} controls poster={logo}></video>
      </p>
      <p>
        <img src={logo} alt="" width={180}/>
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