import React, { useState } from 'react';
import electricity from '../images/navimages/electricity.svg';
import wallet from '../images/navimages/wallet.svg';
import refresh from '../images/navimages/refresh-icon.svg';
import notification from '../images/navimages/notification.svg';
import remainder from '../images/navimages/remainder.svg';
import profile from '../images/navimages/profile.svg';
import dropdown from '../images/navimages/dropdown.svg';
import add_order from '../images/navimages/add_order.svg';
import truck from '../images/navimages/truck.svg';
import rate_calulator from '../images/navimages/rate_calulator.svg';
import create_ticket from '../images/navimages/create_ticket.svg';
import track_shipment from '../images/navimages/track_shipment.svg';

const Navbar = () => {
  const [showQuickActions,setShowQuickActions] = useState(false);
  const [showQuickActionItemDesc, setShowQuickActionItemDesc] = useState(false);
    return (
    <div className="topbar">
      <div onMouseOver={() => setShowQuickActions(true)} onMouseOut={() => setShowQuickActions(false)}>
          <button className='nav-button'>
              <img src={electricity} alt='quick-actions'/>
              <p>Quick Actions</p>
          </button>
      </div>
      <div className="vl"/>
        <div className='wallet-section'> 
          <div className='wallet-content'>
              <img className='wallet-icon-alignment' src={wallet} alt='wallet'/>
              <span className='wallet-icon-alignment'>₹0</span>
              <img className='refresh-size wallet-icon-alignment' src={refresh} alt='refresh'/>
          </div>
          <button className='recharge-button'>Recharge Wallet</button>
        </div>
        <div className="vl"/>
        <div className='wallet-content'>
            <img src={notification} alt='notification'/>
            <button className='nav-button'>
                <img src={remainder} alt='menu'/>
            </button>
            <button className='nav-button'>
                <img src={profile} alt='profile'/>
                <img src={dropdown} alt='dropdown'/>
            </button>
        </div>
        {showQuickActions && (
        <div className='quick-action-card' onMouseOver={() => setShowQuickActions(true)} onMouseOut={() => setShowQuickActions(false)}>
            <div className='quick-action-contents' onMouseOver={() => setShowQuickActionItemDesc(true)} onMouseOut={() => setShowQuickActionItemDesc(false)}>
              <img src={add_order} alt=''/>
              <p>Add an order</p>
            </div>
            <div className='quick-action-contents' onMouseOver={() => setShowQuickActionItemDesc(true)} onMouseOut={() => setShowQuickActionItemDesc(false)}>
              <img src={truck} alt=''/>
              <p>Create a quick shipment</p>
            </div>
            <div className='quick-action-contents' onMouseOver={() => setShowQuickActionItemDesc(true)} onMouseOut={() => setShowQuickActionItemDesc(false)}>
              <img src={rate_calulator} alt=''/>
              <p>Rate calculator</p>
            </div>
            <div className='quick-action-contents' onMouseOver={() => setShowQuickActionItemDesc(true)} onMouseOut={() => setShowQuickActionItemDesc(false)}>
              <img src={create_ticket} alt=''/>
              <p>Create a Ticket</p>
            </div>
            <div className='quick-action-contents' onMouseOver={() => setShowQuickActionItemDesc(true)} onMouseOut={() => setShowQuickActionItemDesc(false)}>
              <img src={track_shipment} alt=''/>
              <p>Track shipments</p>
            </div>
        </div>
      )}
        { showQuickActionItemDesc && (
          <div className='quick-action-content-desc'>
              <p></p>
          </div>
      )}
    </div>
)
}
export default Navbar
