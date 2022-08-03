import useStores from '@/store';

const HomePage = () => {
  const { counter } = useStores();
  return (
    <div>
      <h3>{counter.count}</h3>
      <button onClick={counter.add}>add</button>
    </div>
  );
};

export default observer(HomePage);
