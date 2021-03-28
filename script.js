function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exerciseshere.
  // click liftoffButton 'Houston, we have liftoff!'
  button.addEventListener("click", function (event){
  console.log("Houston, we have liftoff!", takeOff)
});

window.addEventListener("load", init);