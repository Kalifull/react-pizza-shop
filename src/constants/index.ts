import { SortPropertyEnum, SortTypeItem } from '../store/slices/filter/types';

export const itemsPerPage = 4;

export const sortTypes: SortTypeItem[] = [
  {
    name: 'популярность по убыванию',
    sortProperty: SortPropertyEnum.RATING_DESC,
    id: 0,
  },
  {
    name: 'популярность по возврастанию',
    sortProperty: SortPropertyEnum.RATING_ASC,
    id: 1,
  },
  {
    name: 'цена по убыванию',
    sortProperty: SortPropertyEnum.PRICE_DESC,
    id: 2,
  },
  {
    name: 'цена по возврастанию',
    sortProperty: SortPropertyEnum.PRICE_ASC,
    id: 3,
  },
  {
    name: 'по алфавиту',
    sortProperty: SortPropertyEnum.TITLE_ASC,
    id: 4,
  },
];

export const categories = [
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
    category: 'Новинки',
    id: 5,
  },
];
