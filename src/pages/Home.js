import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md'; // Removed unused icons
import './home.css'; // Import the CSS file
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    axios
      .get('http://localhost:8004/book')
      .then((response) => {
        setBooks(response.data.data || []); // Safeguard in case `data` is undefined
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      {/* Toggle Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px', // Adjusted spacing
          marginBottom: '20px', // Added spacing below buttons
        }}
      >
        <button
          onClick={() => setShowType('table')}
          style={{
            background: showType === 'table' ? 'pink' : 'lightgray', // Highlight active button
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Table
        </button>
        <button
          onClick={() => setShowType('card')}
          style={{
            background: showType === 'card' ? 'pink' : 'lightgray', // Highlight active button
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Card
        </button>
      </div>

      {/* Header Section */}
      <div className="home-header">
        <h1 className="home-title">Books List</h1>
        <Link to="/book/create" className="add-icon">
          <MdOutlineAddBox size={24} />
        </Link>
      </div>

      {/* Conditional Rendering */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
