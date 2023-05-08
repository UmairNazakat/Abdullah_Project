import React from "react";
import NavBar from "./NavBar.js";
import Form from "./Form.js"
import Signup from "./signupPopup.js"
import Login from "./LoginPopup.js"
import Form2 from "./form2.js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import "../css/style.css";
import Dashboard from "./Dashboard/Dashboard.js";
import Inventory from "./Dashboard/Pages/Inventory/index.js";
import Orders from "./Dashboard/Pages/Orders/index.js";
import Customers from "./Dashboard/Pages/Customers/index.js";
// import pendingCustomers from "./Dashboard/Pages/pendingCustomers/index.js";
import PendingCustomers from "./Dashboard/Pages/pendingCustomers/index.js"
import PendingProperties from "./Dashboard/Pages/PendingProperties/index.js"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<NavBar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/pendingCustomers" element={<PendingCustomers />} />
        <Route path="/PendingProperties" element={<PendingProperties />} />

      </Routes>
    </Router>
  );
}

export default App;
