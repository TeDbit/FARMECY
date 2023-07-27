import "./Sidepanel.css"
import { NavLink } from "react-router-dom";
import React from "react";
import {FiInbox} from 'react-icons/fi';
import {RiDraftLine} from 'react-icons/ri';
import {RiMailCheckLine} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import { useState } from "react";
import {RiArrowLeftDoubleLine} from 'react-icons/ri';
import {RiArrowRightDoubleLine} from 'react-icons/ri';






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
                            width:isOpen ? "240px" : "64px",
                            paddingRight:isOpen ? "":"16px"

                        }} className="sideB">
                <div className="sidebIn">
                    <div className="sideTop">
                        <RiArrowLeftDoubleLine onClick={toggle} style={{display:isOpen ? "" : "none"}} className="collapse" id="collapse" fontSize={'24px'}/>
                        <RiArrowRightDoubleLine onClick={toggle} style={{display:!isOpen ? "" : "none"}} className="collapse" id="collapse" fontSize={'24px'}/>
                        <div className="sideListy">
                            {
                                navData.map((item,index)=>(
                                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                        
                                        <div className="sideListx">
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
                        height:isOpen ? "":"200px" ,

                        alignSelf:isOpen ? "":"center" ,



                        // background:isOpen? "black":"blue" 
                    }}
                   className="sideLow">
                 

                    <RiLinkedinBoxLine fontSize={'24px'}/>


                    </div>
                </div>
                    <main>{children}</main>
             </div>
             

        )

}

export default Sidepanel;