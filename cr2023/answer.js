//get text source and replace * to class tag
let source = document.getElementById('source').innerHTML;
source = source.replace(/^\*(.*)/gm, ".red[$1]")
document.getElementById('source').innerHTML = source;

//show correct answer
function showCorrectAnswer() {
  let correct_answer = document.getElementsByClassName('red');
  for (let i = 0; i < correct_answer.length; i++) {
    correct_answer[i].style.color = "red"
  }
}

//hide correct answer
function hideCorrectAnswer() {
  let correct_answer = document.getElementsByClassName('red');
  for (let i = 0; i < correct_answer.length; i++) {
    correct_answer[i].style.color = "black"
  }
}

//run function by press Enter
  document.addEventListener("keydown", (event) => {
if (event.isComposing || event.keyCode === 13) {
  showCorrectAnswer()
} else if (event.isComposing || event.keyCode !== 13) {
   hideCorrectAnswer()
}
});
