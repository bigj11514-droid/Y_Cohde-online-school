import lessons from './lessons.js';

const FREE_BLOCK = 6;
const PAYMENT_AMOUNT = 50;

function qs(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function getUnlockedBySubject() {
  try {
    return JSON.parse(localStorage.getItem('unlockedBySubject') || '{}');
  } catch {
    return {};
  }
}

function getUnlockedCount(subject) {
  const state = getUnlockedBySubject();
  return Number(state[subject] || FREE_BLOCK);
}

function setUnlockedCount(subject, count) {
  const state = getUnlockedBySubject();
  state[subject] = count;
  localStorage.setItem('unlockedBySubject', JSON.stringify(state));
}

function getSubjectLessons(subject) {
  return lessons.filter((lesson) => lesson.category === subject).sort((a, b) => a.order - b.order);
}

function canAccessLesson(lesson) {
  return lesson.order <= getUnlockedCount(lesson.category);
}

function updateProgressUI() {
  const el = document.getElementById('unlockStatus');
  const bar = document.getElementById('progressBar');
  if (!el) return;
  const text = `The first ${FREE_BLOCK} lessons in each course are free. Every next ${FREE_BLOCK} lessons cost ${PAYMENT_AMOUNT} GHS.`;
  el.textContent = text;
  if (bar) bar.style.width = '60%';
}

function removeModal() {
  const modal = document.getElementById('payModal');
  if (modal) modal.remove();
}

function showInterestPrompt(subject, onPaid) {
  removeModal();
  const modal = document.createElement('div');
  modal.id = 'payModal';
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-card">
      <h3>Do you enjoy this course so far?</h3>
      <p>We use your answer to support your learning journey.</p>
      <div class="modal-actions">
        <button class="btn btn-primary" id="likeYes">Yes</button>
        <button class="btn btn-secondary" id="likeNo">No</button>
      </div>
      <div id="paymentPanel" class="payment-panel"></div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('likeYes').addEventListener('click', () => {
    document.getElementById('paymentPanel').innerHTML = `
      <p>Great! You can continue with the next set of lessons for ${PAYMENT_AMOUNT} GHS.</p>
      <form id="payForm">
        <label>Mobile money number</label>
        <input id="phone" type="tel" placeholder="024xxxxxxx" required />
        <label>Reference</label>
        <input id="reference" type="text" placeholder="YCOHDE-${Date.now()}" required />
        <button class="btn btn-primary" style="margin-top:.8rem" type="submit">Pay ${PAYMENT_AMOUNT} GHS</button>
      </form>
    `;
    document.getElementById('payForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value.trim();
      const reference = document.getElementById('reference').value.trim();
      const payments = JSON.parse(localStorage.getItem('payments') || '[]');
      payments.push({ subject, phone, reference, amount: PAYMENT_AMOUNT, status: 'pending', at: new Date().toISOString() });
      localStorage.setItem('payments', JSON.stringify(payments));
      const nextCount = Math.min(getUnlockedCount(subject) + FREE_BLOCK, getSubjectLessons(subject).length);
      setUnlockedCount(subject, nextCount);
      removeModal();
      if (onPaid) onPaid();
    });
  });

  document.getElementById('likeNo').addEventListener('click', () => {
    document.getElementById('paymentPanel').innerHTML = '<p>Thank you for your feedback. We will keep the lessons beginner-friendly.</p>';
    setTimeout(removeModal, 1200);
  });
}

export function initIndex() {
  updateProgressUI();
  const button = document.getElementById('unlockBtn');
  if (button) {
    button.addEventListener('click', () => showInterestPrompt('HTML', () => window.location.href = 'subject.html?subject=HTML'));
  }
}

