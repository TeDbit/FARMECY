
import {FiInbox} from 'react-icons/fi';
import {RiDraftLine} from 'react-icons/ri';
import {RiMailCheckLine} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';


export const navData = [
    {
        id:0,
        icon:<FiEdit fontSize={'24px'}/>,
        text:"New",
        path:"new",
    },
    {
        id:1,
        icon:<FiInbox fontSize={'24px'}/>,
        name:"Inbox",
        path:"inbox",
    },
    {
        id:2,
        icon:<RiMailCheckLine fontSize={'24px'}/>,
        name:"Sent",
        path:"sent",
    },
    {
        id:3,
        icon:<RiDraftLine fontSize={'24px'}/>,
        name:"Drafts",
        path:"drafts",
    },
    {
        id:4,
        icon:<FiUsers fontSize={'24px'}/>,
        name:"Clients",
        path:"clients",
    }
]

