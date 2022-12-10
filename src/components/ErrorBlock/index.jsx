import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectItemsState } from '../../store/slices/item/selectors';

import routes from '../../routes';

const ErrorBlock = () => {
  const navigate = useNavigate();
  const { error } = useSelector(selectItemsState);

  if (error?.name === 'AxiosError') {
    return (
      <div className="content__error-info">
        <h2>Ошибка сети</h2>
        <p>Заходите попозже, мы скоро всё починим!</p>
      </div>
    );
  }

  if (error.response?.status === 401) {
    navigate(routes.HomePathPage());
  }

  return (
    <div className="content__error-info">
      <h2>Упс, что-то пошло не так</h2>
      <p>
        Проблема могла возникнуть, когда сервер запросил ресурсы, или это может быть проблема с
        устаревшим или поврежденным кэшем и файлами cookie.
      </p>
    </div>
  );
};

export default ErrorBlock;
