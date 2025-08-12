import './App.css';
import RepositoryList from './components/RepositoryList';
import PageButton from './components/PageButton';
import usePageNumber from './hooks/usePageNumber';

function App() {

  const { page, updatePage, data, loading, error } = usePageNumber();

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        <RepositoryList items={data} />
        <PageButton page={page} updatePage={updatePage} />
      </div>
    </>
  )
}

export default App
