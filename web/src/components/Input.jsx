import React from 'react'

export default function Input(props) {
    if (props.preIcon) {
        return (
            <div className={`pre-icon-input ${props.className}`}>
                <div className="icon">
                    {props.icon}
                </div>
                <input
                    className={props.inputClassName}
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}
                    id={props.id}
                    type={props.type}
                ></input>
            </div>
        )
    }
    else {
        return (
            <div className={`plain-input ${props.className}`}>
                <span
                    className={`${props.labelClassName}`}
                >
                    {props.label}
                </span>

                <input
                    className={props.inputClassName}
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}
                    id={props.id}
                    type={props.type}
                ></input>
            </div>
        )
    }
}
