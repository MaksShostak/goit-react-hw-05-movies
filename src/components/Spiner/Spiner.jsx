import { RotatingLines } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spiner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
      <RotatingLines
        strokeColor="crimson"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
export default Spiner;
