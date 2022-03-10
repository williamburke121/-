import React from 'react'


function ContactUs () {
 return(  
     <div>
    <h1>Contact Us</h1>
    <form action="submit" method="post">
 <ul>
  <li>
    <label> Name</label>
    <input type="text" className="movie_Name"/>
  </li>
  <li>
      <label>Email</label>
      <input type="text" className="email"></input>
  </li>
  <li>
    <label>Type of Issue</label>
    <input type="text" className="image_link" />
  </li>
  <li>
    <label >Issue Explanned</label>
    <textarea className="description" ></textarea>
  </li>
  <input type="submit" value="Submit"></input>
 </ul>
</form>
</div>
 )
}


export default ContactUs