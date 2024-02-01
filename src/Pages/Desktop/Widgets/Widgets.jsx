import React from 'react'
import "./Widgets.css"

export default function Widgets() {

    
    const [checkedOne, setCheckedOne] = React.useState(true);
    const [checkedTwo, setCheckedTwo] = React.useState(true);
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [time, setTime] = React.useState(
      new Date().getHours() + ":" + new Date().getMinutes()
    );
    const [seconds, setSeconds] = React.useState(new Date().getSeconds())

    
    let intervalId

    function getTime(){
        intervalId = setInterval(() => {

          let now = new Date();
          let hour = now.getHours();
          let minute = now.getMinutes()
          let second = now.getSeconds()

        setTime( hour + ":" + minute)
        setSeconds(second)
      }, 1000);
    }

    getTime()

    function handleChangeOne(){
        setCheckedOne(!checkedOne)
    }
    function handleChangeTwo() {
      setCheckedTwo(!checkedTwo);
    }
    function handleChangeThree() {
      setCheckedThree(!checkedThree);
    }

    const gradiantStyle = {
      background: `conic-gradient(from ${seconds * 6}deg, #282C33, #2a45b0)`,
    };

    


  return (
    <div className="widgets">

    <div className='widgetRow1'>
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
      <div className="clockWidget" style={gradiantStyle}>
        <p id="clockWidgetText">{time}</p>
      </div>

    </div>
    <div className='widgetRow2'>
      <p>Todo</p>
    </div>

    </div>
  );
}
