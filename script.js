const lessons = [
  {
    id: 1,
    title: 'HTML Basics',
    category: 'HTML',
    free: true,
    heading: 'What is HTML?',
    explanation: 'HTML gives a webpage its structure using tags such as headings, paragraphs, and images.',
    codeIdentification: 'Use tags like <h1>, <p>, and <img>.',
    example: '<h1>Hello World</h1>\n<p>This is my first page.</p>',
    exercise: 'Create a page with one heading and one paragraph.',
    project: 'Build a tiny profile card with your name and a short bio.'
  },
  {
    id: 2,
    title: 'HTML Lists and Links',
    category: 'HTML',
    free: true,
    heading: 'Organizing content',
    explanation: 'Lists help group related ideas and links connect pages together.',
    codeIdentification: 'Use <ul>, <li>, and <a>.',
    example: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<a href="#">Visit site</a>',
    exercise: 'Create an unordered list of three hobbies.',
    project: 'Create a simple navigation menu with three links.'
  },
  {
    id: 3,
    title: 'HTML Forms',
    category: 'HTML',
    free: true,
    heading: 'Collecting user input',
    explanation: 'Forms let users submit information such as names, emails, and messages.',
    codeIdentification: 'Use <form>, <input>, and <button>.',
    example: '<form>\n  <input type="text" placeholder="Name" />\n  <button>Submit</button>\n</form>',
    exercise: 'Create a form with a text input and submit button.',
    project: 'Build a contact form with name and message fields.'
  },
  {
    id: 4,
    title: 'CSS Styling',
    category: 'CSS',
    free: true,
    heading: 'Making pages beautiful',
    explanation: 'CSS adds color, spacing, and layout to HTML content.',
    codeIdentification: 'Use selectors and properties like color and margin.',
    example: 'h1 { color: blue; }\np { margin-top: 10px; }',
    exercise: 'Style a heading in blue and add padding to a paragraph.',
    project: 'Make a colorful welcome section for a landing page.'
  },
  {
    id: 5,
    title: 'CSS Box Model',
    category: 'CSS',
    free: true,
    heading: 'Understanding spacing',
    explanation: 'Every element has content, padding, border, and margin.',
    codeIdentification: 'Use padding, border, and margin.',
    example: '.card { padding: 16px; border: 1px solid #ccc; margin: 10px; }',
    exercise: 'Create a card-style box with padding and a border.',
    project: 'Design a small product card with image and text.'
  },
  {
    id: 6,
    title: 'JavaScript Variables',
    category: 'JavaScript',
    free: true,
    heading: 'Storing data',
    explanation: 'Variables hold values that your programs can use and change.',
    codeIdentification: 'Use let and const.',
    example: 'let name = "Amina";\nconst age = 20;',
    exercise: 'Create two variables for your name and country.',
    project: 'Display a personalized greeting on the page.'
  },
  {
    id: 7,
    title: 'JavaScript Functions',
    category: 'JavaScript',
    free: true,
    heading: 'Reusing logic',
    explanation: 'Functions group code so you can run it whenever needed.',
    codeIdentification: 'Use function names and return values.',
    example: 'function greet() {\n  return "Hello";\n}',
    exercise: 'Write a function that returns your favorite color.',
    project: 'Create a button that changes text when clicked.'
  },
  {
    id: 8,
    title: 'Responsive Layouts',
    category: 'CSS',
    free: false,
    heading: 'Building for every screen',
    explanation: 'Responsive design helps websites adapt to phones, tablets, and desktops.',
    codeIdentification: 'Use media queries and flexible units.',
    example: '@media (max-width: 700px) { body { font-size: 14px; } }',
    exercise: 'Create a media query that changes the layout on smaller screens.',
    project: 'Make a responsive landing page with two columns on desktop and one on mobile.'
  },
  {
    id: 9,
    title: 'JavaScript Events',
    category: 'JavaScript',
    free: false,
    heading: 'Responding to user actions',
    explanation: 'Events let your page react when a user clicks, submits, or types.',
    codeIdentification: 'Use addEventListener and click events.',
    example: 'button.addEventListener("click", () => alert("Hi"));',
    exercise: 'Attach a click event to a button that shows an alert.',
    project: 'Create a to-do list with add and remove actions.'
  },
  {
    id: 10,
    title: 'DOM Manipulation',
    category: 'JavaScript',
    free: false,
    heading: 'Updating the page dynamically',
    explanation: 'The DOM lets JavaScript change text, styles, and structure on the page.',
    codeIdentification: 'Use document.querySelector and textContent.',
    example: 'document.querySelector("h1").textContent = "New title";',
    exercise: 'Change the text inside a paragraph using JavaScript.',
    project: 'Build a small quiz that updates the score after each answer.'
  },
  {
    id: 11,
    title: 'CSS Flexbox',
    category: 'CSS',
    free: false,
    heading: 'Layout made simple',
    explanation: 'Flexbox makes it easy to align and distribute elements in rows or columns.',
    codeIdentification: 'Use display: flex and justify-content.',
    example: '.row { display: flex; justify-content: space-between; }',
    exercise: 'Create a row of three boxes using flexbox.',
    project: 'Design a feature section with three cards aligned neatly.'
  },
  {
    id: 12,
    title: 'CSS Grid',
    category: 'CSS',
    free: false,
    heading: 'Creating powerful layouts',
    explanation: 'Grid layouts make it simple to place content into rows and columns.',
    codeIdentification: 'Use display: grid and grid-template-columns.',
    example: '.grid { display: grid; grid-template-columns: 1fr 1fr; }',
    exercise: 'Create a two-column grid with two cards.',
    project: 'Build a portfolio layout with a sidebar and main content area.'
  },
  {
    id: 13,
    title: 'JavaScript Arrays',
    category: 'JavaScript',
    free: false,
    heading: 'Grouping related values',
    explanation: 'Arrays store multiple values in one place.',
    codeIdentification: 'Use square brackets and array methods.',
    example: 'const colors = ["red", "green", "blue"];',
    exercise: 'Create an array of three fruits and log it.',
    project: 'Create a color gallery that loops through an array of colors.'
  },
  {
    id: 14,
    title: 'JavaScript Objects',
    category: 'JavaScript',
    free: false,
    heading: 'Representing real-world data',
    explanation: 'Objects group values together under named properties.',
    codeIdentification: 'Use curly braces with key-value pairs.',
    example: 'const student = { name: "Kofi", grade: "A" };',
    exercise: 'Create an object for a book with title and author.',
    project: 'Display a profile card from an object.'
  },
  {
    id: 15,
    title: 'JavaScript Conditions',
    category: 'JavaScript',
    free: false,
    heading: 'Making decisions',
    explanation: 'Conditional statements let your program respond differently based on data.',
    codeIdentification: 'Use if, else if, and else.',
    example: 'if (age >= 18) { console.log("Adult"); }',
    exercise: 'Write a condition that checks whether a user is eligible to vote.',
    project: 'Build a simple age checker app.'
  },
  {
    id: 16,
    title: 'JavaScript Loops',
    category: 'JavaScript',
    free: false,
    heading: 'Repeating actions',
    explanation: 'Loops automate repeated actions without rewriting code.',
    codeIdentification: 'Use for and while loops.',
    example: 'for (let i = 0; i < 3; i++) { console.log(i); }',
    exercise: 'Print the numbers 1 to 5 using a loop.',
    project: 'Create a countdown timer display.'
  },
  {
    id: 17,
    title: 'Forms and Validation',
    category: 'JavaScript',
    free: false,
    heading: 'Checking user input',
    explanation: 'Validation helps ensure data entered by users is correct.',
    codeIdentification: 'Use required and pattern attributes.',
    example: '<input type="email" required />',
    exercise: 'Build a form with an email field and make it required.',
    project: 'Create a sign-up form with validation messages.'
  },
  {
    id: 18,
    title: 'Local Storage',
    category: 'JavaScript',
    free: false,
    heading: 'Saving data in the browser',
    explanation: 'Local storage lets your app remember information across visits.',
    codeIdentification: 'Use localStorage.setItem and getItem.',
    example: 'localStorage.setItem("name", "Kofi");',
    exercise: 'Save a username in local storage.',
    project: 'Create a notes app that remembers saved notes.'
  },
  {
    id: 19,
    title: 'API Basics',
    category: 'JavaScript',
    free: false,
    heading: 'Fetching external data',
    explanation: 'APIs allow your app to request information from other services.',
    codeIdentification: 'Use fetch to request data.',
    example: 'fetch("https://jsonplaceholder.typicode.com/posts")',
    exercise: 'Fetch and log a small API response.',
    project: 'Build a simple weather widget from an API.'
  },
  {
    id: 20,
    title: 'Project: Portfolio Website',
    category: 'Full Stack Basics',
    free: false,
    heading: 'Putting it all together',
    explanation: 'The final project combines HTML, CSS, and JavaScript into a complete personal website.',
    codeIdentification: 'Use semantic HTML, modern CSS, and JavaScript interactions.',
    example: '<header><nav>...</nav></header>',
    exercise: 'Plan the sections of a portfolio page.',
    project: 'Create a polished personal portfolio with a hero section, projects, and contact form.'
  }
];

