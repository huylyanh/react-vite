import { useEffect, useState } from "react"
import { Input, notification, Modal } from 'antd';
import { createUserAPI, updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const { isUpdateModalOpen, setIsUpdateModalOpen,
        dataUpdate, setDataUpdate,
        loadUser
    } = props

    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => {
        console.log("---- check dataUpdate props in useEffect: ", dataUpdate)

        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        // if (res?.data?.data) {
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật user thành công"
            })
            resetAndCloseModel();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error update user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModel = () => {
        console.log("---- run resetAndCloseModel here")
        setIsUpdateModalOpen(false);

        setFullName("");
        setPhone("");
        setId("")

        setDataUpdate(null)
    }

    console.log("---- run render UpdateUserModal here")
    console.log("---- check Id, Phone, Fullname: ", id, phone, fullName)
    console.log("---- check dataUpdate props outside useEffect: ", dataUpdate)

    return (
        <Modal title="Update User"
            open={isUpdateModalOpen}
            onOk={handleSubmitBtn}
            onCancel={() => resetAndCloseModel()}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>Full name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                {/* <div>
                    <span>Password</span>
                    <Input.Password
                        value={[password]}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div> */}
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>

        </Modal>

    )
}

export default UpdateUserModal;