
export default function Img({ src, alt, ...props }:{src:string, alt:string, props?:unknown}) {
  return (
    <>
    <img loading="lazy"  src={src} alt={alt} {...props} />
    </>
  )
}
