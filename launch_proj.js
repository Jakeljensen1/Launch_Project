// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = [];
const monitoringTaskId = null;


// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
  oneTimeTasks.push({ func, delay })
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  // TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
  oneTimeTasks.forEach(task => {
    setTimeout(task.func, task.delay)
  })
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  // TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
  if (monitoringTaskId !== null) {
    console.log("monitoring is already running.");
    return;
  }
  monitoringTaskId = setInterval(() => {
    console.log("Monitoring in Progress...");
  }, 3000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  if (monitoringTaskId !== null) {
    clearInterval(monitoringTaskId);
    monitoringTaskId = null;
    console.log("Monitoring stopped.");
  } else {
    console.log("No active monitoring to stop.");
  }
}
// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.


// Task 6: Start Countdown Function
function startCountdown(duration) {
  let remainingTime = duration;

  const countdownId = setInterval(() => {
    if (remainingTime > 0) {
      console.log(`Countdown: ${remainingTime} seconds remaining`);
      remainingTime--;
    } else {
      clearInterval(countdownId);
      console.log("Liftoff!");
    }
  }, 1000); // Runs every 1 second
}

// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  // Schedule pre-launch system check (after 2 seconds)
  addOneTimeTask(() => {
    console.log("Pre-launch system check complete.");
  }, 2000);

  // Schedule monitoring start (after 3 seconds)
  addOneTimeTask(() => {
    console.log("Starting monitoring...");
    startMonitoring();
  }, 3000);

  // Schedule monitoring stop (after 12 seconds)
  addOneTimeTask(() => {
    console.log("Stopping monitoring...");
    stopMonitoring();
  }, 12000);

  // Schedule countdown start (after 13 seconds)
  addOneTimeTask(() => {
    console.log("Initiating countdown...");
    startCountdown(5); // 5-second countdown
  }, 13000);

  // Execute all scheduled tasks
  runOneTimeTasks();
  // TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
}

scheduleMission(); // Starts the mission.