<h2>Countdown Timers.</h2>
<p>Simple app for setting up countdowns for important events.</p>

Installation and running instruction:
<ul>
  <li>Clone repository with <code style="background:lightgrey">git clone https://github.com/dovzhnyi-denis/countdown-timers.git</code></li>
  <li>Enter project directory;</li>
  <li>Execute commands:
  <ul>
    <li><code style="background:lightgrey">npm i</code>;</li>
    <li><code style="background:lightgrey">npm run build</code>;</li>
    <li><code style="background:lightgrey">npx serve -s build</code>;</li>
  </ul>
  <li>In browser visit <i>http://localhost:5000</i>, 5000 is the default port used by <b>serve</b>.</li>
</ul>

Features:
<ul>
  <li>Countdown timer can be added with name and custom date, both fields are required, unique name is required;</li>
  <li>After clicking Add Countdown a new countdown timer will appear with name and years/months/days/hours/minutes/seconds left to the specified date;</li>
  <li>For extra visualization there will be a filling circle, filling around each item, except for years;</li>
  <li>Once the countdown reaches 0 its background will turn red(ish);</li>
  <li>Countdown can be removed by clicking on "X" in the top-right corner of the countdown element;</li>
  <li>There is no limit on how many countdowns can be added;</li>
  <li>Countdowns are stored in Web Storage "localstorage" object;</li>
  <li>Countdowns will be automatically sorted in chronological order.</li>
</ul>
