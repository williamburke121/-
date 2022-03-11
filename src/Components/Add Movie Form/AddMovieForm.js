import React from 'react'
import './AddMovieForm.css'



function AddMovieForm (){
    return (
    <form className="form" action="./Home" method="POST">
      <div className="form_title">Shit Post</div>
      <p> Add your worst movie and leave your stain on History!</p>
      <div className="form_item">
        <label For="moviename" className="form_label">Movie Name</label>
        <input type="text" clasName="form_input" name="moviename" placeholder='Enter your Movie(s) Name'></input>
      </div>
      <div className="form_item">
        <label For="movieimageurl" className="form_label">Movie Image Url</label>
        <input type="url" clasName="form_input" name="movieimageurl" placeholder='Enter your Movie(s) Image URL'></input>
      </div>
      <div className="form_item">
        <label For="moviedescription" className="form_label">Movie Description</label>
       <textarea maxLength="500" className="form_input" name="moviedescription" id="moviedescription" placeholder="Enter your Movie Description. (Max. 500 Characters)"></textarea>
      </div>
 
 
    </form>
 )
}



export default AddMovieForm;