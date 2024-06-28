const quizQuestions = [
    {
        question: "Which country is home to the isotope supplier Curium?",
        options: ["Canada", "Russia", "France & USA", "South Africa"],
        answer: "France & USA"
    },
    {
        question: "Where is the HFR research reactor located?",
        options: ["Poland", "Netherlands", "Belgium", "China"],
        answer: "Netherlands"
    },
    {
        question: "Which reactor in Canada ceased production in October 2016?",
        options: ["OPAL", "HFETR", "NRU at Chalk River", "Dimitrovgrad"],
        answer: "NRU at Chalk River"
    },
    {
        question: "What is the main purpose of at least half of the isotopes traded globally?",
        options: ["Industrial use", "Research", "Medical purposes", "Geological exploration"],
        answer: "Medical purposes"
    },
    {
        question: "Which country leads the list of importers of radioisotopes?",
        options: ["Germany", "USA", "Japan", "England"],
        answer: "USA"
    }
];

const quizQuestionsMd = [
    {
        question: "Which reactor is supplied by ANM in Australia?",
        options: ["Safari", "OPAL", "HFETR", "ETRR-2"],
        answer: "OPAL"
    },
    {
        question: "What is the main benefit of using isotope tracers in industrial processes?",
        options: ["Reduce raw material cost", "Improve safety protocols", "Study material transport and improve efficiency", "Enhance aesthetic qualities"],
        answer: "Study material transport and improve efficiency"
    },
    {
        question: "Where did the use of radioisotopes significantly impact the start-up of an oil refinery?",
        options: ["Roshchino, Russia", "Wilton, UK", "Jülich, Germany", "Chengdu, China"],
        answer: "Wilton, UK"
    },
    {
        question: "Which isotope is used in PET scanners for early cancer diagnosis?",
        options: ["13C", "18O", "239Pu", "Cobalt-60"],
        answer: "18O"
    },
    {
        question: "What is the potential benefit of laser technology in isotope production?",
        options: ["It enhances the quality of isotopes", "It increases the production volume", "It reduces the cost of production", "It speeds up the production process"],
        answer: "It reduces the cost of production"
    }
];


const quizQuestionsHd = [
    {
        question: "Which organization is known for organizing training courses on isotope detection technology?",
        options: ["IAEA", "ANM", "Curium", "NTP"],
        answer: "IAEA"
    },
    {
        question: "What type of reactors are being reconstructed to expand the production of 'peaceful' isotopes?",
        options: ["Medical reactors", "Industrial reactors", "Research reactors", "Military reactors"],
        answer: "Military reactors"
    },
    {
        question: "Which radioactive isotope is notable for its use in gamma irradiation installations?",
        options: ["Deuterium", "13C", "18O", "Cobalt-60"],
        answer: "Cobalt-60"
    },
    {
        question: "For what purpose is gamma sterilization NOT used?",
        options: ["Sterilization of food", "Strengthening wood products", "Enhancing flavor of vegetables", "Disinfection of industrial wastewater"],
        answer: "Enhancing flavor of vegetables"
    },
    {
        question: "Which stable isotope's industrial production was recently started by Oximed?",
        options: ["13C", "180", "239Pu", "Cobalt-60"],
        answer: "180"
    }
];


const questionContainer = document.getElementById('question-container');
const checkAnswersBtn = document.getElementById('check-answers-btn');
const nextPageBtn = document.getElementById('next-page-btn');

// Function to load all questions
function loadAllQuestions() {
    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <ul>
                ${question.options.map((option, optionIndex) => `
                    <li>
                        <input type="radio" id="option${index}${optionIndex}" name="question${index}" value="${option}">
                        <label for="option${index}${optionIndex}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        questionContainer.appendChild(questionElement);
    });
}

function loadAllQuestionsMd() {
    quizQuestionsMd.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <ul>
                ${question.options.map((option, optionIndex) => `
                    <li>
                        <input type="radio" id="option${index}${optionIndex}" name="question${index}" value="${option}">
                        <label for="option${index}${optionIndex}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        questionContainer.appendChild(questionElement);
    });
}

function loadAllQuestionsHd() {
    quizQuestionsHd.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <ul>
                ${question.options.map((option, optionIndex) => `
                    <li>
                        <input type="radio" id="option${index}${optionIndex}" name="question${index}" value="${option}">
                        <label for="option${index}${optionIndex}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        questionContainer.appendChild(questionElement);
    });
}

// Initialize quiz
loadAllQuestions();

// Event listener for checking answers
checkAnswersBtn.addEventListener('click', function() {
    // Reset previous styles
    const allLabels = questionContainer.querySelectorAll('label');
    allLabels.forEach(label => {
        label.parentElement.classList.remove('correct', 'incorrect');
    });

    // Check answers logic
    let score = 0;
    let allCorrect = true;
    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                score++;
                selectedOption.nextElementSibling.parentElement.classList.add('correct');
            } else {
                selectedOption.nextElementSibling.parentElement.classList.add('incorrect');
                allCorrect = false;
            }
        } else {
            allCorrect = false; // No answer selected for this question
        }
    });

    
    
    // Show "Next Page" button if all answers are correct
    if (allCorrect) {
        nextPageBtn.style.display = 'block';
    } else {
        nextPageBtn.style.display = 'none';
    }

});

// Event listener for next page button (dummy implementation)
nextPageBtn.addEventListener('click', function() {   
    nextPageBtn.style.display = 'none';
    questionContainer.innerHTML = '';
    

    loadAllQuestionsMd();

    checkAnswersBtn.addEventListener('click', function() {
        // Reset previous styles
        const allLabels = questionContainer.querySelectorAll('label');
        allLabels.forEach(label => {
            label.parentElement.classList.remove('correct', 'incorrect');
        });
    
        // Check answers logic
        let score = 0;
        let allCorrect = true;
        quizQuestionsMd.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === question.answer) {
                    score++;
                    selectedOption.nextElementSibling.parentElement.classList.add('correct');
                } else {
                    selectedOption.nextElementSibling.parentElement.classList.add('incorrect');
                    allCorrect = false;
                }
            } else {
                allCorrect = false; // No answer selected for this question
            }
        });
    
        
        
        // Show "Next Page" button if all answers are correct
        if (allCorrect) {
            nextPageBtn.style.display = 'block';
            nextPageBtn.addEventListener('click', function() {

                questionContainer.innerHTML = '';
                nextPageBtn.style.display = 'none';
            
                loadAllQuestionsHd();
            
                checkAnswersBtn.addEventListener('click', function() {
                    // Reset previous styles
                    const allLabels = questionContainer.querySelectorAll('label');
                    allLabels.forEach(label => {
                        label.parentElement.classList.remove('correct', 'incorrect');
                    });
                
                    // Check answers logic
                    let score = 0;
                    let allCorrect = true;
                    quizQuestionsHd.forEach((question, index) => {
                        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
                        if (selectedOption) {
                            if (selectedOption.value === question.answer) {
                                score++;
                                selectedOption.nextElementSibling.parentElement.classList.add('correct');
                            } else {
                                selectedOption.nextElementSibling.parentElement.classList.add('incorrect');
                                allCorrect = false;
                            }
                        } else {
                            allCorrect = false; // No answer selected for this question
                        }
                    });
                
                    
                    
                    // Show "Next Page" button if all answers are correct
                    if (allCorrect) {
                        alert("You have done your quize")
                    } 
                
                });
            });
            
        } else {
            nextPageBtn.style.display = 'none';
        }
    
    });
});
