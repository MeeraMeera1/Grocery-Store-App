import { useEffect, useState } from 'react';
//i want to dispatch action when the app component gets loaded
//to get the dispatch method in a react component 
  //import the hook from react-redux 
import { useDispatch } from 'react-redux';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
//import the action 
import { populateProduce } from './store/produce';


function App() {
  //use the useEffect hook to dispatch the action when the app component first loads
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(populateProduce());
    //be sure to add dispatch to the dependency array 
    //action should only be dispatche once 
  }, [dispatch]);

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
