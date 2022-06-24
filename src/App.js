import 'antd/dist/antd.css'
import "./App.css"
import SearchForm from './components/SearchForm';
import Line from './components/Line';
import AlbumContainer from "./components/AlbumContainer";
import AddOnBtn from './components/AddOnBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <Line />
        <AlbumContainer />
        <AddOnBtn />
      </header>
    </div>
  );
}

export default App;
