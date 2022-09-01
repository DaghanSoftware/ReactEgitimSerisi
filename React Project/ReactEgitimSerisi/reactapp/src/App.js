import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
function App() {
  return (
    
    <div className="container">
      <Navbar title= "User App"/>
      <hr></hr>
      <User
      name ="Semih Dağhan"
      salary = "5000"
      department = "Bilişim"
      />
    </div>
  );
}

export default App;
