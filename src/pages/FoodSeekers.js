import React, { useState } from 'react';
import '../css/FoodSeekers.css';
import Controls from '../layout/Controls';
import Pagination from '../layout/Pagination';

const FoodSeekers = () => {
  const seekers = [
    { profile: '👤', name: 'Jonathan Ali', username: 'JonAli', email: 'jonali@gmail.com', password: '******', address: 'Zone 1, Mantibugao, Manolo Fortich, Bukidnon' },
    { profile: '👤', name: 'Unity Juarez', username: 'UnityJ14', email: 'unityj@gmail.com', password: '******', address: 'Zone 2, Cayanga, Cagayan de Oro City' },
    { profile: '👤', name: 'Mayen Mulla', username: 'Mayen07', email: 'mayen@gmail.com', password: '******', address: 'Malrosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
    { profile: '👤', name: 'Marvin Ali', username: 'Marvin10', email: 'marvin@gmail.com', password: '******', address: 'Sinprosa, Bukidnon, Cagayan de Oro City' },
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredSeekers = seekers.filter(seeker =>
    seeker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seeker.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seeker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seeker.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSeekers.length / entriesPerPage);

  const paginatedSeekers = filteredSeekers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="food-seekers">
      <Controls
        entriesPerPage={entriesPerPage}
        handleChangeEntriesPerPage={handleChangeEntriesPerPage}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {paginatedSeekers.map((seeker, index) => (
            <tr key={index} className="seeker-row">
              <td className="seeker-profile">{seeker.profile}</td>
              <td className="seeker-name">{seeker.name}</td>
              <td className="seeker-username">{seeker.username}</td>
              <td className="seeker-email">{seeker.email}</td>
              <td className="seeker-password">{seeker.password}</td>
              <td className="seeker-address">{seeker.address}</td>
              <td className="seeker-tools">
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
        totalEntries={filteredSeekers.length}
      />
    </div>
  );
};

export default FoodSeekers;
