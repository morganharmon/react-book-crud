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
    <div>
      {
        items.map((item, i) => <RenderItem key={item.title + i} item={item} />)
      }
    </div>
  );
}