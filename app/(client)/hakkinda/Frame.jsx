"use client"
import Iframe from 'react-iframe'

function Frame({height}) {
  return (
    <Iframe url="https://www.youtube.com/embed/or3ImGvZsPA"
    height={height}
    className="aspect-video w-full h-full	"
    display="block"
    position="relative"/>
  )
}

export default Frame

