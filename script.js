const btnGoodMood = document.querySelector('.btn-good-mood');
const btnBadMood = document.querySelector('.btn-bad-mood');

let personInfo = localStorage.getItem('mood');
let goodMoodCounter = 0;
let badMoodCounter = 0;

document.querySelector('.counter-good-mood').innerText = goodMoodCounter.toString();
document.querySelector('.counter-bad-mood').innerText = badMoodCounter.toString();

if (personInfo !== 'good' && personInfo !== 'bad') {
    const person = {
        mood: 'unknown',
    };

    localStorage.setItem('mood', JSON.stringify(person.mood));
}

btnGoodMood.addEventListener('click', () => {
    localStorage.setItem('mood', 'good');
    document.querySelector('.counter-good-mood').innerText = String(++goodMoodCounter);
});

btnBadMood.addEventListener('click', () => {
    localStorage.setItem('mood', 'bad')
    document.querySelector('.counter-bad-mood').innerText = String(++badMoodCounter);
});