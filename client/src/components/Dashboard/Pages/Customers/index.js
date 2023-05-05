import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../../API";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (

    <>

    <AppHeader />
    <div className="SideMenuAndPageContent" style={{background: "#F2F2F2"}}>
    <SideMenu></SideMenu> 

    <Space size={20} direction="vertical" style={{background: "#F2F2F2"}}>
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table style={{ width: 1000 }}
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>

    </div>
    </>
  );
}
export default Customers;
