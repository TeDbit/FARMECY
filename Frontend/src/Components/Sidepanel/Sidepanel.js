import "./Sidepanel.css"
import React from "react";

import { NavLink } from "react-router-dom";
import {FiInbox} from 'react-icons/fi';
import {RiDraftLine} from 'react-icons/ri';
import {RiMailCheckLine} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {RiArrowLeftDoubleLine} from 'react-icons/ri';
import {RiArrowRightDoubleLine} from 'react-icons/ri';
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
            <div style={{
                            width:isOpen ? "" : "68px",
                            paddingRight:isOpen ? "":"16px"

                        }} id="sideB">
                <div id="sidebIn">
                    <div id="sideTop">
                        <RiArrowLeftDoubleLine onClick={toggle} style={{display:isOpen ? "" : "none"}} id="collapse"  fontSize={'24px'}/>
                        <RiArrowRightDoubleLine onClick={toggle} style={{display:!isOpen ? "" : "none"}} id="collapse"  fontSize={'24px'}/>
                        <div id="sideListy">
                            {
                                navData.map((item,index)=>(
                                    <NavLink to={item.path} key={index} id="link" >
                                        
                                        <div id="sideListx">
                                            <div>{item.icon}</div>
                                            <h3 style={{display:isOpen ? "" : "none"}} >{item.name}</h3>
                                        </div>
                                        
                                                                            
                                        
                                    </NavLink>

                                ))
                                
                            }
                        </div>
                    </div>
                    

                   <div style={{

                        flexDirection :isOpen ? "row" : "column" ,
                        // transform:isOpen ? "":"rotate(-90deg)" ,
                        // minWidth:isOpen ? "":"fit-content" ,
                        width:isOpen ? "":"100px" ,
                        height:isOpen ? "50px":"50px" ,

                        alignSelf:isOpen ? "":"center" ,



                        // background:isOpen? "black":"blue" 
                    }}
                   id="sideLow">
                 

                    <RiLinkedinBoxLine fontSize={'24px'}/>


                    </div>
                </div>
                    <main>{children}</main>
             </div>
             

        )

}

export default Sidepanel;