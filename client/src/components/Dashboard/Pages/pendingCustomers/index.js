import { Button, Modal, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { GetpendingCustomers } from "../../../../services/api";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";
import { Rejectuser } from "../../../../services/api";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showModal = (record) => {
    setSelectedRecord(record);
    console.log(record);
    setModalVisible(true);
  };

  const selectedID = selectedRecord;
  const approvalStatus = new FormData();
  approvalStatus.append("uderID", selectedID)

  const handleOk = async () => {
    approvalStatus.append("message", "Approved");
    await Rejectuser(approvalStatus);
    setModalVisible(false);
  };

  const handleCancel = async () => {
    approvalStatus.append("message", "Rejected");
    await Rejectuser(approvalStatus);
    setModalVisible(false);
  };

  useEffect(() => {
    const GetpendingCustomersData = async () => {
      const result = await GetpendingCustomers();
    //   console.log(result);
      const results = result.pendingCustomers;
      const customers = results.map((customer) => ({
        Id : customer._id,
        name: customer.Name,
        companyName: customer.CompanyName,
        email: customer.email,
        status: customer.status,
      }));
      setDataSource(customers);
    };
    GetpendingCustomersData();
  }, []);

  return (
    <>
      <AppHeader />
      <div
        className="SideMenuAndPageContent"
        style={{
             background: "#F2F2F2",
             height : "91vh"
             }}
      >
        <SideMenu></SideMenu>

        <Space
          size={20}
          direction="vertical"
          style={{ background: "#F2F2F2" }}
        >
          <Typography.Title level={4}>Customers</Typography.Title>
          <Table
            style={{ width: 1000 }}
            loading={loading}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
              },
              {
                title: "company Name",
                dataIndex: "companyName",
              },
              {
                title: "Email",
                dataIndex: "email",
              },
              {
                title: "Status",
                dataIndex: "status",
              },
              {
                title: "Action",
                key: "action",
                render: (text, record) => (
                  <Button onClick={() => showModal(record)}>View</Button>
                ),
              },
            ]}
            dataSource={dataSource}
            pagination={{
              pageSize: 5,
            }}
          ></Table>
          
          <Modal
            // title="Hello World"
            visible={modalVisible}
            // onOk={handleOk(selectedRecord?.name)}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText="Reject"
            okText="Accept"
          >
            <h4 
            style={{
                textAlign: "center",
                color: "#383434",
                }}
                >User Approval:</h4>
                <br/>
            <p >Are You sure You want to Approve this user</p>
           
          </Modal>
        </Space>
      </div>
    </>
  );
}

export default Customers;
