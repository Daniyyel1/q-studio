import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import BookContext from '../../contexts/BookContext';
import cart from "../../assets/cart.png";
import { CartBody, CartImgCont, CartPageWrapper } from '../styles';

const CartPage = () => {
  const [email, setEmail] = useState("")
  // using context
  const { addedBook, removeFromCart, addToCart } = useContext(BookContext);

  // Total Price variable
  //acc = accumulator and curr = currentItem
  const totalPrice = addedBook.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );



  return (
    <CartPageWrapper>
      {addedBook.length === 0 ? (
          <div className="empty-cart">
            <img src={cart} className="img-fluid" alt="cart" />
            <h3>Your cart is empty</h3>
            <p style={{ color: "#794e21" }}>
              Start shopping to add items to your cart
            </p>
            <Link to="/">Back to homepage</Link>
          </div>
        ) : (
          <CartBody className='genLayout'>
            <div className="scroll__bar">
              <div className='cartBody'>
                <tr>
                  <th>Products</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>

                {addedBook.map((book) => {
                  return (
                    <tr>
                      <td>
                        <CartImgCont>
                          <img src={book.img} alt="coffee" />
                        </CartImgCont>
                      </td>
                      <td>{book.title}</td>
                      <td>#{book.price}</td>
                      <td>
                        <div>
                          <span
                            className="left"
                            onClick={() => removeFromCart(book.id)}
                          >
                            -
                          </span>
                          <span className="middle">{book.qty}</span>
                          <span
                            className="right"
                            onClick={() => addToCart(book)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>{book.price * book.qty}</td>
                      <td>
                        <RiDeleteBinLine
                          className="del"
                          onClick={() => removeFromCart(book.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </div>
            </div>

            <div className="total">
              <h1>cart total</h1>
              <div className="ending">
                <h3>Total Price</h3>
                <p>#{totalPrice}</p>
              </div>


                <p>enter email to proceed to checkout</p>
              <div className="btn__btn">
                <div className="formInput">
                  <label htmlFor="email">email address:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  // onClick={handlePayment}
                  disabled={email.length < 1}
                >
                  proceed to checkout (#{totalPrice})
                </button>
              </div>
            </div>
          </CartBody>
        )}
    </CartPageWrapper>
  )
}

export default CartPage