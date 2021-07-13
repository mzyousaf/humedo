import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import Logo from "../../assets/icons/Aero_logo.png"
import { useHistory } from 'react-router-dom'

export default function Signup() {

    const history = useHistory()
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">

            <div className="d-flex flex-column justify-content-center align-items-center">

                <span className="" style={{ fontSize: "24px", color: "white" }}>Register Settings</span>
                <img className="mt-4" src={Logo} style={{ width: "100px", height: "100px" }} />

                <div className="d-flex" style={{ marginTop: "30px", width: "375px" }}>
                    <div style={{ width: "60%" }}>
                        <Input className="w-100" label="User Name" />
                        <Input className="w-100 mt-3" label="E-Mail" type="email" />
                        <Input className="w-100 mt-3" label="new Password" type="password" />
                        <Input className="w-100 mt-3" label="confirm Password" type="password" />
                    </div>
                    <div className="d-flex justify-content-end" style={{ width: "40%", height: "max-content" }}>
                        <Button secondaryBtn label="not connected" style={{ color: "gold" }} />
                    </div>



                </div>
                <Button className="w-100 mt-5" primaryBtn label="Register" />
                <span className="mt-4" style={{ color: "#b7b7b7", fontSize: "12px" }}>Already have an account?   <span className="pointer" style={{ color: "#63b88c", fontSize: "12px" }} onClick={() => history.push("/login")}>Log in</span></span>
                <span className="mt-2 pointer" style={{ color: "#b7b7b7", fontSize: "12px" }}
                >Exit</span>

            </div>
        </div>
    )
}
