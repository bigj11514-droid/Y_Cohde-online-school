const subjectBlueprints = {
  HTML: {
    free: [
      { title: 'Introduction to HTML', topic: 'What HTML is', explanation: 'HTML is the structure of every webpage and uses tags to arrange content.', example: '<h1>Hello</h1>', boilerplate: '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Welcome</h1>\n  </body>\n</html>', exercise: 'Create a page with one heading and one paragraph.', practical: 'Build a simple profile card.' },
      { title: 'HTML Elements', topic: 'Using tags correctly', explanation: 'Elements describe the purpose of text, images, and links.', example: '<p>This is a paragraph.</p>', boilerplate: '<p>Learn with Y_Cohde.</p>', exercise: 'Add an image and a paragraph to a page.', practical: 'Create a school landing page section.' },
      { title: 'Lists and Links', topic: 'Organising content', explanation: 'Lists and links make information easier to follow.', example: '<ul><li>HTML</li><li>CSS</li></ul>', boilerplate: '<a href="#">Visit</a>', exercise: 'Create a list of three hobbies.', practical: 'Make a navigation bar.' },
      { title: 'Forms', topic: 'Collecting student input', explanation: 'Forms allow users to send information back to the website.', example: '<input type="text" placeholder="Name">', boilerplate: '<form><input type="text" /><button>Submit</button></form>', exercise: 'Create a form with a name field and submit button.', practical: 'Build a simple contact form.' },
      { title: 'Images and Media', topic: 'Adding rich content', explanation: 'Images and media make lessons more engaging.', example: '<img src="photo.jpg" alt="A class image">', boilerplate: '<img src="school.jpg" alt="School image">', exercise: 'Add one image to a lesson page.', practical: 'Create a photo gallery card.' },
      { title: 'Semantic HTML', topic: 'Better structure', explanation: 'Semantic tags help both readers and browsers understand page structure.', example: '<header><nav>Menu</nav></header>', boilerplate: '<main><section><h2>Topic</h2></section></main>', exercise: 'Use header, section, and footer in a page.', practical: 'Create a mini lesson page layout.' }
    ],
    paid: [
      { title: 'Tables', topic: 'Showing data clearly', explanation: 'Tables organise information into rows and columns.', example: '<table><tr><th>Name</th></tr></table>', boilerplate: '<table><tr><td>Y_Cohde</td></tr></table>', exercise: 'Create a simple timetable.', practical: 'Build a class schedule table.' },
      { title: 'Audio and Video', topic: 'Multimedia in HTML', explanation: 'HTML supports media players for audio and video.', example: '<video controls></video>', boilerplate: '<audio controls><source src="lesson.mp3"></audio>', exercise: 'Add a video player to a lesson page.', practical: 'Create a discussion page with media.' },
      { title: 'Accessibility', topic: 'Making pages friendly', explanation: 'Accessible pages support more learners and devices.', example: '<img alt="Student coding" src="student.jpg">', boilerplate: '<button aria-label="Next">▶</button>', exercise: 'Add alternative text to all images.', practical: 'Improve a lesson page for accessibility.' },
      { title: 'HTML5 Features', topic: 'Modern HTML tools', explanation: 'HTML5 brings better support for forms, media, and structure.', example: '<progress value="50" max="100"></progress>', boilerplate: '<meter value="7" min="0" max="10"></meter>', exercise: 'Use one HTML5 element in a page.', practical: 'Create a progress card.' },
      { title: 'Embedding Content', topic: 'Using external content', explanation: 'You can bring in maps, videos, and social content.', example: '<iframe src="https://example.com"></iframe>', boilerplate: '<iframe src="https://www.youtube.com/embed/ID"></iframe>', exercise: 'Embed a simple map or video.', practical: 'Create a lesson resource page.' },
      { title: 'Project: HTML Page', topic: 'Putting it together', explanation: 'A complete HTML project combines layout, media, and forms.', example: '<header><h1>School</h1></header>', boilerplate: '<body><header>...</header><main>...</main></body>', exercise: 'Build one full HTML lesson page.', practical: 'Create a mini course homepage.' }
    ]
  },
  CSS: {
    free: [
      { title: 'CSS Basics', topic: 'Styling with CSS', explanation: 'CSS changes the look of a webpage with colors, fonts, and spacing.', example: 'h1 { color: cyan; }', boilerplate: 'body { font-family: Arial; }', exercise: 'Style one heading in cyan.', practical: 'Create a styled welcome section.' },
      { title: 'Selectors', topic: 'Targeting elements', explanation: 'Selectors choose which HTML elements to style.', example: '.card { background: #eee; }', boilerplate: 'p { line-height: 1.6; }', exercise: 'Style a paragraph and a class.', practical: 'Create a card component.' },
      { title: 'Box Model', topic: 'Padding, border, and margin', explanation: 'The box model controls spacing around elements.', example: '.box { padding: 16px; margin: 10px; }', boilerplate: '.box { border: 1px solid #ccc; }', exercise: 'Add padding and margin to a box.', practical: 'Build a pricing card.' },
      { title: 'Colors and Fonts', topic: 'Visual design', explanation: 'Colors and fonts shape the personality of a page.', example: 'body { color: #222; font-family: sans-serif; }', boilerplate: 'h2 { font-size: 24px; }', exercise: 'Change the page font and colors.', practical: 'Design a simple student dashboard.' },
      { title: 'Flexbox', topic: 'Easy layouts', explanation: 'Flexbox helps place items in rows or columns.', example: '.row { display: flex; gap: 10px; }', boilerplate: '.row { justify-content: space-between; }', exercise: 'Create a horizontal row of three cards.', practical: 'Design a lesson feature row.' },
      { title: 'Responsive Design', topic: 'Working on any screen', explanation: 'Responsive CSS makes pages look good on phones and desktops.', example: '@media (max-width: 700px) { body { font-size: 14px; } }', boilerplate: '@media (max-width: 700px) { .row { flex-direction: column; } }', exercise: 'Make one layout stack on smaller screens.', practical: 'Create a mobile-friendly course page.' }
    ],
    paid: [
      { title: 'Grid Layout', topic: 'Multi-column layouts', explanation: 'CSS Grid allows precise placement of sections.', example: '.grid { display: grid; grid-template-columns: 1fr 1fr; }', boilerplate: '.grid { gap: 16px; }', exercise: 'Create a two-column layout.', practical: 'Build a portfolio layout.' },
      { title: 'Transitions', topic: 'Smooth effects', explanation: 'Transitions create simple animations and feedback.', example: 'button:hover { transition: 0.3s; }', boilerplate: '.btn:hover { transform: scale(1.05); }', exercise: 'Add a hover transition to a button.', practical: 'Create an interactive course card.' },
      { title: 'Variables', topic: 'Reusable CSS values', explanation: 'CSS variables keep colors and spacing consistent.', example: ':root { --accent: cyan; }', boilerplate: 'h1 { color: var(--accent); }', exercise: 'Create one CSS variable and reuse it.', practical: 'Create a theme switcher card.' },
      { title: 'Animations', topic: 'Moving content', explanation: 'Animations add life to pages without being too distracting.', example: '@keyframes slide { from { opacity: 0; } to { opacity: 1; } }', boilerplate: '.card { animation: slide 1s ease; }', exercise: 'Add a simple fade-in animation.', practical: 'Animate a hero banner.' },
      { title: 'Pseudo-classes', topic: 'State-based styling', explanation: 'Pseudo-classes style elements based on state such as hover or focus.', example: 'a:hover { color: blue; }', boilerplate: 'input:focus { outline: 2px solid cyan; }', exercise: 'Style a button on hover and focus.', practical: 'Create a polished form UI.' },
      { title: 'Project: CSS Site', topic: 'Putting it together', explanation: 'A full CSS project combines layout, theme, and responsive styling.', example: '.hero { display: flex; }', boilerplate: '.container { width: 90%; margin: auto; }', exercise: 'Style a complete landing page.', practical: 'Create a school homepage mockup.' }
    ]
  },
  JavaScript: {
    free: [
      { title: 'Variables', topic: 'Storing data', explanation: 'Variables hold values that a program uses and changes.', example: 'let name = "Amina";', boilerplate: 'const age = 18;', exercise: 'Create a name and age variable.', practical: 'Display a greeting message.' },
      { title: 'Functions', topic: 'Reusing code', explanation: 'Functions group code so it can run again when needed.', example: 'function greet() { return "Hello"; }', boilerplate: 'function add(a, b) { return a + b; }', exercise: 'Write a function that returns your favourite color.', practical: 'Create a button that changes text.' },
      { title: 'Conditions', topic: 'Making decisions', explanation: 'If statements make programs react to different situations.', example: 'if (age >= 18) { console.log("Adult"); }', boilerplate: 'if (score > 50) { alert("Pass"); }', exercise: 'Check if a student can vote.', practical: 'Build a simple age checker.' },
      { title: 'Arrays', topic: 'Grouping values', explanation: 'Arrays store multiple items in one place.', example: 'const colors = ["red", "blue"];', boilerplate: 'const subjects = ["HTML", "CSS"];', exercise: 'Create an array of three subjects.', practical: 'Show a list of lessons.' },
      { title: 'Loops', topic: 'Repeating actions', explanation: 'Loops repeat instructions without copying code many times.', example: 'for (let i = 0; i < 3; i++) { console.log(i); }', boilerplate: 'for (let i = 1; i <= 5; i++) { }', exercise: 'Print the numbers 1 to 5.', practical: 'Create a countdown app.' },
      { title: 'Events', topic: 'Responding to user actions', explanation: 'Events let your page react to clicks and typing.', example: 'button.addEventListener("click", () => alert("Hi"));', boilerplate: 'document.querySelector("button").addEventListener("click", () => {});', exercise: 'Add a click event to a button.', practical: 'Create a to-do list button.' }
    ],
    paid: [
      { title: 'Objects', topic: 'Creating real-world data', explanation: 'Objects group related information together.', example: 'const student = { name: "Kofi", grade: "A" };', boilerplate: 'const book = { title: "JS", author: "Ada" };', exercise: 'Create an object for a lesson.', practical: 'Show a student profile card.' },
      { title: 'DOM Manipulation', topic: 'Updating the page', explanation: 'The DOM lets JavaScript change text and content on the page.', example: 'document.querySelector("h1").textContent = "New title";', boilerplate: 'document.querySelector("p").style.color = "cyan";', exercise: 'Change the text inside a paragraph.', practical: 'Build a quiz score updater.' },
      { title: 'Forms and Validation', topic: 'Checking user input', explanation: 'Validation improves the quality of answers and submissions.', example: 'if (email.includes("@")) { }', boilerplate: 'if (input.value === "") { }', exercise: 'Validate a name field.', practical: 'Create a simple sign-up form.' },
      { title: 'Local Storage', topic: 'Saving data', explanation: 'Local storage remembers information in the browser.', example: 'localStorage.setItem("name", "Amina");', boilerplate: 'const saved = localStorage.getItem("name");', exercise: 'Save a username in storage.', practical: 'Create a notes app.' },
      { title: 'Fetch API', topic: 'Working with data', explanation: 'Fetch lets your page request data from online services.', example: 'fetch("https://jsonplaceholder.typicode.com/posts")', boilerplate: 'fetch("https://example.com/data")', exercise: 'Fetch and log one result.', practical: 'Create a simple weather widget.' },
      { title: 'Project: Interactive App', topic: 'Bringing it together', explanation: 'A full interactive app combines HTML, CSS, and JavaScript.', example: 'const app = document.getElementById("app");', boilerplate: 'function render() { }', exercise: 'Plan your course app.', practical: 'Build a mini quiz website.' }
    ]
  },
  Python: {
    free: [
      { title: 'Python Basics', topic: 'First steps', explanation: 'Python is a simple language used for coding, automation, and data work.', example: 'print("Hello")', boilerplate: 'name = "Y_Cohde"\nprint(name)', exercise: 'Print your name using Python.', practical: 'Create a welcome message script.' },
      { title: 'Variables', topic: 'Storing values', explanation: 'Variables hold data that your script uses.', example: 'age = 20', boilerplate: 'city = "Accra"', exercise: 'Create variables for your name and country.', practical: 'Build a small profile program.' },
      { title: 'Input and Output', topic: 'Talking to users', explanation: 'Input collects data and output shows results.', example: 'name = input("Name: ")', boilerplate: 'print("Hello", name)', exercise: 'Ask the user for their name.', practical: 'Create a greeting app.' },
      { title: 'If Statements', topic: 'Making choices', explanation: 'If statements let the program make decisions.', example: 'if age >= 18: print("Adult")', boilerplate: 'if score > 50: print("Pass")', exercise: 'Check if someone is old enough to vote.', practical: 'Create a simple eligibility checker.' },
      { title: 'Loops', topic: 'Repeating work', explanation: 'Loops repeat actions in a clean way.', example: 'for i in range(3): print(i)', boilerplate: 'while count < 5: count += 1', exercise: 'Print the numbers 1 to 5.', practical: 'Build a counting loop program.' },
      { title: 'Functions', topic: 'Organising code', explanation: 'Functions help break programs into smaller steps.', example: 'def greet(): print("Hi")', boilerplate: 'def add(a, b): return a + b', exercise: 'Write a function that returns your favorite color.', practical: 'Build a mini calculator.' }
    ],
    paid: [
      { title: 'Lists and Tuples', topic: 'Holding many values', explanation: 'Lists and tuples organise data collections.', example: 'items = ["book", "pen"]', boilerplate: 'numbers = (1, 2, 3)', exercise: 'Create a list of three subjects.', practical: 'Make a class roster list.' },
      { title: 'Dictionaries', topic: 'Key-value data', explanation: 'Dictionaries store values using names.', example: 'student = {"name": "Kofi"}', boilerplate: 'profile = {"age": 18}', exercise: 'Create a dictionary for a lesson.', practical: 'Build a student profile app.' },
      { title: 'Files', topic: 'Reading and writing', explanation: 'Python can save and read data from files.', example: 'f = open("notes.txt", "w")', boilerplate: 'with open("data.txt") as f: print(f.read())', exercise: 'Write one line into a file.', practical: 'Create a note-saving script.' },
      { title: 'Modules', topic: 'Reusing code libraries', explanation: 'Modules add ready-made tools for common tasks.', example: 'import math', boilerplate: 'import random', exercise: 'Use one built-in module.', practical: 'Create a random number generator.' },
      { title: 'Exceptions', topic: 'Handling errors', explanation: 'Exceptions help programs respond to mistakes gracefully.', example: 'try: print(1/0) except ZeroDivisionError: pass', boilerplate: 'try:\n    value = int(input())\nexcept ValueError:\n    print("Invalid")', exercise: 'Catch an invalid number input.', practical: 'Make a safe calculator.' },
      { title: 'Project: Python App', topic: 'Putting it together', explanation: 'A full Python app combines input, logic, and output.', example: 'def main(): print("Welcome")', boilerplate: 'if __name__ == "__main__": main()', exercise: 'Plan your first Python mini project.', practical: 'Create a daily planner app.' }
    ]
  },
  'ITC Basics': {
    free: [
      { title: 'Computer Basics', topic: 'Understanding hardware', explanation: 'ITC Basics teaches the main parts of a computer and how they work.', example: 'CPU, keyboard, monitor', boilerplate: 'Computer = CPU + Keyboard + Monitor', exercise: 'Name three computer parts.', practical: 'Create a simple computer parts chart.' },
      { title: 'Internet and Browsing', topic: 'Using the web', explanation: 'The internet lets us search, communicate, and learn online.', example: 'Search for school resources', boilerplate: 'Open a browser and visit a learning site', exercise: 'List three websites you can use for learning.', practical: 'Create a learning resources page.' },
      { title: 'Email and Communication', topic: 'Sending messages', explanation: 'Email is a common tool for school and work.', example: 'To: teacher@example.com', boilerplate: 'Subject: Class Reminder', exercise: 'Write a short email to a teacher.', practical: 'Create an email template.' },
      { title: 'Office Tools', topic: 'Word, Excel, and PowerPoint', explanation: 'Office tools help students create documents and slides.', example: 'Create a document in Word', boilerplate: 'Make a slide in PowerPoint', exercise: 'Create a one-slide presentation.', practical: 'Design a simple school project slide.' },
      { title: 'Cyber Safety', topic: 'Staying safe online', explanation: 'Cyber safety protects accounts, passwords, and personal information.', example: 'Use a strong password', boilerplate: 'Never share your password', exercise: 'Write three safe internet habits.', practical: 'Create a cyber safety poster.' },
      { title: 'Troubleshooting', topic: 'Solving common tech issues', explanation: 'Troubleshooting helps students fix small problems calmly.', example: 'Restart the device', boilerplate: 'Check the internet connection', exercise: 'List two ways to fix a slow computer.', practical: 'Create a tech help checklist.' }
    ],
    paid: [
      { title: 'Cloud Storage', topic: 'Saving files online', explanation: 'Cloud storage keeps files safe and accessible anywhere.', example: 'Save work to Google Drive', boilerplate: 'Upload a file to the cloud', exercise: 'Explain why cloud storage is useful.', practical: 'Create a simple cloud folder plan.' },
      { title: 'Digital Files', topic: 'Organising documents', explanation: 'Good file names and folders keep work easier to find.', example: 'math_homework_1.docx', boilerplate: 'Create folders for class, homework, and projects', exercise: 'Rename three files neatly.', practical: 'Build a digital filing system.' },
      { title: 'Online Meetings', topic: 'Virtual learning tools', explanation: 'Video calls help learners join classes online.', example: 'Join a video meeting', boilerplate: 'Turn on camera and microphone', exercise: 'List three online class rules.', practical: 'Create a virtual class checklist.' },
      { title: 'Basic Security', topic: 'Protecting devices', explanation: 'Security habits reduce the risk of scams and data loss.', example: 'Use 2-step verification', boilerplate: 'Update your password regularly', exercise: 'Write one security tip.', practical: 'Create a security reminder card.' },
      { title: 'Tech Careers', topic: 'Exploring opportunities', explanation: 'IT skills can lead to many careers in the modern world.', example: 'Web developer', boilerplate: 'Data analyst', exercise: 'Name two tech careers.', practical: 'Create a career interest poster.' },
      { title: 'Project: Tech Basics', topic: 'Putting it together', explanation: 'A final ITC project combines tools, safety, and communication.', example: 'Build a digital study pack', boilerplate: 'Use a doc, slide, and email together', exercise: 'Plan a mini technology project.', practical: 'Create a full tech basics portfolio page.' }
    ]
  }
};

const lessons = [];
let lessonId = 1;
Object.entries(subjectBlueprints).forEach(([category, data]) => {
  const allLessons = [...data.free, ...data.paid];
  allLessons.forEach((item, index) => {
    lessons.push({
      id: lessonId++,
      category,
      order: index + 1,
      title: item.title,
      topic: item.topic,
      explanation: item.explanation,
      example: item.example,
      boilerplate: item.boilerplate,
      exercise: item.exercise,
      practical: item.practical,
      free: index < data.free.length,
      tags: [category, 'lesson']
    });
  });
});

export default lessons;
