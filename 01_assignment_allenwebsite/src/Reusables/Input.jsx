/* eslint-disable react/prop-types */
export default function Input({
    label,
    labelClassName,
    inputClassName,
    type='text',
    id,
    labelStyle,
    inputStyle,
    ...props
}){
    return(
        <div>
            {label && <label htmlFor={id} className={` ${labelClassName}`} style={labelStyle} >
                    {label}
                </label>}
            <input id={id} type={type} className={` ${inputClassName}`} style={inputStyle} {...props}/>
        </div>
    )
}