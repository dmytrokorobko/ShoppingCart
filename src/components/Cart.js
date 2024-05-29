import styles from './Cart.module.css';
import { Filter } from './Filter';

export function Cart({cart, filterText, handleFilterText, departmentsList, selectedFilterDepartment, handleFilterDepartment}) {
   return (
      <section className={styles.cart}>
         <h1>Your cart</h1>
         {cart.length === 0 ? (
            <p>Your cart is empty</p> 
         ) : (
            <Filter filterText={filterText} handleFilterText={handleFilterText} departmentsList={departmentsList} selectedFilterDepartment={selectedFilterDepartment} handleFilterDepartment={handleFilterDepartment} />
         )}
      </section>
   )
}