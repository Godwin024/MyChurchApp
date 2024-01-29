import React from "react"
import "./Managemember.css"
import { FaCaretDown } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



const Managemember = () => {
    return (
        <>
        <div className="body">
            <div className="bodywrapper">
                <div className="managemember">
                    <p>MANAGE USER</p>
                </div>
                <div className="info">
                    <div className="name">
                        <p>NAMES <FaCaretDown /></p>
                        
                    </div>
                    <div className="role">
                        <p>ROLES</p>
                    </div>
                    <div className="action">
                        <p>ACTION</p>
                    </div>
                </div>
                <div className="memberinfo">
                    <div className="membername">
                        <p>EGWUEKWE EKENE</p>

                    </div>
                    <div className="memberrole">
                        <p>(USHER)</p>
                        

                    </div>
                    <div className="memberaction">
                        <div className="edit">
                        <FaEdit />
                        </div>
                        <div className="delete">
                        <MdDeleteForever />

                        </div>

                    </div>

                </div>



            </div>

        </div>

        </>
    )
}

export default Managemember
