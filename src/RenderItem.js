import { Link } from 'react-router-dom';

export default function RenderItem({ item }) {
  return (
    <div>
      <Link to={`/items/${item.id}`}>
        <p>{item.title} by {item.author}</p>
      </Link>
    </div>
  );
}