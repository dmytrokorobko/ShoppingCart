import { useEffect, useState } from 'react';
import './App.css';
import {shopProducts} from './data/shop';
import {ShopCatalog} from './components/ShopCatalog';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([]); //initial cart
  const [filteredCart, setFilteredCart] = useState(cart); //cart to show on page either after any filtered manipulation or without them
  const [filteredText, setFilteredText] = useState(''); //text filter
  const [filteredDepartment, setFilteredDepartment] = useState(''); //dropdown menu filter

  const departmentsList = () => {
    if (shopProducts.length === 0) return;
    return shopProducts.map(prod => prod.department);
  }

  function handleAddToCart(department, product) {
    const prod = shopProducts.find(d => d.department === department).products.find(p => p.name === product);

    setCart(prev => {      
      if (prev.find(p => p.department === department && p.product === product)) {
        //Update
        return prev.map(item => item.department === department && item.product === product ? 
          {...item, quantity: item.quantity++}
          : item
        )

      } else {
        //Add new
        const newProduct = {
          id: getNewId(),
          department: department,
          product: product,
          price: prod.price,
          quantity: 1
        };

        return [newProduct, ...prev];
      }
    });
  }

  function handleRemoveFromCart(department, product) {
    const existedItem = cart.find(item => item.department === department && item.product === product);
    if (existedItem) {
      if (existedItem.quantity > 1) {
        //remove quantity
        setCart(prev => {
          return prev.map(item => item.department === department && item.product === product 
            ? {...item, quantity: item.quantity--}
            : item
          )
        })
      } else {
        //remove from cart
        setCart(cart.filter(item => item !== existedItem));
      }      
    }    
  }

  function handleFilteredText() {

  }

  function handleFilteredDepartment() {

  }

  function handleFilterReset() {

  }

  function getNewId() {
    let i = 1;
    if (cart.length === 0) return i;    
    cart.forEach(prod => {
      if (prod.id > i) i = prod.id;
    })
    return i + 1;
  }

  useEffect(() => {
    let filter = cart;

    //filter cart data
    

    setFilteredCart(filter);
  }, [cart, filteredText, filteredDepartment]);

  return (
    <div className="App">
      <ShopCatalog 
        shopProducts={shopProducts} 
        addToCart={handleAddToCart} />
      <Cart 
        cart={filteredCart} 
        handleRemoveFromCart={handleRemoveFromCart} 
        filterText={filteredText} 
        handleFilterText={handleFilteredText} 
        departmentsList={departmentsList()}
        selectedFilterDepartment={filteredDepartment}
        handleFilterDepartment={handleFilteredDepartment}
        handleFilterReset={handleFilterReset}
      />
    </div>
  );
}

export default App;
