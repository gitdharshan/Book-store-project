import React from 'react';
import './BooksCard.css'; // Import CSS file

import BooksSingleCard from './BooksSingleCard';
const BooksCard = ({ books }) => {
  return (
    <div className="books-container">
      {books.map((item) => (
       <BooksSingleCard key={item._id} book={item}/>
      ))}
    </div>
  );
};

export default BooksCard;
