import "./Navbar.css"
import React, { useRef, useState } from 'react';
import {FiBell} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';
import {FiSettings} from 'react-icons/fi';
import {FiHelpCircle} from 'react-icons/fi';


const Navbar =() => {


    const [open, setOpen] = useState(false);
    const  DropD = [
        {
            id:0,
            icon: <FiUser  id="user"  fontSize={'24px'} />,
            name:"Profile",
            path:"/profile",
        },
        {
            id:1,
            icon:<FiSettings fontSize={'24px'}/>,
            name:"Settings",
            path:"/settings",
        },
        {
            id:2,
            icon:<FiHelpCircle fontSize={'24px'}/>,
            name:"About",
            path:"/about",
        },
        {
            id:3,
            icon:<FiLogOut fontSize={'24px'}/>,
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
                <img src="/logoF.png" className="logo" alt="logo" />
                </div>
        
                <div   className='rnav'>
                    <FiBell id="bell" fontSize={'24px'}/>
                   
                    <button  ref={avibRef}  onClick={()=>setOpen(!open)} id="avatarbox">
                    <FiUser  id="avatar"  fontSize={'34px'} />
                    </button>
                    {
                        open &&

                        <div ref={menuRef} className="dropd">
                        <div>
                            <h2>ADMIN</h2>
                        </div>
                        <ul className="mList">
                           { DropD.map((menu) => (
                                <li onClick={()=>setOpen(false)} className="menu" key={menu}>{menu.icon}{menu.name}</li>
                           ))}

                        </ul>
                    </div> 

                    }
        
                </div>
 
            </div>
        )
    
}

export default Navbar