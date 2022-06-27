import { useState } from 'react';
import { createBook } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const { push } = useHistory();

  async function submitBook(e) {
    e.preventDefault();
    const book = await createBook({ title: titleInput, author: authorInput });
    setTitleInput('');
    setAuthorInput('');
    push('/items');
  }

  return (
    <div>
      <form onSubmit={submitBook}>
        <label>Book title: 
          <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)}></input>
        </label>
        <label>Book author: 
          <input value={authorInput} onChange={(e) => setAuthorInput(e.target.value)}></input>
        </label>
        <button>Submit</button>
      </form>

    </div>
  ); 
}