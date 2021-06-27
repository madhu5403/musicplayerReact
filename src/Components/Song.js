export default function Song({currentSong}) {
    return (
        <div className="Song-Container" >
            <img alt='' src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}
