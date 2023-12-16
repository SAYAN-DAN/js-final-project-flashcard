const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.querySelector("#done-button")
let selectedCards = []; 

const handleStart = () => {
  createScoreElement();
  flashcardsData.forEach((item) => {
    //* Card add section
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    //* Card click event
    cardElement.addEventListener('click', () => {
      console.log(item.word);
      cardElement.classList.add('border-red-500');
      cardElement.innerText = item.meaning;

      selectedCards.push(item);
      updateScore();
    });
  });

  startButton.classList.add('hidden');
  resetButton.classList.remove('hidden');
  doneButton.classList.remove('hidden');
  updateScore()
};

const handleReset = () => {
  cardContainer.innerHTML = '';
  selectedCards = [];

  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
};

const handleDone = function () {
  selectedCards.forEach((item) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-red-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);
  });

   // Remove unselected cards
   const unselectedCards = Array.from(cardContainer.children).filter((card) => {
    return !selectedCards.some((selectedCard) => card.innerText.includes(selectedCard.word));
  });

  unselectedCards.forEach((card) => {
    card.remove();
  });

  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
}

function createScoreElement() {
  const scoreElement = document.createElement('div');
  scoreElement.id = 'score-card';
  scoreElement.className = 'text-lg font-semibold';
  document.body.appendChild(scoreElement);
}

function updateScore() {
  const scoreElement = document.getElementById('score-card');
  if (scoreElement) {
    scoreElement.innerText = `Score: ${selectedCards.length}`;
  }
}