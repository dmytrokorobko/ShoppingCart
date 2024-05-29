import styles from './Cart.module.css';
import { Filter } from './Filter';

export function Cart({cart, handleRemoveFromCart, filterText, handleFilterText, departmentsList, selectedFilterDepartment, handleFilterDepartment, handleFilterReset}) {
   let priceTotal = 0;
   const cartList = cart.map(p => (
      <li key={p.id}>
         <p className={styles.productDepartment}>{p.department}</p>
         <p className={styles.productName}>{p.product}</p>
         <p className={styles.productPrice}>{p.price}</p>
         <p className={styles.productQuantity}>{p.quantity}</p>
         <p className={styles.productEndPrice}>{priceTotal += p.price * p.quantity}</p>
         <button className={styles.productButtonRemove} onClick={(e) => {
            const department = e.target.parentElement.children[0].innerHTML; 
            const product = e.target.parentElement.children[1].innerHTML; 
            handleRemoveFromCart(department, product);
         }}>Remove</button>
      </li>
   ));
   return (
      <section className={styles.cart}>
         <h1>Your cart</h1>
         {cart.length === 0 ? (
            <p>Your cart is empty</p> 
         ) : (
            <div className={styles.cartComponents}>
               <Filter filterText={filterText} handleFilterText={handleFilterText} departmentsList={departmentsList} selectedFilterDepartment={selectedFilterDepartment} handleFilterDepartment={handleFilterDepartment} handleFilterReset={handleFilterReset} />
               <ul>
                  {cartList}
               </ul>
               <hr/>
               <div className={styles.priceTotal}>
                  <p>Total:</p>
                  <p className={styles.price}>{priceTotal.toFixed(2)}</p>
               </div>
            </div>           

            
         )}
      </section>
   )
}