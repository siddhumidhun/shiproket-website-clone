// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../images/menus/home.svg';
import dashboard from '../images/menus/dashboard.svg';
import orders from '../images/menus/orders.svg';
import returns from '../images/menus/returns.svg';
import deliveryboost from '../images/menus/deliveryboost.svg';
import weightmanagement from '../images/menus/weightmanagement.svg';
import setupmanage from '../images/menus/setupmanage.svg';
import Buyerexperience from '../images/menus/Buyerexperience.svg';
import Billing from '../images/menus/Billing.svg';
import tools from '../images/menus/tools.svg';
import settings from '../images/menus/settings.svg';
import helpandsupport from '../images/menus/helpandsupport.svg';
import logo from '../images/logo.png';

const MenuItem = ({ item, onClick, isOpen }) => {
  const hasSubMenu = item.submenus && item.submenus.length > 0;

  const handleSubMenuClick = (event) => {
    event.stopPropagation(); 
    onClick(item); 
  };
return (
    <li>
      <Link to={item.path || '#'}>
        <span className='nav-icon'>{item.img && <img src={item.img} alt={item.title} className="icon" />}</span>
        <span className='nav-title'>
          {item.title}
          {hasSubMenu && ' ▼'}
        </span>
      </Link>
      {hasSubMenu && isOpen && <SubMenu items={item.submenus} onClick={(event)=>handleSubMenuClick(event)} />}
    </li>
  );
};

const SubMenu = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((subItem, index) => (
        <MenuItem key={index} item={subItem} onClick={onClick} />
      ))}
    </ul>
  );
};

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState([]);
  const menuItems = 
  [
    {
      img:home,
      title: 'Home',
      path: '/home'
    },
    {
      img:dashboard,
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      img:orders,
      title: 'Orders',
      path: '/orders'
    },
    {
      img:returns,
      title: 'Returns',
      path: '/returns'
    },
    {
      img:deliveryboost,
      title: 'Delivery Boost',
      path: '/deliveryboost'
    },
    {
      img:weightmanagement,  
      title: 'Weight Management',
      path: '/weightmanagement',
      submenus: [
        { title: 'Weight Discrepancy', path:'/weightmanagement/weightdiscrepancy' },
        { title: 'Weight Freeze',path: '/weightmanagement/weight-freeze'},
      ],
    },
    {
      img:setupmanage,
      title: 'Setup & Manage',
      path: '/manage',
      submenus: [
          { title: 'Channels',path:'/manage/channels' },
          { title: 'Catalogue',path:'/manage/catalog' },
          { title: 'Couriers',path:'/manage/couriers' },
          { title: 'Packaging' ,path:'/manage/packaging'},
          { title: 'Customers',path:'/manage/customers' },
          ],
        },
    {
      img:Buyerexperience,
      title: 'Buyer Experience',
      path:'/buyer-experience',
      submenus: [
        { title: 'Brand Boost',path:'/buyer-experience/brand-boost' },
        { title: 'Buyer Communication',path:'/buyer-experience/buyer-communication' },
        { title: 'Returns and Refunds',path:'/buyer-experience/returns-and-refund' },
      ],
    },
    {
      img:Billing,
      title: 'Billing',
      path:'/billing'
    },
    {
      img:tools,
      title: 'Tools',
      path:'/tools',
      submenus: [
        { title: 'Rate Calculator',path:'/tools/rate-calculator' },
        { title: 'Rate Card',path:'/tools/rate-card' },
        { title: 'Pincode Zone Mapping',path:'/tools/pincode' },
        { title: 'Bulk Print Actions',path:'/tools/bulk-action' },
        { title: 'Activity Log',path:'/tools/activity-log' },
      ],
    },
    {
      img:settings,
      title: 'Settings',
      path:'/settings'
    },
    {
      img:helpandsupport,
      title: 'Help and Support',
      path:'/help'
    },
  ];
  const handleMenuClick = (item) => {
    const updatedOpenMenus = [...openMenus];
    const index = menuItems.indexOf(item);
    updatedOpenMenus[index] = !updatedOpenMenus[index];
    setOpenMenus(updatedOpenMenus);
  };

  const renderMenuItems = (items) => {
    return (  
      <ul>     
        {items.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            onClick={handleMenuClick}
            isOpen={openMenus[index]}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="sidebar">
      <div className='sidelogo'>
        <img src={logo} alt="logo" width="40px" height="40px" />
        <span className='sidename'>Shiprocket</span>
      </div>
      {renderMenuItems(menuItems)}
    </div>
  );
};

export default Sidebar;