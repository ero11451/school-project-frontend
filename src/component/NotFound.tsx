

export default function NotFound({text = "Recourse Not Found"}: {text?:string}) {
  return (
    <div className="">
 <p className='text-center text-sm dark:text-white'>{text}</p>
    <div className='flex align-center  content-center justify-center text-white'>
       <img loading="lazy" alt=""  src="file.png"  className="h-32 w-32  " />
       
    </div>
    </div>
  )
}
