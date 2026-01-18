import PodiumItem from './PodiumItem';

function Podium({ topThree }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <PodiumItem leader={{ ...topThree[0], rank: 1 }} />
      <PodiumItem leader={{ ...topThree[1], rank: 2 }} />
      <PodiumItem leader={{ ...topThree[2], rank: 3 }} />
    </div>
  );
}

export default Podium;
