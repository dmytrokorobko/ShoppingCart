import styles from './Cart.module.css';
import { Filter } from './Filter';

export function Cart({cart, isFilter, handleRemoveFromCart, filterText, handleFilterText, departmentsList, selectedFilterDepartment, handleFilterDepartment, handleFilterReset}) {
   let priceTotal = 0;
   const cartList = cart.map(p => (
      <li key={p.id}>
         <p className={styles.productDepartment}>{p.department}</p>
         <p className={styles.productName}>{p.product}</p>
         <p className={styles.productPrice}>{p.price}</p>
         <p className={styles.productQuantity}>{p.quantity}</p>
         <p className={styles.productEndPrice}>{(priceTotal += p.price * p.quantity).toFixed(2)}</p>
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
         {!isFilter ? (
            <p>Your cart is empty</p> 
         ) : (
            <div className={styles.cartComponents}>
               <Filter filterText={filterText} handleFilterText={handleFilterText} departmentsList={departmentsList} selectedFilterDepartment={selectedFilterDepartment} handleFilterDepartment={handleFilterDepartment} handleFilterReset={handleFilterReset} />
               {cart.length === 0 ? (
                  <p>There isn't any item regarding to your filter settings</p>
               ) : (
                  <ul>
                     {cartList}
                  </ul>
               )}
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