import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import useFetch from './hooks/useFetch'

function App() {

  const { data, loading, error } = useFetch();
  console.log(data, loading, error);

  return (
    <>
      <div>
        <ItemList />
      </div>
    </>
  )
}

export default App
