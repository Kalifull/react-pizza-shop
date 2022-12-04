import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../../store/slices/filterSlice';
import { selectCategoryState } from '../../store/slices/selectors';

import { categories } from '../../constants';

const Categories = () => {
  const dispatch = useDispatch();
  const { currentCategoryId } = useSelector(selectCategoryState);

  const handleChooseCategory = (categoryId) => () => {
    dispatch(setCategoryId({ categoryId }));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(({ category, id }) => (
          <li
            key={id}
            className={currentCategoryId === id ? 'active' : ''}
            onClick={handleChooseCategory(id)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
