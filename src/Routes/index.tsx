import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerList from "../pages/Lender/CustomerList";
import LayoutDashboard from "../layouts/LayoutDashboard";
import AdminLender from "../pages/AdminLender";
import Dashboard from "../pages/Lender/Dashboard";
import SiginPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import CustomerCheck from "../pages/Lender/CustomerCheck";
import Expense from "../pages/Lender/Expense";
import Income from "../pages/Lender/Income";
import Service from "../pages/Lender/Service";
// import DebitCustomers from '../pages/Lender/DebitCustomers'
const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/lender/customer/list" element={<CustomerList />} />
        <Route
          path="/lender/customer/checkCustomer"
          element={<CustomerCheck />}
        />
        <Route path="/lender/customer/expense" element={<Expense />} />
        <Route path="/lender/customer/income" element={<Income />} />
        <Route path="/lender/customer/service" element={<Service />} />

        {/* <Route path="/lender/customer/debitCustomer" element={<DebitCustomers />} /> */}
        <Route path="/signin" element={<SiginPage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="admin/customer" element={<AdminLender />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutePage;
