import React from 'react'
import "./Widgets.css"

export default function Widgets() {

    const [checkedOne, setCheckedOne] = React.useState(true);
    const [checkedTwo, setCheckedTwo] = React.useState(true);
    const [checkedThree, setCheckedThree] = React.useState(false);


    function handleChangeOne(){
        setCheckedOne(!checkedOne)
    }
    function handleChangeTwo() {
      setCheckedTwo(!checkedTwo);
    }
    function handleChangeThree() {
      setCheckedThree(!checkedThree);
    }

  return (
    <div className="widgets">
      <div className="todoListWidget">
        <div className='todoListWidgetHeader'>
        <h2>Todays Todos</h2>
        <img src="/images/icons/calendar-check-solid.svg"/>
        </div>
        <div className='todoListWidgetBody'>
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
        <button className='todoWidgetAddButton'>+</button>
        </div>
      </div>
    </div>
  );
}
