export default function LibrarySong({song,setCurrentSong,setIsPlaying,isPlaying,currentSong}) {
    const songSelectHandler=()=>{
        setCurrentSong(song);
        setIsPlaying(isPlaying);
    }
    return (
        <div onClick={songSelectHandler} className={`libraray-song ${song.id===currentSong.id?'selected':''}`} >
             <img alt='' src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}
