import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import './ShowBook.css'; // Import the CSS file

const ShowBook = () =>{
  const[book,setBook] = useState({});
  const[loading,setLoading]=  useState(true);
  const{id} =useParams();

   useEffect(() =>{
    setLoading(true);
    axios.get(`http://localhost:8004/book/${id}`)
    .then((response) =>{
      setBook(response.data);
     setLoading(false);
    })
    .catch((error) =>{
      console.error(error);
      setLoading(false);
    })
   } ,[id])
  return(
    <div className='container'>
     <BackButton destination='/'/>
     <h1 className='title'>Show Book</h1>
     {loading ? (
      <Spinner />
     ) : (
      <div className='book-details'>
      <div className='detail'>
      <span className='label'>ID:</span>
      <span className='value'> {book.id}</span>
      </div>
      <div className='detail'>
        <span className='label'>Author:</span>
       <span className='value'>{book.author}</span>
         </div>
         <div className='detail'>
         <span className='label'>publish Year</span>
           <span className='value'>{book.publishYear}</span>
         </div>
         <div className="detail">
         <span className="label">Create Time: </span>
         <span className="value">{new Date(book.createdAt).toString()}</span>
       </div>
       <div className="detail">
         <span className="label">Last Update Time: </span>
         <span className="value">{new Date(book.updatedAt).toString()}</span>
       </div>
      </div>
     )}
    </div>
  )
}

export default ShowBook;