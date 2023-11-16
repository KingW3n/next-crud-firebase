interface botaoProps{
    cor?: 'green' | 'blue' | 'gray'
    classname?: string
    children?:any
}

export default function Botao (props: botaoProps) {
        const cor = props.cor ?? 'gray'
    return (
        <button className={`
         bg-gradient-to-r to-${cor}-700 from-${cor}-400 
          text-white px-4 py-2 rounded-md
        ${props.classname}
        `}>
            {props.children}
        </button>
    )
}