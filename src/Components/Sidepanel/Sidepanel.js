import "./Sidepanel.css"
import React,{ Component } from "react";
import {FiInbox} from 'react-icons/fi';
import {RiDraftLine} from 'react-icons/ri';
import {RiMailCheckLine} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {FiHelpCircle} from 'react-icons/fi';
import {RiLinkedinBoxLine} from 'react-icons/ri';
import {FiSettings} from 'react-icons/fi';





export class Sidepanel extends Component{
    render(){
        return(
            <div className="sideB">
                <div className="sidebIn">
                    <ul className="sideListy">
                        <li className="sideListx"><FiEdit fontSize={'24px'}/><h3>New</h3></li>
                        <li className="sideListx"><FiInbox fontSize={'24px'}/><h3>Inbox</h3></li>
                        <li className="sideListx"><RiMailCheckLine fontSize={'24px'}/><h3>Sent</h3></li>
                        <li className="sideListx"><RiDraftLine fontSize={'24px'}/><h3>Draft</h3></li>
                        <li className="sideListx"><FiUsers fontSize={'24px'}/><h3>Contacts</h3></li>
                    </ul>
                    <div className="sideLow">
                    <FiSettings fontSize={'24px'}/>

                    <RiLinkedinBoxLine fontSize={'24px'}/>

                    <FiHelpCircle fontSize={'24px'}/>

                    </div>
                </div>
         
                <div className="line"></div>

             </div>
             

        )
    }
}