import { LayoutGrid } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilterActionCreator } from '../states/threadCategorySelected/action';
import FilterButton from './FilterButton';

export default function Filters({ categories = [] }) {
  const threadCategorySelected = useSelector(
    (states) => states.threadCategorySelected
  );
  const dispatch = useDispatch();

  function onClickCategory(category = null) {
    dispatch(setCategoryFilterActionCreator(category));
  }

  return (
    <div className="mb-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Threads</h1>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <FilterButton
          active={threadCategorySelected === null}
          onClick={() => onClickCategory(null)}
        >
          <LayoutGrid size={14} />
          All
        </FilterButton>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={threadCategorySelected === category}
            onClick={() => onClickCategory(category)}
          >
            <span
              className={
                threadCategorySelected === category
                  ? 'text-white'
                  : 'text-primary'
              }
            >
              #
            </span>{' '}
            {category}
          </FilterButton>
        ))}
      </div>
    </div>
  );
}
