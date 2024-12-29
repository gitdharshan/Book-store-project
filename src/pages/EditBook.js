import React, { useState,useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';
import './CreateBook.css'; // Import the CSS file

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{id} = useParams();
useEffect(() =>{
setLoading(false);
axios.get(`http://localhost:8004/book/${id}`)
.then((response) =>{
  setAuthor(response.data.author);
  setPublishYear(response.data.publishYear);
  setTitle(response.data.title)
  setLoading(false);
}).catch((error) =>{
  setLoading(false);
  alert('An error occured');
  console.log(error);
})
} ,[id])


  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:8004/book/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
        alert('Saved successfully')
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.error(error);
      });
  };

  return (
    <div className="container">
      <BackButton />
      <h1 className="title">Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
       
        <div className="form-group">
          <label>Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
        <button className="save-button" onClick={handleEditBook}>
          EDIT
        </button>
      </div>
    </div>
  );
};

export default EditBook;
