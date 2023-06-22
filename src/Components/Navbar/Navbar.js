import "./Navbar.css";
import React,{Component} from 'react';
import {FiBell} from 'react-icons/fi';
import {RxAvatar} from 'react-icons/rx';
import {FiLogOut} from 'react-icons/fi';

export class Navbar extends Component {
    render(){
        return(
            <div className='navbar'>
                <img src="/logoF.png" className="logo" alt="logo" />
                <div  className='rnav'>
                 <FiBell fontSize={'24px'}/>
                 <FiLogOut fontSize={'24px'}/>
                 <RxAvatar fontSize={'45px'} color="#609260"/>
                </div>
 
            </div>
        )
    }
}

