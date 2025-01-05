import React from 'react'
import { forwardRef } from 'react'

const Input = forwardRef( function input({
    label,
    type = "text",
    className = "",
    ...props
},ref)
{
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            // fot accessibility not mandatory
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            // passing forward reference to access state
            ref={ref}
            {...props}
            // same id as labes so cursor will move to input by cliking on label
            id={id}
            />
        </div>
    )
})


export default Input