const unlockedCount = 7;
let unlockedLessons = 7;

const lessonList = document.getElementById('lessonList');
const unlockBtn = document.getElementById('unlockBtn');
const unlockStatus = document.getElementById('unlockStatus');
const progressBar = document.getElementById('progressBar');

function getUnlockedLessonLimit() {
  return unlockedLessons;
}

function renderLessons() {
  lessonList.innerHTML = '';

  lessons.forEach((lesson) => {
    const isUnlocked = lesson.id <= getUnlockedLessonLimit();
    const card = document.createElement('article');
    card.className = `lesson-card ${isUnlocked ? '' : 'locked'}`;
    card.innerHTML = `
      <div class="lesson-meta">${lesson.category} • Lesson ${lesson.id}</div>
      <h3>${lesson.title}</h3>
      <p><strong>${lesson.heading}</strong></p>
      <p>${lesson.explanation}</p>
      <p><span class="lesson-code">Code focus: ${lesson.codeIdentification}</span></p>
      <div class="lesson-example"><strong>Example:</strong><pre>${lesson.example}</pre></div>
      <div class="lesson-exercise"><strong>Exercise:</strong> ${lesson.exercise}</div>
      <div class="lesson-project"><strong>Mini project:</strong> ${lesson.project}</div>
      <p>${isUnlocked ? 'Unlocked' : 'Locked — pay 50 GHS to access this lesson set.'}</p>
    `;
    lessonList.appendChild(card);
  });
}

function updateProgress() {
  const percent = Math.min(100, (getUnlockedLessonLimit() / lessons.length) * 100);
  progressBar.style.width = `${percent}%`;
  unlockStatus.textContent = `You currently have access to lessons 1-${getUnlockedLessonLimit()}.`;
}

unlockBtn.addEventListener('click', () => {
  if (unlockedLessons >= lessons.length) {
    unlockStatus.textContent = 'All lessons are already unlocked.';
    return;
  }

  unlockedLessons = Math.min(lessons.length, unlockedLessons + 10);
  renderLessons();
  updateProgress();
  unlockStatus.textContent = `Payment received. You now have access to lessons 1-${getUnlockedLessonLimit()}.`;
});

renderLessons();
updateProgress();
