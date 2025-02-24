import React from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import {useState} from 'react';
import BookModal from './BookModal';
import { BiShow } from 'react-icons/bi';
const BooksSingleCard = ({ book }) => {
  const[showModal,setShowModal] = useState(false);
  return (
    <div className="book-card">
      <h2>{book.publishYear}</h2>
      <h4>{book._id}</h4>
      <div>
        <PiBookOpenTextLight />
        <h2 className="icon-title">{book.title}</h2>
      </div>
      <div>
        <BiUserCircle />
        <h2 className="icon-subtitle">{book.author}</h2>
      </div>
      <div>
      <BiShow 
      onClick={() =>
        setShowModal(true)
      }
      />
      </div>
      <div className="icon-container">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete />
        </Link>

      </div>
      {showModal && (
        <BookModal
        book ={book} onClose={(() => setShowModal(false))}
        />
      )}
    </div>
  );
};

export default BooksSingleCard;
