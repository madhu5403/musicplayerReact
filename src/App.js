import Player from "./Components/Player";
import Song from "./Components/Song";
import Library from './Components/Library'
import {useState} from "react";
import Nav from './Components/Nav'
import data from './util'
import './Styles/App.css'
function App() {
  const[songs,setSongs]= useState(data())
  const [currentSong,setCurrentSong]=useState(songs[0])
  const [isPlaying,setIsPlaying]=useState(false)
  const [LibraryStatus, setLibraryStatus] = useState(false)

  return (
    <div className={`App ${LibraryStatus===true?"library-active":""}`}>
      <Nav LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Library LibraryStatus={LibraryStatus} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}  songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
