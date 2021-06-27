import { faAngleLeft, faAngleRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useRef,useState} from 'react'
export default function Player({currentSong,isPlaying,setIsPlaying,songs,setCurrentSong}){
    const audioRef = useRef(null)

    const playSongHandler =()=>{
        isPlaying===true?audioRef.current.pause():audioRef.current.play()
        setIsPlaying(!isPlaying);
    }
    if(isPlaying){
        const playPromise =  audioRef.current.play();
        if(playPromise!==undefined){
            playPromise.then((audio)=>{
                audioRef.current.play();
            })
        }
    }
    const dragHandler=(e)=>{
        audioRef.current.currentTime= e.target.value;
        setSongInfo({...songInfo,currentTime:e.target.value})
    }
    const timeUpdateHandler =(e)=>{
        const current =e.target.currentTime;
        const duration =e.target.duration;
        setSongInfo({...songInfo,currentTime:current,duration:duration 
        })
    }
    const playforwardHandler=()=>{
        let index= songs.indexOf(currentSong)
        if(index===songs.length-1){
            setCurrentSong(songs[0])
        }
        else{
        setCurrentSong(songs[index+1]) 
        }
    }
    const playbackHandler= ()=>{
        let index= songs.indexOf(currentSong)
        console.log(index)
        if(index===0){
            setCurrentSong(songs[songs.length-1])
        }
        else{
            setCurrentSong(songs[index-1]) 
        }
    }
        const getTime= (time)=>{
        return(
            Math.floor(time/60)+':'+('0'+Math.floor(time%60)).slice(-2)
        )
    }
    const [songInfo, setSongInfo]=useState({
        currentTime:0,
        duration:0 
    })
    return (
        <div className="player">
            <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input onChange={dragHandler} min={0} max={songInfo.duration ||0} value={songInfo.currentTime} type="range" />
            <p>{songInfo.duration?getTime(songInfo.duration):'0:00'}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon onClick={playbackHandler} className="play" size="2x" icon={faAngleLeft} />
            {
                isPlaying===false?
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />:
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPause} />
            }
            <FontAwesomeIcon onClick={playforwardHandler} className="play" size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} src={currentSong.audio}></audio>
        </div>
    )
}
