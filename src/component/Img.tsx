
export default function Img({ src, alt, ...props }:{src:string, alt:string, props?:unknown}) {
  return (
    <>
    <img src={src} alt={alt} {...props} />
    </>
  )
}
