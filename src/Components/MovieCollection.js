import  { React, useEffect, useState} from "react"


function MovieCollection (){

    const [collection, setCollection] = useState([])

useEffect (() => {
    fetch('http://localhost:8001/BadFlix')
    .then(resp => resp.json())
    .then (data => console.log(data))
})

return (
    <div>

    </div>


)



}




export default MovieCollection; 