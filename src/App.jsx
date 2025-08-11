import './App.css';
import RepositoryList from './components/RepositoryList';
import useFetchData from './hooks/useFetchData';
import PageButton from './components/PageButton';

function App() {

  const { data, loading, error } = useFetchData() || {};

  return (
    <>
      <div>
        <RepositoryList items={data} />
        <PageButton />
      </div>
    </>
  )
}

export default App
