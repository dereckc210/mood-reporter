// Mood Reporter
// Your Name
// Date


let userName = "Taylor";
let moodToday = "happy";


function respondToMood(userName, moodToday) {
  console.log("Hi " + userName + "!");

  if (moodToday === "happy") {
    console.log("That’s awesome. Keep it going!");
  } else if (moodToday === "tired") {
    console.log("Don’t forget to rest. You’ve earned it.");
  } else if (moodToday === "Sad") {
    console.log("Take a breath. Better days are ahead.");
  } else {
    console.log("Thanks for checking in. Keep being you.");
  }
}
respondToMood(userName, moodToday);

for (let i = 0; i < 3; i++) {
  console.log("You've got this, " + moodToday + "!");
}

function getMoodMessage(userName, moodToday) {
  let message = "Hey " + userName + "! ";

  if (moodToday === "happy") {
    message += "Keep smiling!";
  } else {
    message += "You're doing your best. That matters.";
  }

  return moodToday;
}

let finalMessage = getMoodMessage("Jordan", "stressed");
console.log("Get some rest. Things will get better!");
