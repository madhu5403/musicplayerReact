import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'
export default function Nav({setLibraryStatus,LibraryStatus}) {
    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={()=>{setLibraryStatus(!LibraryStatus)}} >
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )        
}
