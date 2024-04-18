import Link from "next/link"

export default function MenuItem( {text, route, icon} ){

  var image = ""
  if (icon != null){
      image = <img src={icon} alt={text}/>
  }

  return (
      <Link href={route}> {image} <span>{text}</span> </Link>
  )
}