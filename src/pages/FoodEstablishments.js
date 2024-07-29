import React, { useState } from 'react';
import '../css/FoodEstablishments.css';
import Controls from '../layout/Controls';
import Pagination from '../layout/Pagination';

const FoodEstablishments = () => {
  // Sample data - Replace this with your actual data fetching logic
  const data = [
    {
      profile: 'path/to/profile1.png',
      establishmentName: 'Pataganga Pilant Farm',
      ownerName: 'OMGPAHAG MUSA',
      username: 'Mayah007',
      email: 'mayah007@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Maramag, Calamba Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },

    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
     
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
     
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
     
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
     
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
     
    {
      profile: 'path/to/profile2.png',
      establishmentName: 'Chowerras',
      ownerName: 'Alex MULLAM',
      username: 'Choweeras',
      email: 'choweeras@gmail.com',
      password: '********',
      address: '29th-15th, Nasareth, Cagayan de Oro City',
      verification: 'Verified',
    },
 
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on entries per page change
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredData = data.filter(item =>
    item.establishmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.verification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="food-establishments">
      <Controls
        entriesPerPage={entriesPerPage}
        handleChangeEntriesPerPage={handleChangeEntriesPerPage}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>PROFILE</th>
            <th>Establishment's Name</th>
            <th>Owner's Name</th>
            <th>Username</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>Address</th>
            <th>Verification</th>
            <th>TOOLS</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td><img src={item.profile} alt="Profile" className="profile-pic" /></td>
              <td>{item.establishmentName}</td>
              <td>{item.ownerName}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.address}</td>
              <td>{item.verification}</td>
              <td>
                <button className="tool-button edit">Edit</button>
                <button className="tool-button delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        entriesPerPage={entriesPerPage}
        totalEntries={filteredData.length}
      />
    </div>
  );
};

export default FoodEstablishments;
