import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
const BookTable = ({books}) =>{
  return(
    <div className="table-container">
    <table className="books-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th className="hide-on-small">Author</th>
          <th className="hide-on-small">Publish Year</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td className="hide-on-small">{book.author}</td>
            <td className="hide-on-small">{book.publishYear}</td>
            <td>
              <div className="operations-container">
              <Link to={`/book/details/${book._id}`} className="icon info-icon">

                  <BsInfoCircle />
                </Link>
                <Link to={`/book/edit/${book._id}`} className="icon edit-icon">
                  <AiOutlineEdit />
                </Link>
                <Link to={`/book/delete/${book._id}`} className="icon delete-icon">
                  <MdOutlineDelete />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}


export default BookTable;