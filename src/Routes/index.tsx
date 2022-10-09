import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerList from '../pages/Lender/CustomerList'
import LayoutDashboard from '../layouts/LayoutDashboard'
import AdminLender from '../pages/AdminLender'
import Dashboard from '../pages/Lender/Dashboard'
import SiginPage from '../pages/Signin'
import SignupPage from '../pages/Signup'
import AdminContractPage from '../pages/AdminContract'
import Website_Layout from '../pages/Layout/Website_Layout'
import HomePage from '../pages/HomePage'
import DebitCustomers from '../pages/Lender/DebitCustomers'
const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path='/client' element={<Website_Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/lender/customer/list" element={<CustomerList />} />
                <Route path="/lender/customer/debitCustomer" element={<DebitCustomers />} />
                <Route path='/signin' element={<SiginPage />}></Route>
                <Route path='/register' element={<SignupPage />}></Route>
                <Route path="/" element={<LayoutDashboard />} >
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/admin" element={<LayoutDashboard />} >
                    <Route index element={<Dashboard />} />
                    <Route path='customer' element={<AdminLender />} />
                    <Route path='contract' element={<AdminContractPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RoutePage