import 'antd/dist/antd.css'
import "./App.css"
import SearchForm from './components/SearchForm';
import Line from './components/Line';
import AlbumContainer from "./components/AlbumContainer"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <Line />
        <AlbumContainer />
      </header>
    </div>
  );
}

export default App;
