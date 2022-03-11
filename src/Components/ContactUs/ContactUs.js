import React from 'react'


function ContactUs () {
 return(    
<form className="form" action="./Home" method="POST">
      <div className="form_title">Contant Us</div>
      <p>You should recieve a response in 1-3 buisness days</p>
      <div className="form_item">
        <label For="yournamr" className="form_label">Your Name</label>
        <input type="text" clasName="form_input" name="yourname" placeholder='Enter your Movie(s) Name'></input>
      </div>
      <div className="form_item">
        <label For="typeofissue" className="form_label">Type of Issue</label>
        <input type="text" clasName="form_input" name="typeofissue" placeholder='Enter your Movie(s) Image URL'></input>
      </div>
      <div className="form_item">
        <label For="issuedescription" className="form_label">Issue Description</label>
       <textarea  maxLength="500" className="form_input" name="issuedescription" id="issuedescription" placeholder="Enter a detailed message about why you used to contact support. (Max. 500 Characters)"></textarea>
      </div>
    </form>
 )
}


export default ContactUs