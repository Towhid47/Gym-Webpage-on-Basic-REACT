import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QnA from './components/Simple QNA/QnA';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <QnA></QnA>
    </div>
  );
}

export default App;
