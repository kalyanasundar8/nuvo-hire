import { RingLoader } from "react-spinners";

const MyLoader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <RingLoader color={'#123abc'} loading={true} size={30} />
    </div>
  );

export default MyLoader;