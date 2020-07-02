This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h2>Countdown Timers.</h2>
This app was built for educational purpose.

Installation and running instruction:
<ul>
  <li>Clone repository with <code style="background:lightgrey">git clone https://github.com/dovzhnyi-denis/countdown-timers.git</code></li>
  <li>Enter project directory;</li>
  <li>Execute commands:
  <ul>  
    <li><code style="background:lightgrey">npm i</code>;</li>
    <li><code style="background:lightgrey">npx serve -s build</code>;</li>
  </ul>
  <li>In browser visit <i>http://localhost:5000</i>, 5000 is the default port used by <b>serve</b>.</li>
</ul>

Features:
<ul>
  <li>User can select a future date and set a name for a timer, unique name is required;</li>
  <li>After clicking Add Countdown a new countdown timer will appear with name and years/months/days/hours/minutes/seconds left to the specified date;</li>
  <li>There will be a filling circle filling around each item, except for years, in order to add extra visualization;</li>
  <li>Once the countdown reaches 0 it will be automatically removed;</li>
  <li>User can optionally remove countdown by clicking at "X" in the top-right corner of the countdown element;</li>
  <li>There is no limit on how many countdowns can be added;</li>
  <li>Countdowns are stored in Web Storage "localstorage" object;</li>
  <li>Countdowns will be automatically sorted in ascending order.</li>
</ul>
