import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useHistory } from 'react-router-dom'
import SwitchBtn from '../../components/SwitchBtn'

export default function ConnectRouter() {

    const history = useHistory()

    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">

            <div className="d-flex flex-column justify-content-center align-items-center">

                <span className="" style={{ fontSize: "24px", color: "white" }}>connect Router</span>

                <div className="d-flex" style={{ marginTop: "30px", width: "300px" }}>
                    <div style={{ width: "70%" }}>
                        <Input className="w-100" label="Router Name" />
                        <Input className="w-100 mt-2 mb-5" label="IMEI No." />

                        <span style={{ color: "white" }}>Notification</span>
                        <Input className="w-100 my-2" label="Email" type="email" />
                        <span style={{ color: "white" }}>Phone Number.</span>
                        <Input preIcon icon={<span>+41</span>} className="w-100 mt-0" label="Phone Number" />

                        <Input className="w-100 mt-5" label="Wifi Name" />
                        <Input className="w-100 mt-2 mb-5" label="Password" type="password" />

                        <span style={{ color: "white" }}>Connection Mode</span>
                        <div className=" w-100 d-flex justify-content-between mt-3">
                            <SwitchBtn value={true} label="Wifi" />
                            <SwitchBtn value={false} label="bluetooth" />
                            <SwitchBtn value={false} label="LTE" />

                        </div>

                    </div>



                </div>
                <Button className="w-100 mt-5" primaryBtn label="connect Router" />
            </div>
        </div>
    )
}
