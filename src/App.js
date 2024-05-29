import { useEffect, useState } from 'react';
import './App.css';
import {shopProducts} from './data/shop';
import {ShopCatalog} from './components/ShopCatalog';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [filteredCart, setFilteredCart] = useState(cart);
  const [filteredText, setFilteredText] = useState('');
  const [filteredDepartment, setFilteredDepartment] = useState('');

  const departmentsList = () => {
    if (shopProducts.length === 0) return;
  }

  function handleAddToCart(department, product) {
    const prod = shopProducts.find(d => d.department === department).products.find(p => p.name === product);
    const newProduct = {
      id: getNewId(),
      department: department,
      product: product,
      price: prod.price,
      quantity: 1
    }

    console.log(newProduct);

    setCart(prev => [
      newProduct,
      ...prev 
    ]);

    console.log(cart);
  }

  function handleRemoveFromCart(id) {

  }

  function handleFilteredText() {

  }

  function handleFilteredDepartment() {

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
        departmentsList={departmentsList}
        selectedFilterDepartment={filteredDepartment}
        handleFilterDepartment={handleFilteredDepartment} />
    </div>
  );
}

export default App;
