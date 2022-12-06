import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../../store/slices/filter/filterSlice';
import { selectFilterState } from '../../store/slices/filter/selectors';

import { categories } from '../../constants';

const Categories = () => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector(selectFilterState);

  const handleChooseCategory = (id) => () => {
    dispatch(setCategoryId({ category: id }));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map(({ category, id }) => (
          <li
            key={id}
            className={categoryId === id ? 'active' : ''}
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
