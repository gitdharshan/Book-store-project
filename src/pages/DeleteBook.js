import React ,{useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const DeleteBook = () => {
  const[loading,setLoading] = useState(false);
  const navigate=  useNavigate();
  const{id} = useParams();
  const handleDeleteBook = () =>{
    setLoading(false);
    axios.delete(`http://localhost:8004/book/${id}`)
    .then(() =>{
      setLoading(false);
      navigate('/');
    }).catch((error ) =>{
      setLoading(false);
      alert('An error happened please check console');
      console.error(error);
    })
  }

   return (
    <div>
      <BackButton />
      <h1>DeleteBook</h1>
      {loading ? <Spinner /> : ''}
      <div>
         <h3>Are you sure delete the book</h3>
         <button onClick={handleDeleteBook}>Delete</button>
      </div>      
    </div>
  )
}

export default DeleteBook
