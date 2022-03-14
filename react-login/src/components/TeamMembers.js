import React,{useState} from "react";
import { useDispatch } from "react-redux";
import TeamMemberList from "./TeamMemberList/TeamMemberList";
import StatusSorter from "./StatusSorter/StatusSorter";
import CompanyDropDown from "./CompanyDropdown/CompanyDropdown";


const TeamMember = () =>{
    const [showAddmembers,setShowAddMembers] = useState(false)
    const dispatch = useDispatch();
    return (
        <>
        <h1 style={{display:'inline-block'}}>TeamMember</h1><button className="addButton">Add Member +</button>
        <CompanyDropDown />
        <StatusSorter />
        <TeamMemberList />
        </>
    )
}   
export default TeamMember