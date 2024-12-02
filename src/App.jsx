
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const coffeeLoad = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeLoad);
  return (
    <>
     
      <h1 className='text-3xl text-purple-600'>Coffee Store Client : {coffeeLoad.length}</h1>
     <div className='grid md:grid-cols-2 gap-6 w-11/12 mx-auto my-20'>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
     </div>
    </>
  )
}

export default App
