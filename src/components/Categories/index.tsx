import cn from 'classnames';
import { memo } from 'react';

import { useActions, useAppSelector } from '../../hooks';
import { selectCategoryId } from '../../store/reducers/filter/selectors';

import { categories } from '../../constants';

const Categories: React.FC = memo(() => {
  const { setCategoryId } = useActions();

  const categoryId = useAppSelector(selectCategoryId);

  const handleChooseCategory = (id: number) => () => {
    setCategoryId({ category: id });
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(({ category, id }) => (
          <li
            key={id}
            className={cn({ active: categoryId === id })}
            onClick={handleChooseCategory(id)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
