import React,{useState} from 'react'
import "./header.css"

import Sidebar from '../pages/Sidebar/Sidebar'
import App2 from '../App/App2'
import{MonitorOutlined,BellOutlined,UserOutlined, UnorderedListOutlined, ArrowLeftOutlined} from '@ant-design/icons/lib/icons'


const Header = () => {
    const [isOpen,setOpen]=useState(false)
    const changeSidebar=()=>{
        setOpen(!isOpen)
    }
    
    return (
        <div className='WrappDiv'>
            <div className='blockMain'>
                 
                {isOpen &&(
                <div className='Sidebare'>
                    <Sidebar />
                </div>
                )}
                <div className='block22'>
                    <div className='conteinerText'>
                        <div style={{display:"flex",flexDirection:"column"}}>

                        <UnorderedListOutlined onClick={changeSidebar} style={{color:"black",fontSize:"20px"}} /> 
                        {/* <ArrowLeftOutlined onClick={closeSidbare} /> */}
                        </div>
                        <div className='miniBlock'>

                            <h3>Lorem ipsum</h3>

                            <h3>Amet item</h3>
                            <h3>Item ipsum</h3>

                        </div>
                        <div className='miniBlock2'>
                        <MonitorOutlined style={{color:"#808dc8", fontSize:"22px"}}/>
                        <BellOutlined style={{color:"#808dc8", fontSize:"22px"}}/>
                        <UserOutlined style={{color:"#808dc8", fontSize:"22px"}}/>
                        </div>

                    </div>
                    <div className='blockAboutContent'>
                        <App2 />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Header
