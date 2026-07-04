import lessons from './lessons.js';

function qs(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function getUnlocked() {
  return Number(localStorage.getItem('unlockedLessons') || 7);
}

function setUnlocked(n) {
  localStorage.setItem('unlockedLessons', String(n));
}

function updateProgressUI() {
  const el = document.getElementById('unlockStatus');
  const bar = document.getElementById('progressBar');
  if (!el) return;
  const unlocked = getUnlocked();
  el.textContent = `You currently have access to lessons 1-${unlocked}.`;
  if (bar) bar.style.width = Math.min(100, (unlocked / lessons.length) * 100) + '%';
}

// Index page: nothing heavy, update progress
export function initIndex() {
  updateProgressUI();
}

// Subject page: list lessons for a subject
export function initSubject() {
  updateProgressUI();
  const subject = qs('subject') || 'HTML';
  document.getElementById('subjectName').textContent = subject;
  const list = document.getElementById('subjectLessons');
  const unlocked = getUnlocked();
  const filtered = lessons.filter((l) => l.category === subject);
  list.innerHTML = '';
  filtered.forEach((lesson) => {
    const li = document.createElement('article');
    li.className = 'lesson-card ' + (lesson.id <= unlocked ? '' : 'locked');
    li.innerHTML = `
      <div class="lesson-meta">${lesson.category} • Lesson ${lesson.id}</div>
      <h3>${lesson.title}</h3>
      <p><strong>${lesson.heading}</strong></p>
      <p>${lesson.explanation}</p>
      <p>Tags: ${lesson.tags.join(', ')}</p>
      <div class="lesson-example"><strong>Preview:</strong><pre>${lesson.example}</pre></div>
      <div class="lesson-exercise"><strong>Exercise:</strong> ${lesson.exercise}</div>
      <div style="margin-top:.6rem">
        <a class="btn btn-primary" href="lesson.html?id=${lesson.id}">Open lesson</a>
      </div>
    `;
    list.appendChild(li);
  });
}

// Lesson page: show structured lesson
export function initLesson() {
  updateProgressUI();
  const id = Number(qs('id')) || 1;
  const lesson = lessons.find((l) => l.id === id);
  const unlocked = getUnlocked();
  if (!lesson) {
    document.getElementById('lessonRoot').innerHTML = '<p>Lesson not found.</p>';
    return;
  }
  if (lesson.id > unlocked) {
    document.getElementById('lessonRoot').innerHTML = `
      <div class="lesson-card locked">
        <h3>Locked</h3>
        <p>This lesson is locked. Please visit Pricing to unlock more lessons.</p>
        <a class="btn btn-primary" href="pricing.html">Unlock</a>
      </div>
    `;
    return;
  }

  const root = document.getElementById('lessonRoot');
  root.innerHTML = `
    <article class="lesson-card">
      <div class="lesson-meta">${lesson.category} • Lesson ${lesson.id}</div>
      <h2>${lesson.title}</h2>
      <h3>${lesson.heading}</h3>
      <p>${lesson.explanation}</p>
      <p class="lesson-code">Tags: ${lesson.tags.join(', ')}</p>
      <section>
        <h4>Preview</h4>
        <div id="previewWrap"><iframe id="previewFrame" style="width:100%;height:160px;border:1px solid var(--border);"></iframe></div>
        <button class="btn btn-secondary" id="runExample">Run Example</button>
      </section>
      <section>
        <h4>Examples to try</h4>
        <pre>${lesson.example}</pre>
        <p><button class="btn btn-primary" id="openExercise">Do Exercise / Submit</button></p>
      </section>
    </article>
  `;

  document.getElementById('runExample').addEventListener('click', () => {
    const iframe = document.getElementById('previewFrame');
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`${lesson.example}`);
    doc.close();
  });

  document.getElementById('openExercise').addEventListener('click', () => {
    window.location.href = `submit.html?lesson=${lesson.id}`;
  });
}

// Submit page: ask questions before submit and navigate to next
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
      <div class="lesson-meta">Submit • Lesson ${lesson.id}</div>
      <h2>Submit: ${lesson.title}</h2>
      <p>Please answer a few quick questions before submitting your exercise.</p>
      <form id="submissionForm">
        <label>Short answer (what did you build?)</label>
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
    subs.push({ lesson: lesson.id, answer, done, at: new Date().toISOString() });
    localStorage.setItem('submissions', JSON.stringify(subs));
    document.getElementById('submitMsg').textContent = 'Submission saved locally.';
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    const next = lessons.find((l) => l.id > lesson.id);
    if (next) {
      window.location.href = `lesson.html?id=${next.id}`;
    } else {
      window.location.href = 'index.html';
    }
  });
}

// Small helper to initialize depending on page
window.appInit = function () {
  const page = document.body.dataset.page;
  if (page === 'index') initIndex();
  if (page === 'subject') initSubject();
  if (page === 'lesson') initLesson();
  if (page === 'submit') initSubmit();
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.appInit) window.appInit();
});
