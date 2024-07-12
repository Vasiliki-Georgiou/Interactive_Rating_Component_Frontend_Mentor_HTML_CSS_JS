let ratingButtons = document.querySelectorAll('.rating');
let submitBtn = document.querySelector('.btn');
let card1 = document.querySelector('.card-1');
let card2 = document.querySelector('.card-2');
let scoreSpan = document.querySelector('.score span');
let score = null;


const recoverRatingScore = (event) => {
  score = event.currentTarget.innerText;
  scoreSpan.innerText = score;
}

const displaySubmitCard = (evt) => {
  evt.preventDefault();
  if (score === null) {
    alert('Please select a rating before submitting.')
  } else {
    card1.classList.add('hidden');
    card2.classList.remove('hidden');
  }

}

ratingButtons.forEach((button) => {
  button.addEventListener('click', recoverRatingScore);
})

submitBtn.addEventListener('click', displaySubmitCard);
