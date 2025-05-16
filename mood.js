// Mood Reporter
// Your Name
// Date


let userName = "Taylor";
let moodToday = "happy";


function respondToMood(name, mood) {
  console.log("Hi " + userName + "!");

  if (mood === "happy") {
    console.log("That’s awesome. Keep it going!");
  } else if (mood === "tired") {
    console.log("Don’t forget to rest. You’ve earned it.");
  } else if (mood === "Sad") {
    console.log("Take a breath. Better days are ahead.");
  } else {
    console.log("Thanks for checking in. Keep being you.");
  }
}

for (let i = 0; i < 3; i++) {
  console.log("You've got this, " + userName + "!");
}

function getMoodMessage(name, mood) {
  let message = "Hey " + userName + "! ";

  if (mood === "happy") {
    message += "Keep smiling!";
  } else {
    message += "You're doing your best. That matters.";
  }

  return moodToday;
}

let finalMessage = getMoodMessage("Jordan", "stressed");
console.log("Get some rest. Things will get better!");

respondToMood(userName, moodToday);
