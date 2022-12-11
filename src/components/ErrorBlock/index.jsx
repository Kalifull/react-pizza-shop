import { useSelector } from 'react-redux';

import { selectItemsState } from '../../store/slices/item/selectors';

const ErrorBlock = () => {
  const { error } = useSelector(selectItemsState);

  if (error?.name === 'AxiosError') {
    return (
      <div className="content__error-info">
        <h2>Ошибка сети</h2>
        <p>Заходите попозже, мы скоро всё починим!</p>
      </div>
    );
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
