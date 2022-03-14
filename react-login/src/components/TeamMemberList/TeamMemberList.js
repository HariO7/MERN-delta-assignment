import React from "react";
import trash from './trash.png'
import { useSelector, useDispatch } from "react-redux";
// import { deleteTeamMember } from "../store/Actions/TeamMember";
const TeamMemberList = () => {
  const teamMembers = useSelector((state) => state.teamMemberReducer.teamMembers);
  const selectedCompanies = useSelector((state) => state.companyReducer.selectedCompanies);
  // const { confirm } = Modal;
  const dispatch = useDispatch();
  // const deleteTeamMemberConfirm = (teamMember) => {
  //   confirm({
  //     onOk: () => {
  //       dispatch(deleteTeamMember(teamMembers.filter(({ id }) => id !== teamMember.id)));
  //     },
  //     title: 'Are you sure want delete this team member',
  //     okText: 'Yes',
  //     okType: 'danger',
  //     cancelText: 'No',
  //   });
  // };
  return (
    <div>
      {teamMembers.length > 0 && (
        <table >
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Company</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Notes</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((teamMember) => (
              <tr key={teamMember.id}>
                <td>
                  <input type="checkbox" disabled={true} checked={selectedCompanies.includes(teamMember.company)} />
                </td>
                <td>{teamMember.name ?? '-'}</td>
                <td>{teamMember.company ?? '-'}</td>
                <td>{teamMember.status ?? '-'}</td>
                <td>{teamMember.lastUpdated ?? '-'}</td>
                <td>{teamMember.notes ?? '-'}</td>
                <td>
                 <img src={trash} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeamMemberList;
