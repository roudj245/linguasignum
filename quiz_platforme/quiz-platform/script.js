// CONFIGURE YOUR BACKEND API URL HERE
const API_URL = 'https://quiz-api-9mpw.onrender.com';

// QUESTION BANK
const allQuestions = [
    // Français
    {
        language: "Français",
        langCode: "fr",
        intro: "Les sciences physiques nous aident à comprendre le monde qui nous entoure.",
        question: "Quelle est la vitesse de la lumière dans le vide ?",
        answers: ["300 000 km/s", "150 000 km/s", "450 000 km/s", "600 000 km/s"],
        correct: 0
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "La génétique étudie les caractéristiques héréditaires des êtres vivants.",
        question: "Combien de chromosomes possède l'être humain ?",
        answers: ["23", "46", "48", "52"],
        correct: 1
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "Les grandes découvertes scientifiques ont révolutionné notre compréhension de la matière.",
        question: "Qui a découvert la radioactivité ?",
        answers: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Galilée"],
        correct: 0
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "La géographie nous enseigne sur les merveilles naturelles de notre planète.",
        question: "Quel est le plus grand océan du monde ?",
        answers: ["Atlantique", "Indien", "Pacifique", "Arctique"],
        correct: 2
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "Connaître les capitales du monde est essentiel pour comprendre la géographie politique.",
        question: "Quelle est la capitale de l'Australie ?",
        answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "Notre planète Terre est divisée en plusieurs grandes masses terrestres.",
        question: "Combien y a-t-il de continents sur Terre ?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "La photosynthèse est un processus vital pour la vie sur Terre.",
        question: "Quel gaz les plantes absorbent-elles ?",
        answers: ["Oxygène", "Azote", "CO2", "Hydrogène"],
        correct: 2
    },
    {
        language: "Français",
        langCode: "fr",
        intro: "La diversité linguistique reflète la richesse culturelle de l'humanité.",
        question: "Quelle est la langue la plus parlée au monde ?",
        answers: ["Anglais", "Mandarin", "Espagnol", "Hindi"],
        correct: 1
    },
    
    // English
    {
        language: "English",
        langCode: "en",
        intro: "Modern physics was revolutionized by groundbreaking theories in the 20th century.",
        question: "Who developed the theory of relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo", "Stephen Hawking"],
        correct: 1
    },
    {
        language: "English",
        langCode: "en",
        intro: "Understanding physical measurements is fundamental to science and engineering.",
        question: "What is the unit of measurement for force?",
        answers: ["Joule", "Watt", "Newton", "Pascal"],
        correct: 2
    },
    {
        language: "English",
        langCode: "en",
        intro: "The human body is an amazing and complex biological system.",
        question: "What is the largest organ in the human body?",
        answers: ["Heart", "Brain", "Skin", "Liver"],
        correct: 2
    },
    {
        language: "English",
        langCode: "en",
        intro: "The skeletal system provides structure and support to the human body.",
        question: "How many bones are in the adult human body?",
        answers: ["186", "206", "226", "246"],
        correct: 1
    },
    {
        language: "English",
        langCode: "en",
        intro: "Some nations are remarkably small yet have significant cultural importance.",
        question: "What is the smallest country in the world?",
        answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1
    },
    {
        language: "English",
        langCode: "en",
        intro: "Renaissance art continues to captivate people around the world centuries later.",
        question: "Who painted the Mona Lisa?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correct: 1
    },
    {
        language: "English",
        langCode: "en",
        intro: "Materials science explores the properties and applications of different substances.",
        question: "What is the hardest natural substance?",
        answers: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2
    },
    {
        language: "English",
        langCode: "en",
        intro: "Historical events have shaped the world we live in today.",
        question: "In which year did World War II end?",
        answers: ["1943", "1944", "1945", "1946"],
        correct: 2
    },
    
    // Español
    {
        language: "Español",
        langCode: "es",
        intro: "Nuestro sistema solar es fascinante y lleno de planetas únicos.",
        question: "¿Cuántos planetas hay en nuestro sistema solar?",
        answers: ["7", "8", "9", "10"],
        correct: 1
    },
    {
        language: "Español",
        langCode: "es",
        intro: "La astronomía nos ayuda a entender las posiciones de los cuerpos celestes.",
        question: "¿Qué planeta está más cerca del Sol?",
        answers: ["Venus", "Marte", "Mercurio", "Tierra"],
        correct: 2
    },
    {
        language: "Español",
        langCode: "es",
        intro: "Los ríos son elementos fundamentales de la geografía mundial.",
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correct: 1
    },
    {
        language: "Español",
        langCode: "es",
        intro: "La geometría estudia las formas y sus propiedades matemáticas.",
        question: "¿Cuántos lados tiene un hexágono?",
        answers: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        language: "Español",
        langCode: "es",
        intro: "El reino animal presenta una increíble diversidad de especies y capacidades.",
        question: "¿Qué animal es el más rápido del mundo?",
        answers: ["León", "Guepardo", "Tigre", "Leopardo"],
        correct: 1
    },
    {
        language: "Español",
        langCode: "es",
        intro: "Conocer la ubicación de los países es parte esencial de la cultura general.",
        question: "¿En qué continente está Egipto?",
        answers: ["Asia", "Europa", "África", "América"],
        correct: 2
    },
    {
        language: "Español",
        langCode: "es",
        intro: "Los metales son recursos naturales de gran importancia para la humanidad.",
        question: "¿Cuál es el metal más abundante en la Tierra?",
        answers: ["Hierro", "Aluminio", "Cobre", "Oro"],
        correct: 1
    },
    
    // العربية (Arabic)
    {
        language: "العربية",
        langCode: "ar",
        intro: "الكيمياء تساعدنا على فهم تركيب المواد من حولنا.",
        question: "ما هو الرمز الكيميائي للذهب؟",
        answers: ["Au", "Ag", "Fe", "Cu"],
        correct: 0
    },
    {
        language: "العربية",
        langCode: "ar",
        intro: "الاكتشافات الطبية غيرت مسار تاريخ البشرية.",
        question: "من اخترع البنسلين؟",
        answers: ["لويس باستور", "ألكسندر فليمنغ", "ماري كوري", "روبرت كوخ"],
        correct: 1
    },
    {
        language: "العربية",
        langCode: "ar",
        intro: "التقويم الزمني أساسي لتنظيم حياتنا اليومية.",
        question: "كم عدد أيام السنة؟",
        answers: ["360", "364", "365", "366"],
        correct: 2
    },
    {
        language: "العربية",
        langCode: "ar",
        intro: "معرفة عواصم الدول جزء مهم من الثقافة العامة.",
        question: "ما هي عاصمة فرنسا؟",
        answers: ["لندن", "برلين", "باريس", "روما"],
        correct: 2
    },
    {
        language: "العربية",
        langCode: "ar",
        intro: "كوكب الأرض مقسم إلى عدة قارات كبرى.",
        question: "كم عدد قارات العالم؟",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        language: "العربية",
        langCode: "ar",
        intro: "الكواكب في مجموعتنا الشمسية تختلف في الحجم والخصائص.",
        question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
        answers: ["المشتري", "زحل", "نبتون", "أورانوس"],
        correct: 0
    },
    {
        language: "العربية",
        langCode: "ar",
        intro: "الظواهر الطبيعية مثل قوس قزح تذكرنا بجمال الطبيعة.",
        question: "كم عدد ألوان قوس قزح؟",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    
    
{
    language: "Türkçe",
    langCode: "tr",
    intro: "Kimyasal formüller maddelerin bileşimini anlamamıza yardımcı olur.",
    question: "Suyun kimyasal formülü nedir?",
    answers: ["H2O", "CO2", "O2", "H2O2"],
    correct: 0
},
{
    language: "Türkçe",
    langCode: "tr",
    intro: "Suyun fiziksel özellikleri günlük hayatta önemlidir.",
    question: "Deniz seviyesinde suyun kaynama noktası nedir?",
    answers: ["90°C", "100°C", "110°C", "120°C"],
    correct: 1
},
{
    language: "Türkçe",
    langCode: "tr",
    intro: "Avrupa başkentleri kültürel ve politik merkezlerdir.",
    question: "İspanya'nın başkenti neresidir?",
    answers: ["Barselona", "Madrid", "Valensiya", "Sevilla"],
    correct: 1
},
{
    language: "Türkçe",
    langCode: "tr",
    intro: "Zaman birimleri zamanı anlamamız için temeldir.",
    question: "Bir saatte kaç saniye vardır?",
    answers: ["3000", "3600", "4200", "3300"],
    correct: 1
},
     
    {
    language: "한국어",
    langCode: "ko",
    intro: "유럽 수도들은 역사와 문화가 풍부합니다.",
    question: "이탈리아의 수도는 어디입니까?",
    answers: ["밀라노", "나폴리", "로마", "피렌체"],
    correct: 2
},
{
    language: "한국어",
    langCode: "ko",
    intro: "달력은 일년 동안 시간을 구성하는 데 도움이 됩니다.",
    question: "2월에는 며칠이 있습니까 (윤년이 아닌 해)?",
    answers: ["27", "28", "29", "30"],
    correct: 1
},
{
    language: "한국어",
    langCode: "ko",
    intro: "이탈리아 르네상스 예술은 전 세계적으로 존경받고 있습니다.",
    question: "시스티나 성당을 그린 사람은 누구입니까?",
    answers: ["레오나르도", "미켈란젤로", "라파엘로", "도나텔로"],
    correct: 1
}
];

