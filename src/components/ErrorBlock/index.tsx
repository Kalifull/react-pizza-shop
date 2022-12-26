import { useAppSelector } from '../../hooks';
import { selectItemsState } from '../../store/slices/item/selectors';

const ErrorBlock: React.FC = () => {
  const { error } = useAppSelector(selectItemsState);

  return (
    <div className="content__error-info">
      {error === 'AxiosError' ? (
        <>
          <h2>Ошибка сети</h2>
          <p>Не удается получить доступ к сайту</p>
          <p>Проверьте подключение к Интернету</p>
        </>
      ) : (
        <>
          <h2>Упс, что-то пошло не так</h2>
          <p>
            Проблема могла возникнуть, когда сервер запросил ресурсы, или это может быть проблема,
            связанная с устаревшим или поврежденным кэшем и файлами cookie
          </p>
        </>
      )}
    </div>
  );
};

export default ErrorBlock;