export function initSubject() {
  updateProgressUI();
  const subject = qs('subject') || 'HTML';
  document.getElementById('subjectName').textContent = subject;
  const list = document.getElementById('subjectLessons');
  const lessonsForSubject = getSubjectLessons(subject);
  const unlocked = getUnlockedCount(subject);
  list.innerHTML = '';

  lessonsForSubject.forEach((lesson) => {
    const isUnlocked = lesson.order <= unlocked;
    const card = document.createElement('article');
    card.className = 'lesson-card ' + (isUnlocked ? '' : 'locked');
    card.innerHTML = `
      <div class="lesson-meta">${lesson.category} • Lesson ${lesson.order}</div>
      <h3>${lesson.title}</h3>
      <p><strong>${lesson.topic}</strong></p>
      <p>${lesson.explanation}</p>
      <p class="lesson-code">Tags: ${lesson.tags.join(', ')}</p>
      <div class="lesson-example"><strong>Examples:</strong><pre>${lesson.example}</pre></div>
      <div class="lesson-exercise"><strong>Exercise:</strong> ${lesson.exercise}</div>
      <div class="lesson-project"><strong>Practical:</strong> ${lesson.practical}</div>
      <div class="lesson-project"><strong>Boilerplate:</strong><pre>${lesson.boilerplate}</pre></div>
      <div style="margin-top:.6rem">
        ${isUnlocked ? `<a class="btn btn-primary" href="lesson.html?id=${lesson.id}">Open lesson</a>` : `<button class="btn btn-secondary unlock-btn" data-subject="${subject}">Continue for ${PAYMENT_AMOUNT} GHS</button>`}
      </div>
    `;
    list.appendChild(card);
  });

  list.querySelectorAll('.unlock-btn').forEach((button) => {
    button.addEventListener('click', () => showInterestPrompt(subject, () => window.location.reload()));
  });
}

export function initLesson() {
  updateProgressUI();
  const id = Number(qs('id')) || 1;
  const lesson = lessons.find((l) => l.id === id);
  if (!lesson) {
    document.getElementById('lessonRoot').innerHTML = '<p>Lesson not found.</p>';
    return;
  }

  if (!canAccessLesson(lesson)) {
    document.getElementById('lessonRoot').innerHTML = `
      <div class="lesson-card locked">
        <h3>Locked</h3>
        <p>This lesson is locked. Please answer the question below before paying ${PAYMENT_AMOUNT} GHS to continue.</p>
        <button class="btn btn-primary" id="openPay">Continue</button>
      </div>
    `;
    document.getElementById('openPay').addEventListener('click', () => showInterestPrompt(lesson.category, () => window.location.reload()));
    return;
  }

  const root = document.getElementById('lessonRoot');
  root.innerHTML = `
    <article class="lesson-card">
      <div class="lesson-meta">${lesson.category} • Lesson ${lesson.order}</div>
      <h2>${lesson.title}</h2>
      <h3>${lesson.topic}</h3>
      <p>${lesson.explanation}</p>
      <p class="lesson-code">Tags: ${lesson.tags.join(', ')}</p>
      <section>
        <h4>Examples</h4>
        <pre>${lesson.example}</pre>
      </section>
      <section>
        <h4>Code boilerplate</h4>
        <pre>${lesson.boilerplate}</pre>
      </section>
      <section>
        <h4>Exercise</h4>
        <p>${lesson.exercise}</p>
      </section>
      <section>
        <h4>Practical</h4>
        <p>${lesson.practical}</p>
      </section>
      <div style="margin-top:.8rem; display:flex; gap: .75rem; flex-wrap:wrap;">
        <button class="btn btn-secondary" id="runExample">Preview example</button>
        <button class="btn btn-primary" id="openExercise">Submit and mark</button>
      </div>
    </article>
  `;

  document.getElementById('runExample').addEventListener('click', () => {
    const preview = document.createElement('div');
    preview.className = 'lesson-card';
    preview.innerHTML = `<pre>${lesson.example}</pre>`;
    document.getElementById('lessonRoot').appendChild(preview);
  });

  document.getElementById('openExercise').addEventListener('click', () => {
    window.location.href = `submit.html?lesson=${lesson.id}`;
  });
}

export function initSubmit() {
  updateProgressUI();
  const id = Number(qs('lesson')) || 1;
  const lesson = lessons.find((l) => l.id === id);
  if (!lesson) {
    document.getElementById('submitRoot').innerHTML = '<p>Lesson not found.</p>';
    return;
  }

  const root = document.getElementById('submitRoot');
  root.innerHTML = `
    <article class="lesson-card">
      <div class="lesson-meta">Submit • ${lesson.category}</div>
      <h2>Submit and mark: ${lesson.title}</h2>
      <p>Answer the short questions below and submit your exercise.</p>
      <form id="submissionForm">
        <label>What did you build?</label>
        <textarea id="answer" rows="4" style="width:100%"></textarea>
        <label style="display:block;margin-top:.5rem"><input type="checkbox" id="done"/> I completed the exercise</label>
        <div style="margin-top:.6rem">
          <button class="btn btn-primary" type="submit">Submit</button>
          <button class="btn btn-secondary" type="button" id="nextBtn">Next lesson</button>
        </div>
      </form>
      <div id="submitMsg" style="margin-top:.6rem;color:var(--muted)"></div>
    </article>
  `;

  document.getElementById('submissionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = document.getElementById('answer').value.trim();
    const done = document.getElementById('done').checked;
    const subs = JSON.parse(localStorage.getItem('submissions') || '[]');
    subs.push({ lesson: lesson.id, subject: lesson.category, answer, done, at: new Date().toISOString() });
    localStorage.setItem('submissions', JSON.stringify(subs));

    const completed = subs.filter((item) => item.subject === lesson.category).length;
    if (completed % FREE_BLOCK === 0 && completed < getSubjectLessons(lesson.category).length) {
      showInterestPrompt(lesson.category, () => window.location.href = `lesson.html?id=${lesson.id + 1}`);
    } else {
      document.getElementById('submitMsg').textContent = 'Submission saved locally. Keep learning!';
    }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    const next = lessons.find((item) => item.id > lesson.id && item.category === lesson.category);
    if (next) {
      window.location.href = `lesson.html?id=${next.id}`;
    } else {
      window.location.href = 'index.html';
    }
  });
}

