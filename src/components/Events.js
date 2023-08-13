import React from 'react';
import './Event.css';
import { useHistory } from 'react-router-dom';

import {
  BrowserRouter as Router,Switch,  Route,Link} from "react-router-dom";
export default function Events() {
  let history = useHistory();
  const redd=()=>{
    history.push("/dekho")
  }
    return (<>
    <div class="photo"> 
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4 ">
      <div class="feature col aaab">
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        
        <a href="" class="icon-link" onClick={redd}>
          Call to action
          <svg class="bi" width="1em" height="1em"></svg>
        </a>
      </div>
      <div class="feature col aaab">
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"></svg>
        </a>
      </div>
      <div class="feature col aaab">
        
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link" onClick>
          Call to action
          <svg class="bi" width="1em" height="1em"></svg>
        </a>
      </div>

      <div class="feature col aaab">  
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" class="icon-link">
        Call to action
        <svg class="bi" width="1em" height="1em"></svg>
      </a>
    </div>
    </div>


    <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
    <div class="feature col aaab">
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" class="icon-link">
        Call to action
        <svg class="bi" width="1em" height="1em"></svg>
      </a>
    </div>
    <div class="feature col aaab">
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="/Check" class="icon-link">
        Call to action
        <svg class="bi" width="1em" height="1em"></svg>
      </a>
    </div>

    <div class="feature col aaab">  
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" class="icon-link">
        Call to action
        <svg class="bi" width="1em" height="1em"></svg>
      </a>
    </div>

    <div class="feature col aaab">  
      <h2>Featured title</h2>
      <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      <a href="#" class="icon-link">
        Call to action
        <svg class="bi" width="1em" height="1em"></svg>
      </a>
    </div>
  </div>

  </div>

  
  </>
  
    )
}
