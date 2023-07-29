import "./Navbar.css"
import  Sidepanel from "../Sidepanel/Sidepanel";

import React, { useRef, useState } from 'react';
import {FiBell} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';
import {FiSettings} from 'react-icons/fi';
import {FiHelpCircle} from 'react-icons/fi';
import {HiBars3} from 'react-icons/hi2';

import { NavLink } from "react-router-dom";
import {FiInbox} from 'react-icons/fi';
import {RiDraftLine} from 'react-icons/ri';
import {RiMailCheckLine} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {RiArrowLeftDoubleLine} from 'react-icons/ri';
import {RiArrowRightDoubleLine} from 'react-icons/ri';



const Navbar =() => {


    const [Popen, setPopen] = useState(false);
    const [Sopen, setSopen] = useState(false);


    const  navData = [
        {
            id:0,
            icon:<FiEdit fontSize={'21px'}/>,
            name:"New",
            path:"/new",
        },
        {
            id:1,
            icon:<FiInbox fontSize={'21px'}/>,
            name:"Inbox",
            path:"/inbox",
        },
        {
            id:2,
            icon:<RiMailCheckLine fontSize={'21px'}/>,
            name:"Sent",
            path:"/sent",
        },
        {
            id:3,
            icon:<RiDraftLine fontSize={'21px'}/>,
            name:"Drafts",
            path:"/drafts",
        },
        {
            id:4,
            icon:<FiUsers fontSize={'21px'}/>,
            name:"Clients",
            path:"/clients",
        }
    ]
    const  DropD = [
        {
            id:0,
            icon: <FiUser  id="user"  fontSize={'21px'} />,
            name:"Profile",
            path:"/profile",
        },
        {
            id:1,
            icon:<FiSettings fontSize={'21px'}/>,
            name:"Settings",
            path:"/settings",
        },
        {
            id:2,
            icon:<FiHelpCircle fontSize={'21px'}/>,
            name:"About",
            path:"/about",
        },
        {
            id:3,
            icon:<FiLogOut fontSize={'21px'}/>,
            name:"Logout",
            path:"/logout",
        },
   
    ]
    const menuRef = useRef();
    const avibRef = useRef();

    // console.log({aviRef});


    // window.addEventListener('click', (e)=>{
    //     if(e.target !== menuRef.parentElement && e.target !== avibRef.current){
            
    //         setOpen(false);

    //     }

   
    
    // });



        return(
            <div className='navbar'>
                <div className="lnav" >
                <div onClick={()=>setSopen(!Sopen)} className="iconCb" >
                <HiBars3 className="bars" fontSize={'21px'}/>
                </div>
                {
                    Sopen &&
                    <div  className="sideP">
                                <div className="sidebIn">
                                    <div className="sideTop">
                                        
                                        <div className="sideListy">
                                            {
                                                navData.map((item,index)=>(
                                                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                                        
                                                        <div onClick={()=>setSopen(false)}  className="sideListx">
                                                            <div>{item.icon}</div>
                                                            <h3  >{item.name}</h3>
                                                        </div>
                                                        
                                                                                            
                                                        
                                                    </NavLink>

                                                ))
                                                
                                            }
                                        </div>
                                    </div>
                                

                                <div 
                            className="sideLow">
                            

                                <RiLinkedinBoxLine fontSize={'24px'}/>


                                </div>
                            </div>
             
                    </div>
                   
                }
             

                <img src="/logoF.png" className="logo" alt="logo" />
                </div>
        
                <div   className='rnav'>
                    <div className="iconC" > <FiBell id="bell" fontSize={'21px'}/> </div>
                   
                    <button  ref={avibRef}  onClick={()=>setPopen(!Popen)} id="avatarbox">
                    <FiUser  id="avatar"  fontSize={'30px'} />
                    </button>
                    {
                        Popen &&

                        <div ref={menuRef} className="dropd">
                        <div>
                            <h2>ADMIN</h2>
                        </div>
                        <ul className="mList">
                           { DropD.map((menu) => (
                                <li onClick={()=>setPopen(false)} className="menu" key={menu}>{menu.icon}{menu.name}</li>
                           ))}

                        </ul>
                    </div> 

                    }
        
                </div>
 
            </div>
        )
    
}

export default Navbar