import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { GetCustomers } from "../../../../services/api";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const getCustomerData = async()=>{
      
      const result = await GetCustomers();
      const results = result.allUsers;
      const customers = results.map((customer)=>({
        name : customer.Name,
        companyName : customer.CompanyName,
        email : customer.email,
        status : customer.status
      }));
      setDataSource(customers);
      // console.log(result); 
    }
    getCustomerData();
 
  }, []);

  return (

    <>

    <AppHeader />
    <div className="SideMenuAndPageContent" style={{
      background: "#F2F2F2",
      height : "91vh"
      }}>
    <SideMenu></SideMenu> 

    <Space size={20} direction="vertical" style={{background: "#F2F2F2"}}>
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table style={{ width: 1000 }}
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
