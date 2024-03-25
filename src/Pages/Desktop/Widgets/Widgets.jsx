import React, { useState, useEffect } from "react"

import "./Widgets.css"

export default function Widgets({width}) {




    
  function setDeviceLayout(){

   
    if (width <= 825  && width > 390){

       return (
         <div className="widgets">
           <div className="widgetRow1">
             <TodoListWidget />
           </div>
           <div className="widgetRow2">
             <SpecialeDayWidget />
             <ClockWidget />
           </div>
         </div>
       );

    } else if (width <= 435) {
      return (
        <div className="widgets">
          <div className="widgetRow2">
            <SpecialeDayWidget />
            <ClockWidget />
          </div>
        </div>
      );
    } else {
      return (
        <div className="widgets">
          <div className="widgetRow1">
            <TodoListWidget />
            <ClockWidget />
          </div>
          <div className="widgetRow2">
            <SpecialeDayWidget />
            <ContactWidget />
          </div>
        </div>
      );
    }
  }

    


  return (
    <>
      {setDeviceLayout()}
    </>
  );
}


function TodoListWidget(){


    
    const [checkedOne, setCheckedOne] = React.useState(true);
    const [checkedTwo, setCheckedTwo] = React.useState(true);
    const [checkedThree, setCheckedThree] = React.useState(false);


      function handleChangeOne() {
        setCheckedOne(!checkedOne);
      }
      function handleChangeTwo() {
        setCheckedTwo(!checkedTwo);
      }
      function handleChangeThree() {
        setCheckedThree(!checkedThree);
      }


  return (
    <div className="todoListWidget">
      <div className="todoListWidgetHeader">
        <h2>Todays Todos</h2>
        <img src="/images/icons/calendar-check-solid.svg" />
      </div>
      <div className="todoListWidgetBody">
        <ul>
          <li>
            <input
              type="checkBox"
              checked={checkedOne}
              value={checkedOne}
              onChange={handleChangeOne}
            />
            <label
              className={checkedOne ? "todoWidgetLabelDone" : ""}
              onClick={handleChangeOne}
            >
              Build a Portfolio Website
            </label>
          </li>
          <li>
            <input
              type="checkBox"
              checked={checkedTwo}
              value={checkedTwo}
              onChange={handleChangeTwo}
            />
            <label
              className={checkedTwo ? "todoWidgetLabelDone" : ""}
              onClick={handleChangeTwo}
            >
              Finish of Apps
            </label>
          </li>
          <li>
            <input
              type="checkBox"
              checked={checkedThree}
              value={checkedThree}
              onChange={handleChangeThree}
            />
            <label
              className={checkedThree ? "todoWidgetLabelDone" : ""}
              onClick={handleChangeThree}
            >
              Get a Job
            </label>
          </li>
        </ul>
        <button className="todoWidgetAddButton">+</button>
      </div>
    </div>
  );
}


function ClockWidget(){

      const [hour, setHour] = React.useState(new Date().getHours());

      const [minute, setMinute] = React.useState(new Date().getMinutes());

      const [seconds, setSeconds] = React.useState(new Date().getSeconds());

      function getTime() {
        setInterval(() => {
          let now = new Date();
          let newHour = now.getHours();
          let newMinute = now.getMinutes();
          let newSecond = now.getSeconds();

          if (newHour != hour) {
            setHour(newHour);
          }

          if (newMinute != minute) {
            setMinute(newMinute);
          }

          setSeconds(newSecond);
        }, 1000);
      }

      getTime();

      const gradiantStyle = {
        background: `conic-gradient(from ${seconds * 6}deg, #282C33, #2a45b0)`,
      };


  return (
    <div className="clockWidget" style={gradiantStyle}>
      <p id="clockWidgetText">
        {hour + " : " + (minute < 10 ? "0" + minute : minute)}
      </p>
    </div>
  );
}


function SpecialeDayWidget(){

  return (
    <div className="specialDayWidget">
      <h1>
        <span>20</span> Days
      </h1>
      <h1>
        <span>15</span> Hours
      </h1>
      <h1>
        <span>10</span> Minutes
      </h1>
    </div>
  );
}

function ContactWidget(){

  return (
    <div className="contactWidget">
      <img src="/images/ProfilePic.PNG" />
      <div>
        <h1>Joel Storr</h1>
        <div className="contactInfoHolder">
          <div>
            <h3>Frontend Developer</h3>
            <a href="mailto:info@joelstorr.de">info@joelstorr.de</a>
          </div>
          <div className="contactLinkHolder">
            <h3>Links:</h3>
            <a href="https://de.linkedin.com/in/joel-storr-190316137">
              LinkedIn
            </a>
            <br />
            <a href="https://github.com/JoelStorr">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}