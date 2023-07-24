import "/home/ted/newapp/src/Components/Navbar/Navbar.css"
import React, { useState } from 'react';
import {FiBell} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';

const Navbar =() => {

    const [open, setOpen] = useState(false);

    const DropD = ['Profile','Logout'];

        return(
            <div className='navbar'>
                <img src="/logoF.png" className="logo" alt="logo" />
                <div  className='rnav'>
                    <FiBell id="bell" fontSize={'24px'}/>
                    <FiLogOut id="logout" fontSize={'24px'}/>
                    <div  onClick={()=>setOpen(!open)} id="avatarbox">
                    <FiUser id="avatar"  fontSize={'34px'} />
                    </div>
                    {
                        open &&

                        <div className="dropd">
                        <div>
                            <h2>ADMIN</h2>
                        </div>
                        <ul className="mList">
                           { DropD.map((menu) => (
                                <li className="menu" key={menu}>{menu}</li>
                           ))}

                        </ul>
                    </div> 

                    }
        
                </div>
 
            </div>
        )
    
}

export default Navbar