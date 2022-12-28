import { useParams } from 'react-router-dom';

import Skeleton from '../../components/Skeleton';
import ErrorBlock from '../../components/ErrorBlock';
import ProductBlock from '../../components/ProductBlock';

import { productApi } from '../../services';

type PageParams = {
  id: string;
};

const Product: React.FC = () => {
  const { id } = useParams<PageParams>();

  const { data: item, isLoading, error } = productApi.useFetchItemByIdQuery(id!);

  return (
    <div className="container">
      <div className="content__items">
        {isLoading && <Skeleton />}
        {error && <ErrorBlock />}
        {item && <ProductBlock {...item} />}
      </div>
    </div>
  );
};

export default Product;
