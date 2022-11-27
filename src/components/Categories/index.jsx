import { useState } from 'react';

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

const Categories = () => {
  const [active, setActive] = useState(0);

  const handleSwitchCategory = (index) => () => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(({ category, id }, index) => (
          <li key={id} className={active === index ? 'active' : ''} onClick={handleSwitchCategory(index)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
