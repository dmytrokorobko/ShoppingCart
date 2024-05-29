import styles from './ShopCatalog.module.css';

export function ShopCatalog({shopProducts, addToCart}) {
   if (shopProducts.length === 0) return <p>Our store is empty...</p>
   return (
      <section className={styles.shopCatalog}>
         <h1>Shop Catalog</h1>
         <div className={styles.products}>
            {shopProducts.map((department, index) => (
               <div className={styles.department} key={index}>
                  <h2>{department.department}</h2>
                  <div className={styles.departmentProducts}>
                     {department.products.map((product, productIndex) => (
                        <div className={styles.departmentProduct} key={productIndex}>
                           <p className={styles.productName}>{product.name}</p>
                           <p className={styles.productPrice}>{product.price}</p>
                           <button className={styles.buttonBuy} 
                              onClick={(e) => {
                                 const product = e.target.parentElement.firstChild.innerHTML;
                                 const department = e.target.parentElement.parentElement.parentElement.firstChild.innerHTML;
                                 addToCart(department, product);
                              }}
                           >Buy</button>
                        </div>
                     ))}
                  </div>
               </div>
            ))}            
         </div>
      </section>
   )
}