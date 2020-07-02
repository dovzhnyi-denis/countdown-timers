This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Countdown Timers.
This app was built for educational purpose.

Installation and running instruction:
  1. Clone repository with <code style="background:lightgrey">git clone https://github.com/dovzhnyi-denis/countdown-timers.git</code>
  2. Enter project directory.
  3. Execute commands:
    <code style="background:lightgrey">npm i</code>,
    <code style="background:lightgrey">npx serve -s build</code>

Features:
  1. User can select a future date and set a name for a timer, unique name is required.
  2. After clicking Add Countdown a new countdown timer will appear with name and years/months/days/hours/minutes/seconds left to the specified date.
  3. There will be a filling circle filling around each item, except for years, in order to add extra visualization.
  4. Once the countdown reaches 0 it will be automatically removed.
  5. User can optionally remove countdown by clicking at "X" in the top-right corner of the countdown element.
  6. There is no limit on how many countdowns can be added.
  7. Countdowns are stored in Web Storage "localstorage" object.
  8. Countdowns will be automatically sorted in ascending order.
 
