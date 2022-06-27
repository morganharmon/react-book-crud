import { useEffect } from 'react';
import { useState } from 'react';
import { getBooks } from './services/fetch-utils';
import RenderItem from './RenderItem';

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetch() {
      const books = await getBooks();
      setItems(books);
    }
    fetch();
  }, []);

  return (
    <div className='items'>
      {
        items.map((item, i) => <RenderItem key={item.title + i} item={item} />)
      }
    </div>
  );
}