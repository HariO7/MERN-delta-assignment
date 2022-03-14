import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTeamMembers } from '../../store/Actions/TeamMember';

const StatusSorter = () => {
  const [sortAscend, setSortAscend] = useState(true);
  const teamMembers = useSelector(
    (state) => state.teamMemberReducer.teamMembers,
    (prevValue, newValue) => prevValue.length === newValue.length
  );
  const dispatch = useDispatch();
  useEffect(() => {
    handleSort(sortAscend);
  }, [teamMembers]);

  const handleSort = (_sortAscend) => {
    if (_sortAscend) {
      dispatch(updateTeamMembers(teamMembers.sort((a, b) => a.status.localeCompare(b.status))));
    } else {
      dispatch(updateTeamMembers(teamMembers.sort((a, b) => b.status.localeCompare(a.status))));
    }
    setSortAscend(_sortAscend);
  };

  return (
    <div>
      <button className='sort' onClick={()=> handleSort(!sortAscend)}>Status</button>
    </div>
  );
};

export default StatusSorter;
