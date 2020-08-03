const correctAnswers = ['A','A','B','B'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.results');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value,];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25;
        }   
    });

    // show results on the page 
    scrollTo(0,0);
    results.querySelector('span').textContent = `${score}%`;
    results.classList.remove('d-none'); 

    let output = 0;
    const timer = setInterval(() => {
        results.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

// window object (global object)
