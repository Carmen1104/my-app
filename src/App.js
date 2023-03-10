import './App.css';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import Profile from "./components/Profile";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Profile fullname = "Carmen Cleosa" stuID = "2502009601"/>
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