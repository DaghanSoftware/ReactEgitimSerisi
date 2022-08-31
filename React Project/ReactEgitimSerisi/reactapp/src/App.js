import './App.css';

function App() {
  const test = 34;
  const isAuth = true;
  return (
    
    <div className="App">
      <h1>{1+1}</h1>
      <h2>{"semih".toUpperCase()}</h2>
      <h3>{test}</h3>
      <div>
        {
          isAuth ? <p>Kullanıcı Kayıtlı</p> : null
        }
      </div>
    </div>
  );
}

export default App;
