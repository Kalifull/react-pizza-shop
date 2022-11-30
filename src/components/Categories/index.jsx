import { categories } from '../../constants';

const Categories = ({ categoryId, handleChoose }) => (
  <div className="categories">
    <ul>
      {categories.map(({ category, id }) => (
        <li
          key={id}
          className={categoryId === id ? 'active' : ''}
          onClick={handleChoose(id)}
        >
          {category}
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
