import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from './services/fetch-utils';

export default function ItemDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    async function load(id) {
      const data = await getBookById(id);
      setBook(data);
    }
    load(id);
  }, [id]);

  return (
    <div>
      Book #{ id }
      <p>{book.title} by {book.author}</p>
    </div>
  );
}