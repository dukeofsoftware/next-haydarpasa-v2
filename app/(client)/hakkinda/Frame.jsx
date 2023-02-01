"use client"
import Iframe from 'react-iframe'

function Frame({height}) {
  return (
    <Iframe url="https://www.youtube.com/embed/or3ImGvZsPA"
    width="100%"
    height={height}
    id=""
    className=""
    display="block"
    position="relative"/>
  )
}

export default Frame

