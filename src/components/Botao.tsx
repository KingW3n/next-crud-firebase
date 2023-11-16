interface botaoProps{
    cor?: 'green' | 'blue' | 'gray'
    classname?: string
    children?:any
}

export default function Botao (props: botaoProps) {
        const cor = props.cor ?? 'green'
    return (
        <button className={`
         bg-gradient-to-r  from-green-400  to-green-700
          text-white px-4 py-2 rounded-md
        ${props.classname}
        `}>
            {props.children}
        </button>
    )
}