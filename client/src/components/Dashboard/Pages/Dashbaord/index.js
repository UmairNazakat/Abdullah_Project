import {dashboarddata } from "../../../../services/api";
import {
  DollarCircleOutlined,
  UsergroupAddOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders, getRevenue } from "../../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [users, setUsers] = useState(0);
  const [properties, setProperties] = useState(0);
  const [Pendingusers, setPendingUsers] = useState(0);
  const [Pendingproperties, setPendingProperties] = useState(0);

  useEffect(() => {

    const getData = async () => {
      const result = await dashboarddata();
      // setData(result);
      console.log(result);
      setUsers(result.users);
      setProperties(result.property);
      setPendingUsers(result.pendingUser);
      setPendingProperties(result.pendingproperty);
    };
    getData();
 
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard 
          icon={
            <UsergroupAddOutlined
              style={{
                color: "green",
                // backgroundColor: "rgba(0,255,0,0.25)",
                backgroundColor: "#FEF8DD",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total Users"}
          value={users}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total Properties"}
          value={properties}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Pending Users"}
          value={Pendingusers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Pending Properties"}
          value={Pendingproperties}
        />
      </Space>
      <Space>
        <RecentOrders />
        {/* <DashboardChart /> */}
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ width: 200, height: 150,margin: '20px' }}>
      <Space direction="horizontal" >
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const getpropertyData = async()=>{
      const getPropertyDataResult = await dashboarddata();
     const propertyDetails = getPropertyDataResult.propertyDetails;
     const newDataSource = propertyDetails.map((property)=>({
      key : property._id,
      title : property.title,
          type : property.property_type,
          price : property.price,
          status : property.status,
          priceFrom : property.priceFrom,
          priceTo : property.priceTo
     }));
     setDataSource(newDataSource);
    }
getpropertyData();
  }, []);

  return (
    <> 
      <Typography.Text>Recent Orders</Typography.Text>
      <Table style={{ width: 1000, height: "100%", marginBottom: "20px" }}
        columns={[
          {
            title: "Property Title",
            dataIndex: "title",
          },
          {
            title: "Property Type",
            dataIndex: "type",
          },
          {
            title: "Property Price From",
            dataIndex: "priceFrom",
          },
          {
            title: "Property Price To",
            dataIndex: "priceTo",
          },
          {
            title: "Property Status",
            dataIndex: "status",
          }, 
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={true}
      ></Table>
    </>
  );
}

// function DashboardChart() {
//   const [reveneuData, setReveneuData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     getRevenue().then((res) => {
//       const labels = res.carts.map((cart) => {
//         return `User-${cart.userId}`;
//       });
//       const data = res.carts.map((cart) => {
//         return cart.discountedTotal;
//       });

//       const dataSource = {
//         labels,
//         datasets: [
//           {
//             label: "Revenue",
//             data: data,
//             backgroundColor: "rgba(255, 0, 0, 1)",
//           },
//         ],
//       };

//       setReveneuData(dataSource);
//     });
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       title: {
//         display: true,
//         text: "Order Revenue",
//       },
//     },
//   };

//   return (
//     <Card style={{ width: 550, height: 300 }}>
//       <Bar options={options} data={reveneuData} />
//     </Card>
//   );
// }
export default Dashboard;