// Global Variables
let questions = [];
let currentQuestion = 0;
let score = 0;
let participantName = '';
let participantLastname = '';
let userAnswers = [];
let answered = false;
let currentUserId = null;

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleAnswers(question) {
    const indices = [0, 1, 2, 3];
    const shuffledIndices = shuffleArray(indices);
    
    return {
        ...question,
        answers: shuffledIndices.map(i => question.answers[i]),
        correct: shuffledIndices.indexOf(question.correct)
    };
}

// Main Quiz Functions
function startQuiz() {
    participantName = document.getElementById('participant-name').value.trim();
    participantLastname = document.getElementById('participant-lastname').value.trim();
    
    if (!participantName || !participantLastname) {
        alert('Please enter both your first name and last name!');
        return;
    }
    
    const shuffledAll = shuffleArray(allQuestions);
    const selectedQuestions = shuffledAll.slice(0, 15);
    questions = selectedQuestions.map(q => shuffleAnswers(q));
    
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const question = questions[currentQuestion];

    // Top box: Counter + Introduction
    const quizIntro = document.getElementById('question-intro');
    const introHTML = `
        <div class="question-counter">Question ${currentQuestion + 1} of ${questions.length}</div>
        <div class="intro-text">${question.intro}</div>
    `;
    quizIntro.innerHTML = introHTML;
    
    if (question.langCode === 'ar') {
        quizIntro.classList.add('arabic');
    } else {
        quizIntro.classList.remove('arabic');
    }
    
    // Display language
    const questionLanguage = document.getElementById('question-language');
    questionLanguage.textContent = question.language;
    
    // Bottom box: Question only
    const questionText = document.getElementById('question-text');
    questionText.textContent = question.question;
    
    if (question.langCode === 'ar') {
        questionText.classList.add('arabic');
    } else {
        questionText.classList.remove('arabic');
    }
    
    // Hide question label
    document.getElementById('question-label').style.display = 'none';
    
    // Answers
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    if (question.langCode === 'ar') {
        answersContainer.classList.add('arabic');
    } else {
        answersContainer.classList.remove('arabic');
    }
    
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-box';
        
        const letter = String.fromCharCode(65 + index);
        div.innerHTML = `<strong>${letter})</strong> ${answer}`;
        
        div.onclick = () => selectAnswer(index);
        answersContainer.appendChild(div);
    });
    
    document.getElementById('confirm-btn').style.display = 'inline-flex';
    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(index) {
    if (answered) return;
    
    userAnswers[currentQuestion] = index;
    
    const options = document.querySelectorAll('.answer-box');
    options.forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

function confirmAnswer() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Please select an answer!');
        return;
    }
    
    answered = true;
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.answer-box');
    
    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === question.correct) {
            opt.classList.add('correct');
        } else if (i === userAnswers[currentQuestion]) {
            opt.classList.add('wrong');
        }
    });
    
    if (userAnswers[currentQuestion] === question.correct) {
        score += 10;
    } else {
        score -= 5;
    }
    
    document.getElementById('confirm-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-flex';
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

async function showResults() {
    if (score < 0) score = 0;
    
    document.getElementById('final-score').textContent = score + ' Pts';
    
    await saveScoreToBackend();
    
    showScreen('results-screen');
}

// Backend Integration Functions
async function saveScoreToBackend() {
    try {
        const response = await fetch(`${API_URL}/quiz/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: participantName,
                lastname: participantLastname,
                score: score
            })
        });

        if (response.ok) {
            const data = await response.json();
            currentUserId = data.id;
            console.log('Score saved to backend:', data);
        } else {
            console.error('Failed to save score:', response.statusText);
        }
    } catch (error) {
        console.error('Error saving score to backend:', error);
    }
}

async function showLeaderboard() {
    try {
        const response = await fetch(`${API_URL}/quiz/users`);
        
        if (response.ok) {
            const users = await response.json();
            displayLeaderboard(users);
        } else {
            console.error('Failed to fetch leaderboard:', response.statusText);
            displayLeaderboard([]);
        }
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        displayLeaderboard([]);
    }
}

function displayLeaderboard(users) {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    
    const infoBox = document.querySelector('#leaderboard-screen .info-box');
    infoBox.textContent = `🌍 Global Leaderboard - ${users.length} participants`;
    
    if (users.length > 0) {
        users.forEach((user, index) => {
            const row = tbody.insertRow();
            
            const isCurrentPlayer = user.id === currentUserId;
            if (isCurrentPlayer) {
                row.style.background = 'rgba(213, 191, 134, 0.3)';
                row.style.border = '2px solid #D5BF86';
            }
            
            let rankDisplay = `#${index + 1}`;
            if (index === 0) rankDisplay = '🥇 #1';
            else if (index === 1) rankDisplay = '🥈 #2';
            else if (index === 2) rankDisplay = '🥉 #3';
            
            row.innerHTML = `
                <td class="rank">${rankDisplay}</td>
                <td>${user.name} ${user.lastname}${isCurrentPlayer ? ' (You)' : ''}</td>
                <td><strong>${user.score} pts</strong></td>
            `;
        });
    } else {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td colspan="3" style="text-align: center; padding: 30px;">
                No scores yet. Be the first to play!
            </td>
        `;
    }
    
    showScreen('leaderboard-screen');
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    participantName = '';
    participantLastname = '';
    questions = [];
    currentUserId = null;
    document.getElementById('participant-name').value = '';
    document.getElementById('participant-lastname').value = '';
    showScreen('welcome-screen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}