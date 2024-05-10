import React from 'react';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h2 className="mt-4">Dashboard</h2>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">Total Products</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="/admin/products">View details</a>
              <div className="small">123</div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">Total Orders</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="/admin/orders">View details</a>
              <div className="small">456</div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">Total Users</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="/admin/users">View details</a>
              <div className="small">789</div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body">Total Revenue</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <a className="small text-white stretched-link" href="/admin/revenue">View details</a>
              <div className="small">$10,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
