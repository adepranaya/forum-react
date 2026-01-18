import { LayoutGrid, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilterActionCreator } from '../states/threadCategorySelected/action';
import FilterButton from './FilterButton';
import HeadingApp from './HeadingApp';

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
        <HeadingApp>All Threads</HeadingApp>
      </div>
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder-slate-500"
            placeholder="Search for threads, users, or tags..."
            type="text"
          />
        </div>
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
