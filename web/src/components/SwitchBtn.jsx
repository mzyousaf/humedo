import React from 'react'

export default function SwitchBtn(props) {
    return (
        <div className="d-flex flex-column align-items-center" style={{ width: "max-content" }}>
            <label class="switch" onClick={props.onClick}>
                <input type="checkbox" checked={props.value}></input>
                <span class="slider round"></span>
            </label>

            {
                props.label &&
                <span className="m-1" style={{ fontSize: "12px", color: `${props?.value ? "white" : "gray"}` }}>{props.label}</span>
            }
        </div>
    )
}
