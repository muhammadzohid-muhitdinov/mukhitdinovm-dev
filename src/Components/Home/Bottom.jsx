import React from 'react'
import './Bottom.css'
import Certificate from './mycertificate.jpg'
const Bottom = () => {
  return (
    <div className='Bottom-div'>
        <div className="left-b">
            <img className='sertifikat' src={Certificate} alt="" />
        </div>
        <div className="right-b">
            <div className="theme">
                <h1 className='organdim'>O'rgandim:</h1>
            </div>
            <div className="wikipediya">
                <a id='htmlw' target="_blank" href="https://en.wikipedia.org/wiki/HTML">Html</a>
                <a target="_blank" href="https://ru.wikipedia.org/wiki/CSS">CSS</a>
                <a target="_blank" href="https://ru.wikipedia.org/wiki/Sass">Sass</a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">Bootstrap</a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScripthttps://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/React_(software)">React.js</a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Git">Git</a>
                <a target="_blank" href="https://en.wikipedia.org/wiki/GitHub">Github</a>
            </div>
        </div>
    </div>
  )
}

export default Bottom