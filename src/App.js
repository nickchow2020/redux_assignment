import 'antd/dist/antd.css'
import "./App.css"
import SearchForm from './components/SearchForm';
import Line from './components/Line';
import AlbumContainer from "./components/AlbumContainer";
import {useSelector} from "react-redux"

function App() {

  const show = useSelector(data => data.init.show)

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <Line />
        {
          show ? <AlbumContainer /> : null
        }
      </header>
    </div>
  );
}

export default App;
