import "./Sidepanel.css"
import { NavLink } from "react-router-dom";
import React from "react";
import {FiInbox} from 'react-icons/fi';
import {RiDraftLine} from 'react-icons/ri';
import {RiMailCheckLine} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {FiHelpCircle} from 'react-icons/fi';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {FiSettings} from 'react-icons/fi';
import { useState } from "react";





const Sidepanel=({children})=>{

        const[isOpen ,setIsOpen]= useState(false);
        const toggle = () => setIsOpen (!isOpen);
        const  navData = [
            {
                id:0,
                icon:<FiEdit fontSize={'24px'}/>,
                name:"New",
                path:"/new",
            },
            {
                id:1,
                icon:<FiInbox fontSize={'24px'}/>,
                name:"Inbox",
                path:"/inbox",
            },
            {
                id:2,
                icon:<RiMailCheckLine fontSize={'24px'}/>,
                name:"Sent",
                path:"/sent",
            },
            {
                id:3,
                icon:<RiDraftLine fontSize={'24px'}/>,
                name:"Drafts",
                path:"/drafts",
            },
            {
                id:4,
                icon:<FiUsers fontSize={'24px'}/>,
                name:"Clients",
                path:"/clients",
            }
        ]
        return(
            <div className="sideB">
                <div className="sidebIn">
                   
                    <div className="sideListy">
                        {
                            navData.map((item,index)=>(
                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                       
                                            <div className="sideListx"><div>{item.icon}</div><h3>{item.name}</h3></div>
                                    
                                                                        
                                    
                                </NavLink>

                            ))
                            
                        }
                    </div>
                    

                   <div className="sideLow">
                    <FiSettings fontSize={'24px'}/>

                    <RiLinkedinBoxLine fontSize={'24px'}/>

                    <FiHelpCircle fontSize={'24px'}/>

                    </div>
                </div>
         
                <div className="line"></div>
                    <main>{children}</main>
             </div>
             

        )

}

export default Sidepanel;