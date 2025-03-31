import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Popconfirm, notification } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {

    const { dataUsers, loadUser } = props;

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [dataDetail, setDataDetail] = useState(null)

    const handelDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xoa user thanh cong"
            })
            await loadUser();
        }
        else {
            notification.error({
                message: "Delete user",
                description: "Xoa user that bai"
            })
        }
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => {
                        setIsDetailOpen(true);
                        setDataDetail(record);
                    }}>{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined style={{ cursor: "pointer", color: "blue" }}
                            onClick={() => {
                                setIsUpdateModalOpen(true);
                                setDataUpdate(record)
                            }} />
                        <Popconfirm
                            title="Are you sure to delete this task?"
                            onConfirm={() => handelDeleteUser(record._id)}
                            okText="Yes"
                            cancelText="No"
                            placement="left"
                        >

                            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>
                    </div>
                )
            }
        },

    ];

    console.log("---- run render UserTable here")

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"} />

            <UpdateUserModal
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />

            <ViewUserDetail
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />

        </>
    )
}

export default UserTable;