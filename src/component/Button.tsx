
export default function Button({type = 'primary', label }:{type:'outline' | 'primary', label:React.ReactNode}) {
    return (
        <div>
            <button type="button" className={`${type} 
            "py-3 px-4 inline-flex items-center gap-x-2 text-sm 
            font-semibold rounded-lg border border-transparent bg-blue-600 text-white
             hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none
             "`}
             >
                {label}
            </button>
        </div>
    )
}
