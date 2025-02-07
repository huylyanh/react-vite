
import { Button, Input, notification, Modal } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { createUserAPI } from '../../services/api.service';

const UserForm = (props) => {
    const { loadUser } = props;

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // if (res?.data?.data) {
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            resetAndCloseModel();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModel = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }

    return (
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    // khi can truyen tham so cho function onClick={() => handleClickBtn()}
                    onClick={() => setIsModalOpen(true)}
                    type='primary'>Create User </Button>
            </div>

            <Modal title="Create User"
                open={isModalOpen}
                onOk={handleSubmitBtn}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText={"CREATE"}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <span>Full name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            value={[password]}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>
                </div>

            </Modal>
        </div >
    )
}

export default UserForm;