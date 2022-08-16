import useStores from '@/store';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

const HomePage = () => {
  const { counter } = useStores();

  return (
    <div>
      <h3>{counter.count}</h3>
      <Button type="primary" onClick={counter.add}>
        add
      </Button>
    </div>
  );
};

export default observer(HomePage);
