import { Button, Modal, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { Getpendingproperties } from "../../../../services/api";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";
import { statusPropertychange } from "../../../../services/api";

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




  useEffect(() => {
    const Getpendingpropertiesdata = async () => {
      const result = await Getpendingproperties();
    //   console.log(result);
      const results = result.pendingProperties;
      const Properties = results.map((property) => ({
        Id : property._id,
      title : property.title,
          type : property.property_type,
          price : property.price,
          priceFrom : property.priceFrom,
          priceTo : property.priceTo,
          status : property.status,
      }));
      setDataSource(Properties);
    };
    Getpendingpropertiesdata();
  }, []);


  const handleOk = async () => {

    const selectedID = selectedRecord.Id;
    await statusPropertychange({
        id : selectedID,
        message : "Approved"
    });
    setModalVisible(false);
  };

  const handleCancel = async () => {
    const selectedID = selectedRecord.Id;
    await statusPropertychange({
        id : selectedID,
        message : "Rejected"
    });
    setModalVisible(false);
  };

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
          <Typography.Title level={4}>Pending Properties</Typography.Title>
          <Table
            style={{ width: 1000 }}
            loading={loading}
            columns={[
              {
                title: "Property Title",
                dataIndex: "name",
              },
              {
                title: "Property Type",
                dataIndex: "companyName",
              },
              {
                title: "Property Price From",
                dataIndex: "email",
              },
              {
                title: "Property Price To",
                dataIndex: "status",
              },
              {
                title: "Property Status",
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
