import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
function Contact() {
  return (
<>
<section className="mb-4">
<h1 className="text-center mt-3">CONTACT US</h1>
<div className="row">

<div className="col-md-9 mb-md-0 mb-5">
<form id="contact-form" name="contact-form" action="mail.php" method="POST">

<div className="row mt-2">
  <div className="col-md-6">
 
  YOUR NAME : <input type="text" className="form-control" />


  </div>
  <div className="col-md-6">
 
 YOUR EMAIl : <input type="text" className="form-control" />


 </div>
</div>
<div className="row mt-2">
  <div className="col-md-12">
    SUBJECT : <input type="text" className="form-control" />
  </div>
</div>
<div className="row mt-2">
  <div className="col-md-12">
    YOUR MESSAGE : <input type="text" className="form-control" />
  </div>
</div>

  



</form>
<div className="text-center mt-2">
   <a href="#" className="btn btn-primary ">Send</a>
  </div>
</div>
<div className="col-md-3">
<div className="row">
<LocationOnIcon style={{fontSize:'80px'}}/>
<br />
<h4>INDIA</h4>
<h3>GORAKHPUR U.P. </h3>
 <p>Tamkuhi Road , Seorahi</p>
 </div>
 <div className="row">
 <PhoneEnabledIcon style={{fontSize:'80px'}}/>
 <a style={{width:'20%',height:'60px'}} href="tel:1234567890" class="btn btn btn-success">Call Now!</a>


 </div>
 <div className="row mt-2">
 <FacebookIcon style={{fontSize:'80px'}}/>
 <a style={{width:'28%',height:'60px'}} href="https://www.facebook.com/gorakhkumar.gupta/" class="btn btn btn-primary">FaceBook!</a>


 </div>
 <div className="row mt-2">
 <EmailIcon style={{fontSize:'80px'}}/>
 <a style={{width:'28%',height:'60px'}} href="https://www.facebook.com/gorakhkumar.gupta/" class="btn btn btn-danger">Mail!</a>


 </div>
</div>

</div>
</section>
</>
  );
}

export default Contact;
