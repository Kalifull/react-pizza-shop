const categories = [
  {
    category: 'Все',
    id: 0,
  },
  {
    category: 'Мясные',
    id: 1,
  },
  {
    category: 'Вегетарианская',
    id: 2,
  },
  {
    category: 'Гриль',
    id: 3,
  },
  {
    category: 'Острые',
    id: 4,
  },
  {
    category: 'Закрытые',
    id: 5,
  },
];

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
