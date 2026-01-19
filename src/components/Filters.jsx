import { LayoutGrid, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilterActionCreator } from '../states/threadCategorySelected/action';
import FilterButton from './FilterButton';
import { setSearchFilterActionCreator } from '../states/threadSearch/action';

export default function Filters({ categories = [] }) {
  const threadCategorySelected = useSelector(
    (states) => states.threadCategorySelected
  );
  const threadSearch = useSelector((states) => states.threadSearch);
  const dispatch = useDispatch();

  function onClickCategory(category = null) {
    if (threadCategorySelected === category) {
      category = null;
    }
    dispatch(setCategoryFilterActionCreator(category));
  }

  function onChangeSearch({ target }) {
    console.log(target.value);
    dispatch(setSearchFilterActionCreator(target.value));
  }

  return (
    <div className="mb-6 flex flex-col gap-4">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder-slate-500"
            placeholder="Search threads..."
            type="text"
            value={threadSearch}
            onChange={onChangeSearch}
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
