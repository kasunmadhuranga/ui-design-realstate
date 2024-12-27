import './home.scss';
import Cart from './cart/cart';


function Home() {
  return (
    <>
      <div className='wrapper'>
        <Cart />
        <Cart />
      </div>
    </>
  );
}
export default Home;
