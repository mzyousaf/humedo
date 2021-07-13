import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import Logo from "../../assets/icons/Aero_logo.png"
import { useHistory } from 'react-router-dom'
export default function Login() {

    const history = useHistory()
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">

            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={Logo} style={{ width: "100px", height: "100px" }} />
                <span className="mt-4" style={{ fontSize: "34px", color: "white" }}>Humedo</span>

                <div style={{ marginTop: "100px", width: "325px" }}>
                    <Input className="w-100" preIcon icon={<i class="fa fa-user" style={{ fontSize: "1.5em" }}></i>} />
                    <Input className="w-100 mt-3" preIcon type="password"
                        icon={<i class="fa fa-user" style={{ fontSize: "1.5em" }}></i>}
                    />
                    <Button className="w-100 mt-3" primaryBtn label="LOG IN" />

                </div>
                <span className="mt-4" style={{ color: "#b7b7b7", fontSize: "12px" }}>Forget password?</span>
                <span className="mt-2 pointer" style={{ color: "#b7b7b7", fontSize: "12px" }}
                    onClick={() => history.push("/signup")}
                >Register for Humedo</span>

            </div>
        </div>
    )
}
