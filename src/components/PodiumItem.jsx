import { Trophy } from 'lucide-react';

const PodiumItem = ({ leader }) => {
  const isRank1 = leader?.rank === 1;

  // Konfigurasi style berdasarkan Rank
  const styles = {
    1: {
      border: 'border-yellow-400',
      bgBadge: 'bg-yellow-400 text-slate-900',
      tierColor: 'text-yellow-600 dark:text-yellow-400',
      container:
        'p-8 border-2 border-primary/20 scale-105 z-10 order-1 md:order-2',
      avatarSize: 'size-28',
      pointsText: 'text-lg font-black',
    },
    2: {
      border: 'border-slate-200 dark:border-slate-700',
      bgBadge: 'bg-slate-400 text-white',
      tierColor: 'text-slate-500 dark:text-[#9cabba]',
      container:
        'p-6 border border-slate-100 dark:border-slate-800/50 order-2 md:order-1 mt-4',
      avatarSize: 'size-24',
      pointsText: 'text-sm font-bold',
    },
    3: {
      border: 'border-orange-200 dark:border-orange-900',
      bgBadge: 'bg-orange-600 text-white',
      tierColor: 'text-slate-500 dark:text-[#9cabba]',
      container:
        'p-6 border border-slate-100 dark:border-slate-800/50 order-3 mt-4',
      avatarSize: 'size-24',
      pointsText: 'text-sm font-bold',
    },
  };

  const s = styles[leader?.rank];

  return (
    <div
      className={`bg-white dark:bg-[#1b252f] rounded-2xl flex flex-col items-center text-center shadow-sm ${s.container}`}
    >
      <div className="relative mb-4">
        <div
          className={`${s.avatarSize} rounded-full border-4 ${s.border} overflow-hidden`}
        >
          <img
            alt={leader?.name}
            className="w-full h-full object-cover"
            src={leader?.user?.avatar}
          />
        </div>
        <div
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${s.bgBadge} text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}
        >
          {isRank1 && (
            <Trophy />
          )}
          #{leader?.rank}
        </div>
      </div>
      <h3
        className={`${
          isRank1 ? 'text-xl font-extrabold' : 'text-lg font-bold'
        }`}
      >
        {leader?.user?.name}
      </h3>
      <p className={`text-primary ${s.pointsText}`}>
        {leader?.score?.toLocaleString()} points
      </p>
      <p
        className={`${s.tierColor} text-xs uppercase tracking-wider mt-1 font-semibold`}
      >
        {leader?.tier}
      </p>
    </div>
  );
};

export default PodiumItem;
