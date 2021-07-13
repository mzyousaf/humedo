import React from 'react'

export default function Button(props) {
    if (props.primaryBtn) {
        return (
            <div className={`primary-plain-btn ${props.className}`}>
                <span className={props.labelClassName} style={props.style}>{props.label}</span>
            </div>
        )
    }
    else if (props.secondaryBtn) {
        return (
            <div className={`secondary-plain-btn ${props.className}`}>
                <span className={props.labelClassName} style={props.style}>{props.label}</span>
            </div>
        )
    }
}
