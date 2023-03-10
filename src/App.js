import './App.css';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
//import Profile from "./components/Profile"; <Profile fullname = "Carmen Cleosa" stuID = "2502009601"/>
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Title>TODO LIST</Title>
      <div className='container'>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}


export default App;

//