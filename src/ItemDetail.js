import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deleteBook, getBookById, updateBook } from './services/fetch-utils';

export default function ItemDetail() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { push } = useHistory();

  useEffect(() => {
    async function load(id) {
      const data = await getBookById(id);
      setTitle(data.title);
      setAuthor(data.author);
    }
    load(id);
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await updateBook({ title: title, author: author }, id);
    setTitle('');
    setAuthor('');
    push('/items');
  }

  async function handleDelete(e) {
    e.preventDefault();
    await deleteBook(id);
    push('/items');
  }

  return (
    <div className='update-div'>
      <h3>Update this book</h3>
      <form className='update-form' onSubmit={handleUpdate}>
        <label>Book title: 
          <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>Book author: 
          <input value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        </label>
        <button>Update book</button>
      </form>
      <button onClick={handleDelete}>Delete book</button>
    </div>
  );
}