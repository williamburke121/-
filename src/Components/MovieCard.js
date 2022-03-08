import {React} from 'react'
import {BsFillArrowRightCircleFill, BsFillLeftRightCircleFill} from 'react-icons/bs'


function MovieCard (){
    return (
        <div>
        <div className="scroll-right"  onClick={() => console.log('Clicked')}>
        <img src='' alt="cover art" className="show-art"/>
        <div className="details-container">
            <header>
                <h3>Movie Name</h3>                    
            </header>
                <p>Movie Summary</p>
        </div>
    </div>
    </div>
    )
}


export default MovieCard;