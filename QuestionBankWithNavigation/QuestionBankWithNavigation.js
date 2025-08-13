const questions = [
  'What is the capital of France?',
  'What is 2 + 2?',
  'What is the largest planet in our solar system?',
  'Who wrote "Romeo and Juliet"?',
  'What is the boiling point of water?',
  'What is the currency of Japan?',
  'What is the chemical symbol for gold?',
  'Who painted the Mona Lisa?',
  'What is the tallest mountain in the world?',
  'What is the fastest land animal?'
];
let current = 0;
function showQuestion(idx) {
  document.getElementById('question').textContent = questions[idx];
}
document.getElementById('prevBtn').onclick = function() {
  if (current > 0) current--;
  showQuestion(current);
};
document.getElementById('nextBtn').onclick = function() {
  if (current < questions.length - 1) current++;
  showQuestion(current);
};
showQuestion(current);
