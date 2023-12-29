import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Returns from './components/Returns';
import Deliveryboost from './components/Deliveryboost';
import Weightmanagement from './components/Weightmanagement';
import WeightDiscrepancy from './components/WeightDiscrepancy';
import WeightFreeze from './components/WeightFreeze';
import SetupManage from './components/SetupManage';
import Channels from './components/Channels';
import Catalogue from './components/Catalogue';
import Couriers from './components/Couriers';
import Packaging from './components/Packaging';
import Customers from './components/Customers';
import BuyerExperience from './components/BuyerExperience';
import BrandBoost from './components/BrandBoost';
import BuyerCommunication from './components/BuyerCommunication';
import ReturnsandRefunds from './components/ReturnsandRefunds';
import Billing from './components/Billing';
import Tools from './components/Tools';
import RateCalculator from './components/RateCalculator';
import RateCard from './components/RateCard';
import PincodeMapping from './components/PincodeMapping';
import BulkPrint from './components/BulkPrint';
import ActivityLog from './components/ActivityLog';
import Settings from './components/Settings';
import HelpandSupport from './components/HelpandSupport';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <div className='content'>
          <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/returns" element={<Returns/>} />
          <Route path="/deliveryboost" element={<Deliveryboost/>} />
          <Route path="/weightmanagement" element={<Weightmanagement/>} />
          <Route path="/weightmanagement/weightdiscrepancy" element={<WeightDiscrepancy/>} />
          <Route path="/weightmanagement/weight-freeze" element={<WeightFreeze/>} />
          <Route path="/manage" element={<SetupManage/>} />
          <Route path="/manage/channels" element={<Channels/>} />
          <Route path="/manage/catalog" element={<Catalogue/>} />
          <Route path="/manage/couriers" element={<Couriers/>} />
          <Route path="/manage/packaging" element={<Packaging/>} />
          <Route path="/manage/customers" element={<Customers/>} />
          <Route path="/buyer-experience" element={<BuyerExperience/>} />
          <Route path="/buyer-experiencebrand-boost" element={<BrandBoost/>} />
          <Route path="/buyer-experience/buyer-communication" element={<BuyerCommunication/>} />
          <Route path="/buyer-experience/returns-and-refund" element={<ReturnsandRefunds/>} />
          <Route path="/billing" element={<Billing/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/tools/rate-calculator" element={<RateCalculator/>} />
          <Route path="/tools/rate-card" element={<RateCard/>} />
          <Route path="/tools/pincode" element={<PincodeMapping/>} />
          <Route path="/tools/bulk-action" element={<BulkPrint/>} />
          <Route path="/tools/activity-log" element={<ActivityLog/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/help" element={<HelpandSupport/>} />
          </Routes>
        </div>
        <Topbar/>
        <Maincontent />
      </header>
    </div>
    </Router>
  );
}

export default App;
