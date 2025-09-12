export type ArrayAction<T> =
  | { type: 'ADD'; item: T }
  | { type: 'UPDATE'; index: number; item: T }
  | { type: 'REMOVE'; index: number }
  | { type: 'CLEAR' };

const arrayReducer = <T>(state: T[], action: ArrayAction<T>): T[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];

    case 'UPDATE':
      return state.map((item, i) => (i === action.index ? action.item : item));

    case 'REMOVE':
      return state.filter((_, i) => i !== action.index);

    case 'CLEAR':
      return [];

    default:
      return state;
  }
};

export default arrayReducer;
