import Banner from './sections/Banner';
import Header from './sections/Header';

function App() {
  return (
    <>
      <header className='page-header'>
        <Header />
      </header>
      <main className='page-content'>
      <Banner /> 
      </main>
    </>
  );
}

export default App;
