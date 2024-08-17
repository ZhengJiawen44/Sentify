//compound scores variable
const obj = resultList[3];

//get the total number of comments
document.getElementById("commentCount").innerHTML =
  commentList.length + " Comments";

// initiate the scores when page first loads
document.getElementById("commentsContainer").innerHTML = "";
for (let i = 0; i < commentList.length; i++) {
  const comment = document.createElement("div");
  comment.innerHTML = commentList[i];
  const commentScore = document.createElement("div");
  commentScore.className = "score";
  comment.id = "score";
  commentScore.innerHTML = "Score: " + obj[i].compound.toFixed(3);
  document
    .getElementById("commentsContainer")
    .append(document.createElement("br"));
  document.getElementById("commentsContainer").append(comment);
  document.getElementById("commentsContainer").append(commentScore);
  dynamicScoreColor();
}

function displayStats() {
  document.getElementById("commentsContainer").innerHTML = "";
  document.getElementById("commentCount").innerHTML =
    commentList.length + " Comments";
}
function displayAll() {
  document.getElementById("commentCount").innerHTML =
    commentList.length + " Comments";
  document.getElementById("commentsContainer").innerHTML = "";
  for (let i = 0; i < commentList.length; i++) {
    const comment = document.createElement("div");
    comment.innerHTML = commentList[i];
    const commentScore = document.createElement("div");
    commentScore.className = "score";
    comment.id = "score";
    commentScore.innerHTML = "Score: " + obj[i].compound.toFixed(3);
    document
      .getElementById("commentsContainer")
      .append(document.createElement("br"));
    document.getElementById("commentsContainer").append(comment);
    document.getElementById("commentsContainer").append(commentScore);
    dynamicScoreColor();
  }
}

function displayPositive() {
  document.getElementById("commentCount").innerHTML = "";
  document.getElementById("commentCount").innerHTML =
    resultList[0].length + " Comments";
  document.getElementById("commentsContainer").innerHTML = "";
  for (let i = 0; i < resultList[0].length; i++) {
    const comment = document.createElement("div");
    comment.innerHTML = resultList[0][i];
    document
      .getElementById("commentsContainer")
      .append(document.createElement("br"));
    document.getElementById("commentsContainer").append(comment);
  }
}
function displayNegative() {
  document.getElementById("commentCount").innerHTML = "";
  document.getElementById("commentCount").innerHTML =
    resultList[1].length + " Comments";
  document.getElementById("commentsContainer").innerHTML = "";
  for (let i = 0; i < resultList[1].length; i++) {
    const comment = document.createElement("div");
    comment.innerHTML = resultList[1][i];
    document
      .getElementById("commentsContainer")
      .append(document.createElement("br"));
    document.getElementById("commentsContainer").append(comment);
  }
}
function displayNeutral() {
  document.getElementById("commentCount").innerHTML = "";
  document.getElementById("commentCount").innerHTML =
    resultList[2].length + " Comments";
  document.getElementById("commentsContainer").innerHTML = "";
  for (let i = 0; i < resultList[2].length; i++) {
    const comment = document.createElement("div");
    comment.innerHTML = resultList[2][i];
    document
      .getElementById("commentsContainer")
      .append(document.createElement("br"));
    document.getElementById("commentsContainer").append(comment);
  }
}

// Load the YouTube IFrame API
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a YouTube player
var player;
var videoContent = document.getElementById("videoContent");
var width = videoContent.clientWidth;
var height = videoContent.clientHeight;

// Function to update player size
function updatePlayerSize() {
  var videoContent = document.getElementById("videoContent");
  var width = videoContent.clientWidth;
  var height = videoContent.clientHeight;

  if (player) {
    player.setSize(width, height);
  }
}

// Call updatePlayerSize when the window is resized
window.addEventListener("resize", updatePlayerSize);
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: height,
    width: width,
    videoId: vId,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// When the player is ready, play the video
function onPlayerReady(event) {
  event.target.playVideo();
}

// Add any additional player state change handling here
function onPlayerStateChange(event) {
  // Handle state changes here
}

// Debugging: Log to ensure the script is running
console.log("YouTube IFrame API script is being loaded.");

function dynamicScoreColor() {
  const scoreElements = document.querySelectorAll(".score");

  scoreElements.forEach((scoreElement) => {
    const scoreText = scoreElement.innerHTML;
    const scoreValue = parseFloat(scoreText.replace("Score: ", ""), 10);

    if (scoreValue >= 0.05) {
      scoreElement.style.color = "green"; // High score
    } else if (scoreValue >= -0.05 && scoreValue < 0.05) {
      scoreElement.style.color = "grey"; // Medium score
    } else {
      scoreElement.style.color = "red"; // Low score
    }
  });
}
