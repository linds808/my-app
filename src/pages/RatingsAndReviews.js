import React, { useState } from 'react';
import '../css/RatingsAndReviews.css';
import Controls from '../layout/Controls';
import Pagination from '../layout/Pagination';

const RatingsAndReviews = () => {
  const [reviews] = useState([
    { name: 'James Ali', establishment: 'Pakrangi Pater & More', review: 'Lamb and super affordable puff', rating: 5 },
    { name: 'Unity Mae', establishment: 'Pakrangi Pater & More', review: 'Authentic! Very delicious', rating: 4 },
    { name: 'Mayen Mulla', establishment: 'Pakrangi Pater & More', review: 'Now favorite place in town!', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    { name: 'Amirah Angel', establishment: 'Pakrangi Pater & More', review: 'You’ll taste little heaven', rating: 5 },
    // Add more sample data as needed
  ]);

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredReviews = reviews.filter(review =>
    review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.establishment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.review.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReviews.length / entriesPerPage);

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="Actual-ratings-reviews">
      <Controls
        entriesPerPage={entriesPerPage}
        handleChangeEntriesPerPage={handleChangeEntriesPerPage}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Food Establishment</th>
            <th>Review</th>
            <th>Ratings</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {paginatedReviews.map((review, index) => (
            <tr key={index}>
              <td>{review.name}</td>
              <td>{review.establishment}</td>
              <td>{review.review}</td>
              <td>{'⭐'.repeat(review.rating)}</td>
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
        totalEntries={filteredReviews.length}
      />
    </div>
  );
};

export default RatingsAndReviews;
