interface EntradaProps{
    texto:string
    tipo?: 'text'|  'number'
    valor: any
    somenteleitura?:boolean
    classname?:string
    onChange?:(valor:any) => void

}

export default function Entrada(props: EntradaProps){
    return(
        <div className={` flex flex-col ${props.classname}`}>
            <label className=" mb-2">
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteleitura}
                className={`
                 border border-purple-500 rounded-lg 
                 focus:outline-none bg-gray-100
                 px-4 py-2
                 ${props.somenteleitura ? '' : ' focus:bg-white'}
                 `}
                 onChange={e=>props.onChange?.(e.target.value)}
            />
        </div>
    )
}