import './cart.scss';
import cart from '../../assets/images/cart.jpg';
import heart from '../../assets/images/heart.png';


function Cart() {
  return (
    <>
      <div className="cart">
        <div className="slider">
          <div id="heart"></div>

          {/* <img className='heart-shape' src={heart} alt="" /> */}
          <img src={cart} alt="" />
        </div>
        <div className="details">
          <div className='dots'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="price">$287,000</p>
          <p className="other"><b>2</b> bds<b>2</b> ba<b>1,392</b> sqft - Home for sale</p>
          <p className="other">2395 Delaware Ave SPC 61, Santa Cruz, CA 95060</p>
        </div>
      </div>
    </>
  );
}
export default Cart;
