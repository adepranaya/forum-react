import Podium from './Podium';

export default function LeaderboardsList({ leaderboards = [] }) {
  const topThree = leaderboards.slice(0, 3);
  const others = leaderboards.slice(3);

  return (
    <>
      <Podium topThree={topThree} />

      <div className="bg-white dark:bg-[#1b252f] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-[#283039] border-bottom border-slate-200 dark:border-slate-800">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9cabba] w-20">
                Rank
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9cabba]">
                User
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9cabba] text-right">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {others.map((leaderboard, idx) => (
              <tr
                key={idx + 4}
                className="hover:bg-slate-50 dark:hover:bg-[#222c36] transition-colors group"
              >
                <td className="px-6 py-4 font-bold text-slate-400 group-hover:text-primary">
                  #{idx + 4}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={leaderboard.user.avatar}
                      alt={`User avatar for rank ${idx + 1}`}
                      className="size-8 rounded-full"
                    />
                    <span className="font-medium">{leaderboard.user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">
                  {leaderboard.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
