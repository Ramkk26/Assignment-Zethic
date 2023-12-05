import React, { useState } from 'react';
import { List } from 'react-virtualized';
import Data from "./UserData";
const sortedList = Data.sort((val1, val2) => val1.username.localeCompare(val2.username));
const users = sortedList.map(value => ({
  id: value.userId,
  username: value.username,
  age: value.age,
Address : `${value.address}` ,
   Phone: `${value.phoneNumber}` ,
    Occupation: `${value.occupation}`,
     VehicleMake:` ${value.vMake}`,
      VehicleModel: `${value.vModel}`,
       VehicleColor:`${value.vColor}`,
        VehicleYear:`${value.vYear}`,
}));

const VirtualizedUserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = ({ index }) => {
    setSelectedUser(users[index]);
  };

  const renderRow = ({ index, key, style }) => (
    <div key={key} style={style} onClick={() => handleRowClick({ index })}>
      {users[index].username} - Age: {users[index].age}
    </div>
  );

  return (
    <div style={{ display:'flex' }}>

      <List
        width={300}
        height={500}
        rowCount={users.length}
        rowHeight={50}
        rowRenderer={renderRow}
      />

     
      {selectedUser && (
        <div  className= "virtual-list">
          <h2>{selectedUser.username}</h2>
          <p>Age: {selectedUser.age}</p>
          <p>Address:{selectedUser.Address }</p>
          <p> Phone:{selectedUser. Phone}</p>
          <p>Occupation:{selectedUser.Occupation}</p>
          <p>Vehicle Make: {selectedUser.VehicleMake}</p>
          <p>Vehicle Model: {selectedUser.VehicleModel}</p>
          <p>Vehicle color: {selectedUser.VehicleColor}</p>
          <p>Vehicle Year : {selectedUser.VehicleYear}</p>
    
        </div>
      )}
    </div>
  );
};

export default VirtualizedUserList;
