import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  const info = book.volumeInfo;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{info.title}</h2>
      <img
        src={info.imageLinks?.thumbnail}
        alt={info.title}
        style={{ maxWidth: '200px' }}
      />
      <p><strong>Author:</strong> {info.authors?.join(', ')}</p>
      <p><strong>Published:</strong> {info.publishedDate}</p>
      <p><strong>Categories:</strong> {info.categories?.join(', ')}</p>
      <p><strong>Description:</strong></p>
      <p>{info.description || 'No description available.'}</p>
    </div>
  );
};

export default BookDetails;
