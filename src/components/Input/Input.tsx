interface Input {
    label: string
    type: string
}

export const Input = ({label, type}: Input)=>{
    return(
        <div>
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label}/>
        </div>
    )
}