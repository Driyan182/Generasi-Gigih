import './App.css';
import 'regenerator-runtime/runtime';
import data from './album/album.js'

console.log(process.env.REACT_APP_CLIENT_ID);

function showAlert(){
  alert(`You selected ${data.album.name} !`)
}

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="topNav">Music</h1>
        <h1 className="topNav">Podcast</h1>
        <h1 className="topNav">Streaming</h1>
        <h1 className="topNav">Radio</h1>
      </div>
    
      <h1 className="songsTitle">Music You Might Like</h1>
      <div className="itemContainer">
        <img src={data.album.images[0].url} alt="image"/>
        <p className="songTitle">{data.album.name}</p>
        <p className="artist">{data.album.artists[0].name}</p>
        <button className="selectButton" onClick={showAlert}>Select</button>
      </div>
    </div>
  );
}

export default App;
