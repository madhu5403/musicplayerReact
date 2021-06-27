import LibrarySong from './LibraraySong'
export default function Library({songs,setCurrentSong,setIsPlaying,isPlaying,currentSong,LibraryStatus}) {
    return (
        <div className={`library ${LibraryStatus===true?'active-library':''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {
                    songs.map(song=>{
                        return <LibrarySong key={song.id} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={song} setCurrentSong={setCurrentSong} />
                    })
                }
                
            </div>
        </div>
    )
}
