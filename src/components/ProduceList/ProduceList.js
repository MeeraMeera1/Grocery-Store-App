/*
  to display the produce mock data
   we need the produce list component to access the produce slice of state 
    is this basically like the component bought this and only this piece of pie?
      think my understanding of componenets could be off
*/

/*
useSelector - accepts a function as a parameter and will pass the updated state
              into the function whenever the state gets updated
*/

import { useSelector } from 'react-redux';
import ProduceDetails from './ProduceDetails';
import './ProduceList.css';

//the ProduceList component is turning the products into an array 
  //the ProduceDetails componenet is then rendering that array
function ProduceList() {
  const produce = useSelector(state => state.produce);
  
  const produceArr = Object.values(produce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;