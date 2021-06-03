import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import './index.css';
import CopyrightIcon from '@material-ui/icons/Copyright';



function Footer() {
  return (
<>
<div className="copyright d-flex">
<CopyrightIcon className="pt-1" style={{height:'20px'}}/>
<h6 className="pt-1 d-flex">2021 Copyright | Portfolio</h6>
  
</div>
</>
  );
}

export default Footer;
