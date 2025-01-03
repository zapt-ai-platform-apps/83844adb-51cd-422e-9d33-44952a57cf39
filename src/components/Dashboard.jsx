import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ServiceRequestForm from './ServiceRequestForm';
import ServiceRequestsList from './ServiceRequestsList';
import Logout from './Logout';

const Dashboard = () => {
  return (
    <div className="h-full">
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="flex items-center">
          <NavLink
            to="/requests"
            className="mr-4"
            activeClassName="underline"
          >
            Service Requests
          </NavLink>
          <NavLink
            to="/new-request"
            className="mr-4"
            activeClassName="underline"
          >
            New Request
          </NavLink>
        </div>
        <div>
          <Logout />
        </div>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/new-request" element={<ServiceRequestForm />} />
          <Route path="/requests" element={<ServiceRequestsList />} />
          <Route path="/" element={<ServiceRequestsList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;