import React from 'react';
import "./Dashboard.css";
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa6';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';
import * as LuIcons from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Dashboard() {

    



  return (
    <>
    <Navbar/>
    <div className='container'>
        
        <h1>DashBoard</h1>
        <div className='flex-container'>
        <Link to='/'> 
        <div className='div-inner-container'>
            <div className='text-container'>
                <h2 id='purple'>3</h2>
                <h2 id='purple'>Patients</h2>
            </div>
    
            <MdIcons.MdSpatialAudioOff className='icons-container'/>
        </div>
        </Link>
        <Link to='/'> 
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='orange'>2</h2>
                <h2 id='orange'>Doctors</h2>
            </div>
            <FaIcons.FaUserDoctor className='icons-container'/>
        </div>
        </Link>
        <Link to='/'> 
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='green'>1</h2>
                <h2 id='green'>Nurse</h2>
            </div>
            <FaIcons.FaUserNurse className='icons-container'/>
        </div>
        </Link>
        <Link to='/'> 
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='red'>2</h2>
                <h2 id='red'>Phamacy</h2>
            </div>
            <MdIcons.MdOutlineLocalPharmacy className='icons-container'/>
        </div>
        </Link>
        </div>

        <div className='flex-container'>
            <Link to='/'>
        <div className='div-inner-container'>
            <div className='text-container'>
                <h2 id='pink'>1</h2>
                <h2 id='pink'>Labouratory</h2>
            </div>
            <ImIcons.ImLab className='icons-container'/>
        </div>
        </Link>
        <Link to='/'>
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='lemon'>1</h2>
                <h2 id='lemon'>Precedures</h2>
            </div>
            <MdIcons.MdOutlineAssuredWorkload className='icons-container'/>
        </div>
        </Link>
        <Link to='/'>
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='cyan'>500$</h2>
                <h2 id='cyan'>Finance</h2>
            </div>
            <LuIcons.LuReceipt className='icons-container'/>
        </div>
        </Link>
        <Link to='/'>
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='gold'>2</h2>
                <h2 id='gold'>Receptionist</h2>
            </div>
            <FaIcons.FaUsersRectangle className='icons-container'/>
        </div>
        </Link>
        </div>

        <div className='flex-container'>
        <Link to='/'>
        <div className='div-inner-container'>
            <div className='text-container'>
                <h2 id='grey'>8</h2>
                <h2 id='grey'>Physiotherapy</h2>
            </div>
            <MdIcons.MdSelfImprovement className='icons-container'/>
        </div>
        </Link>
        <Link to='/'>
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='green'>2</h2>
                <h2 id='green'>Staffs</h2>
            </div>
            <MdIcons.MdOutlineManageAccounts className='icons-container'/>
        </div>
        </Link>
        <Link to='/'>
        <div className='div-inner-container'>
        <div className='text-container'>
                <h2 id='blue'>99</h2>
                <h2 id='blue'>Wards & Beds</h2>
            </div>
            <FaIcons.FaBed className='icons-container'/>
        </div>
     </Link>
        </div>
        </div>

    </>
  )
}

export default Dashboard