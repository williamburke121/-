import  { React, useEffect, useState} from "react"


function MovieCollection (){

    const [collection, setCollection] = useState([])

useEffect (() => {
    fetch('https://api.themoviedb.org/3/collection/translations?api_key=d511bcf90e5a983aed2cad9b8f36549d&language=en-US')
    .then(resp => resp.json())
    .then (data => console.log(data))
})

return (
    <div>

    </div>


)



}




export default MovieCollection; 