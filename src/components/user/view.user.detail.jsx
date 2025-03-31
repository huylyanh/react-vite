import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen,
        dataDetail, setDataDetail } = props

    return (
        <Drawer title="Chi tiet user"
            open={isDetailOpen}
            onClose={() => {
                setIsDetailOpen(false)
                setDataDetail(null)
            }}
        >
            {dataDetail ?
                <>
                    <p> Id: {dataDetail._id}</p>
                    <p> Name: {dataDetail.name}</p>
                    <p> Email: {dataDetail.email}</p>
                    <p> Phone: {dataDetail.phone}</p>
                </>
                :
                <>
                    <p>Khong co dui lieu</p>
                </>
            }

        </Drawer>
    )
}

export default ViewUserDetail;