function renderAuthPage() {
  const root = document.getElementById('authRoot');
  if (!root) return;
  root.innerHTML = `
    <form id="loginForm">
      <label>Email</label>
      <input id="loginEmail" type="email" required />
      <label>Password</label>
      <input id="loginPassword" type="password" required />
      <button class="btn btn-primary" style="margin-top:.8rem" type="submit">Login</button>
    </form>
  `;

  document.getElementById('showLogin').addEventListener('click', () => renderAuthPage());
  document.getElementById('showRegister').addEventListener('click', () => renderRegisterPage());

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((entry) => entry.email === email && entry.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = 'index.html';
    } else {
      root.innerHTML += '<p class="lesson-code">Invalid login details.</p>';
    }
  });
}

function renderRegisterPage() {
  const root = document.getElementById('authRoot');
  if (!root) return;
  root.innerHTML = `
    <form id="registerForm">
      <label>Name</label>
      <input id="regName" required />
      <label>Email</label>
      <input id="regEmail" type="email" required />
      <label>Password</label>
      <input id="regPassword" type="password" required />
      <label>Role</label>
      <select id="regRole">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button class="btn btn-primary" style="margin-top:.8rem" type="submit">Register</button>
    </form>
  `;

  document.getElementById('showLogin').addEventListener('click', () => renderAuthPage());
  document.getElementById('showRegister').addEventListener('click', () => renderRegisterPage());

  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      name: document.getElementById('regName').value.trim(),
      email: document.getElementById('regEmail').value.trim(),
      password: document.getElementById('regPassword').value,
      role: document.getElementById('regRole').value
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    window.location.href = newUser.role === 'teacher' ? 'teacher.html' : 'index.html';
  });
}

function renderTeacherDashboard() {
  const root = document.getElementById('teacherRoot');
  if (!root) return;
  const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
  if (!submissions.length) {
    root.innerHTML = '<p>No submissions yet.</p>';
    return;
  }
  root.innerHTML = submissions.map((submission) => `
    <article class="lesson-card" style="margin-top:.75rem;">
      <h3>${submission.subject}</h3>
      <p><strong>Lesson:</strong> ${submission.lesson}</p>
      <p><strong>Answer:</strong> ${submission.answer || 'No answer provided'}</p>
      <p><strong>Status:</strong> ${submission.done ? 'Completed' : 'Pending'}</p>
      <button class="btn btn-primary" data-mark="${submission.lesson}">Mark as reviewed</button>
    </article>
  `).join('');

  root.querySelectorAll('[data-mark]').forEach((button) => {
    button.addEventListener('click', () => {
      const mark = button.getAttribute('data-mark');
      const current = JSON.parse(localStorage.getItem('submissions') || '[]');
      const updated = current.map((item) => (item.lesson === Number(mark) ? { ...item, marked: true } : item));
      localStorage.setItem('submissions', JSON.stringify(updated));
      renderTeacherDashboard();
    });
  });
}

window.appInit = function () {
  const page = document.body.dataset.page;
  if (page === 'index') initIndex();
  if (page === 'subject') initSubject();
  if (page === 'lesson') initLesson();
  if (page === 'submit') initSubmit();
  if (page === 'auth') {
    document.getElementById('showLogin').addEventListener('click', () => renderAuthPage());
    document.getElementById('showRegister').addEventListener('click', () => renderRegisterPage());
    renderAuthPage();
  }
  if (page === 'teacher') renderTeacherDashboard();
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.appInit) window.appInit();
});
