import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import mypic from './mypic.jpg';
function Home() {
  return (
<>
<div className ="homepage">
<div className="mypic d-flex">
<div className="intro p-0">
<h1 className="pt-4">Hi,This is <b>Gorakh</b></h1>
<h1 className="Job" style={{color:'red'}}><strong style={{color:'red'}}>Web Developer.</strong></h1>

</div>
<img src={mypic} className="pt-3" />
</div>
</div>

</>
  );
}

export default Home;
