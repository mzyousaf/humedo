import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useHistory } from 'react-router-dom'
import SwitchBtn from '../../components/SwitchBtn'

export default function AccountSettings() {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">

            <div className="d-flex flex-column align-items-center scrollbar" style={{ height: "85vh", overflowY: "auto" }}>

                <span className="" style={{ fontSize: "24px", color: "white" }}>Account Settings</span>

                <div className="d-flex" style={{ marginTop: "30px", width: "330px" }}>
                    <div style={{ width: "65%" }}>
                        <Input className="w-100" label="User Name" />
                        <Input className="w-100 mt-2" label="E-Mail" type="email" />
                        <Input className="w-100 mt-2" label="Password" type="password" />

                        <Input className="w-100 mt-4" label="Wifi Name" type="text" />
                        <Input className="w-100 mt-2 mb-4" label="Password" type="password" />

                        <span style={{ color: "white" }}>Notification</span>
                        <Input className="w-100 my-2" label="Email" type="email" />
                        <span style={{ color: "white" }}>Phone Number.</span>
                        <Input preIcon icon={<span>+41</span>} className="w-100 mb-4" label="Phone Number" />

                        <span style={{ color: "white" }}>Connection Mode</span>
                        <div className=" w-100 d-flex justify-content-between mt-3">
                            <SwitchBtn value={true} label="Wifi" />
                            <SwitchBtn value={false} label="bluetooth" />
                            <SwitchBtn value={false} label="LTE" />

                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={{ width: "35%", height: "max-content" }}>
                        <Button secondaryBtn label="connected" style={{ color: "#63b88c" }} />
                    </div>
                </div>

                <div className="d-flex mt-4" style={{ width: "330px" }}>
                    <div style={{ width: "65%" }}>

                        <span style={{ color: "white" }}>Advanced Mode</span>
                        <Input className="w-100" label="User" type="text" />
                        <Input className="w-100 mt-2" label="Password" type="password" />
                        <Input className="w-100 mt-2" label="Server" type="text" />
                    </div>
                    <div className="d-flex justify-content-start pl-4" style={{ width: "35%", height: "max-content" }}>
                        <SwitchBtn value={true} />
                    </div>
                </div>

                <Button className="w-100 mt-5" primaryBtn label="connect Router" />
            </div>
        </div >
    )
}
