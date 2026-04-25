const subjectsData = [
    // Level 1 - Semester 1
    { code: 'TICT1114', name: 'Essentials of ICT', year: 1, semester: 1 },
    { code: 'TICT1123', name: 'Mathematics for Technology', year: 1, semester: 1 },
    { code: 'TICT1134', name: 'Fundamentals of Computer Programming', year: 1, semester: 1 },
    { code: 'TICT1142', name: 'Fundamentals of Web Technologies', year: 1, semester: 1 },
    { code: 'TICT1152', name: 'Principles of Management', year: 1, semester: 1 },
    { code: 'AUX1113', name: 'English Language I', year: 1, semester: 1 },
    // Level 1 - Semester 2
    { code: 'TICT1212', name: 'Discrete Structures', year: 1, semester: 2 },
    { code: 'TICT1224', name: 'Object Oriented Programming', year: 1, semester: 2 },
    { code: 'TICT1233', name: 'Operating Systems', year: 1, semester: 2 },
    { code: 'TICT1243', name: 'Electronics and Digital Circuit Designs', year: 1, semester: 2 },
    { code: 'TICT1252', name: 'Computational Engineering Drawing', year: 1, semester: 2 },
    { code: 'TICT1261', name: 'IT Law', year: 1, semester: 2 },
    { code: 'AUX1212', name: 'Social Harmony and Active Citizenship', year: 1, semester: 2 },

    // Level 2 - Semester 1
    { code: 'TICT2113', name: 'Data Structures and Algorithms', year: 2, semester: 1 },
    { code: 'TICT2122', name: 'Statistics for Technology', year: 2, semester: 1 },
    { code: 'TICT2134', name: 'Advanced Computer Programming', year: 2, semester: 1 },
    { code: 'TICT2142', name: 'Multimedia Design and Technologies', year: 2, semester: 1 },
    { code: 'TICT2153', name: 'Human Computer Interaction', year: 2, semester: 1 },
    { code: 'AUX2113', name: 'English Language II', year: 2, semester: 1 },
    // Level 2 - Semester 2
    { code: 'TICT2212', name: 'Operational Research', year: 2, semester: 2 },
    { code: 'TICT2222', name: 'Computer Networks', year: 2, semester: 2 },
    { code: 'TICT2233', name: 'Database Management Systems', year: 2, semester: 2 },
    { code: 'TICT2244', name: 'Computer Graphics', year: 2, semester: 2 },
    { code: 'TICT2252', name: 'System Analysis and Design', year: 2, semester: 2 },
    { code: 'TICT2263', name: 'Accounting for Technology', year: 2, semester: 2 },
    { code: 'AUX2212', name: 'Communication and Soft Skills', year: 2, semester: 2 },

    // Level 3 - Semester 1
    { code: 'TICT3113', name: 'Computer Architecture and Organization', year: 3, semester: 1 },
    { code: 'TICT3123', name: 'Advanced Database Management Systems', year: 3, semester: 1 },
    { code: 'TICT3132', name: 'Advanced Web Technologies', year: 3, semester: 1 },
    { code: 'TICT3142', name: 'Social and Professional Issues in IT', year: 3, semester: 1 },
    { code: 'TICT3153', name: 'Software Engineering', year: 3, semester: 1 },
    { code: 'TICT3162', name: 'Information Security', year: 3, semester: 1 },
    { code: 'AUX3112', name: 'Career Guidance', year: 3, semester: 1 },
    // Level 3 - Semester 2
    { code: 'TICT3214', name: 'Advanced Computer Networks and Administration', year: 3, semester: 2 },
    { code: 'TICT3222', name: 'IT Project Management', year: 3, semester: 2 },
    { code: 'TICT3232', name: 'Software Quality Assurance', year: 3, semester: 2 },
    { code: 'TICT3243', name: 'Mobile Computing', year: 3, semester: 2 },
    { code: 'TICT3252', name: 'Green Computing', year: 3, semester: 2 },
    { code: 'TICT3262', name: 'Distributed Systems', year: 3, semester: 2 },
    { code: 'AUX3211', name: 'Research Methodology and Scientific Writing', year: 3, semester: 2 },
    { code: 'AUX3221', name: 'Entrepreneurship for Technology', year: 3, semester: 2 },

    // Level 4 - Semester 1
    { code: 'TICT4116', name: 'Group Research Project', year: 4, semester: 1 },
    { code: 'TICT4126', name: 'Industrial Training', year: 4, semester: 1 },
    // Level 4 - Semester 2
    { code: 'TICT4213', name: 'Data Mining and Data Warehousing', year: 4, semester: 2 },
    { code: 'TICT4223', name: 'Digital Image Processing', year: 4, semester: 2 },
    { code: 'TICT4233', name: 'e-Commerce', year: 4, semester: 2 },
    { code: 'TICT4242', name: 'Mobile Application Development', year: 4, semester: 2 },
    { code: 'TICT4253', name: 'Intelligent Systems', year: 4, semester: 2 },
    { code: 'TICT4262', name: 'Cloud Application Development', year: 4, semester: 2 },
    { code: 'TICT4272', name: 'Applied Bio-informatics', year: 4, semester: 2 }
];

// Mock data for notes
let notesData = JSON.parse(localStorage.getItem('campusNotes')) || [];

// Current state
let currentSubject = null;
let isAdmin = localStorage.getItem('campusNotesAdmin') === 'true';
let isUser = localStorage.getItem('campusNotesUser') === 'true';
let currentUser = localStorage.getItem('campusNotesUserName') || 'Anonymous';

// DOM Elements
const sidebarFilters = document.getElementById('sidebar-filters');
const mainContent = document.getElementById('main-content');
const uploadModal = document.getElementById('upload-modal');
const closeModalBtn = document.getElementById('close-modal');
const uploadForm = document.getElementById('upload-form');
const uploadBtn = document.getElementById('upload-btn');
const subjectSelect = document.getElementById('subject-select');
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// Auth DOM Elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginModal = document.getElementById('login-modal');
const closeLoginModalBtn = document.getElementById('close-login-modal');
const loginForm = document.getElementById('login-form');
const googleSigninBtn = document.getElementById('google-signin-btn');

// Initialize the application
function init() {
    initTheme();
    renderSidebar();
    populateSubjectSelect();
    updateAuthUI();
    renderDashboard();
    setupEventListeners();
    
    // Hide AI Loader after 2 seconds
    setTimeout(() => {
        const loader = document.getElementById('ai-loader');
        if(loader) {
            loader.classList.add('hidden');
        }
    }, 2000);
}

function initTheme() {
    const savedTheme = localStorage.getItem('campusNotesTheme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function updateAuthUI() {
    if (isAdmin || isUser) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'flex';
        logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout (${isAdmin ? 'Admin' : currentUser})`;
    } else {
        loginBtn.style.display = 'flex';
        logoutBtn.style.display = 'none';
    }

    if (isAdmin) {
        uploadBtn.style.display = 'flex';
    } else {
        uploadBtn.style.display = 'none';
    }
}

function setupEventListeners() {
    uploadBtn.addEventListener('click', () => {
        uploadModal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
        uploadModal.classList.remove('active');
    });

    uploadModal.addEventListener('click', (e) => {
        if (e.target === uploadModal) {
            uploadModal.classList.remove('active');
        }
    });

    uploadForm.addEventListener('submit', handleUpload);

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('campusNotesTheme', isLight ? 'light' : 'dark');
        themeToggleBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Mobile Menu Listeners
    if (mobileMenuToggle && sidebar && sidebarOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
        
        sidebarFilters.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && e.target.closest('.sidebar-item')) {
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('active');
            }
        });
    }

    // Auth Listeners
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });

    closeLoginModalBtn.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const pwd = document.getElementById('login-password').value;

        // Admin Login Check
        if (email === 'vihangaimakulakav@gmail.com' && pwd === '@Welcome19971v') {
            isAdmin = true;
            isUser = true;
            currentUser = 'Admin';
            localStorage.setItem('campusNotesAdmin', 'true');
            localStorage.setItem('campusNotesUser', 'true');
            localStorage.setItem('campusNotesUserName', 'Admin');
            loginModal.classList.remove('active');
            loginForm.reset();
            updateAuthUI();

            if (currentSubject) {
                renderSubjectView(subjectsData.find(s => s.code === currentSubject));
            } else {
                renderDashboard();
            }
        } else if (email && pwd) {
            // Normal User Login
            isAdmin = false;
            isUser = true;
            currentUser = email.split('@')[0]; // Use part before @ as username
            localStorage.setItem('campusNotesUser', 'true');
            localStorage.setItem('campusNotesUserName', currentUser);
            localStorage.removeItem('campusNotesAdmin');
            loginModal.classList.remove('active');
            loginForm.reset();
            updateAuthUI();

            if (currentSubject) {
                renderSubjectView(subjectsData.find(s => s.code === currentSubject));
            } else {
                renderDashboard();
            }
        }
    });

    googleSigninBtn.addEventListener('click', () => {
        // Mock Google Sign-In
        isAdmin = false;
        isUser = true;
        currentUser = 'Student User';
        localStorage.setItem('campusNotesUser', 'true');
        localStorage.setItem('campusNotesUserName', currentUser);
        localStorage.removeItem('campusNotesAdmin');
        loginModal.classList.remove('active');
        updateAuthUI();

        if (currentSubject) {
            renderSubjectView(subjectsData.find(s => s.code === currentSubject));
        } else {
            renderDashboard();
        }
    });

    logoutBtn.addEventListener('click', () => {
        isAdmin = false;
        isUser = false;
        currentUser = 'Anonymous';
        localStorage.removeItem('campusNotesAdmin');
        localStorage.removeItem('campusNotesUser');
        localStorage.removeItem('campusNotesUserName');
        updateAuthUI();

        // Re-render current view
        if (currentSubject) {
            renderSubjectView(subjectsData.find(s => s.code === currentSubject));
        } else {
            renderDashboard();
        }
    });
}

function populateSubjectSelect() {
    subjectsData.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub.code;
        option.textContent = `${sub.code} - ${sub.name}`;
        subjectSelect.appendChild(option);
    });
}

function renderSidebar() {
    const years = [1, 2, 3, 4];
    sidebarFilters.innerHTML = '';

    // All subjects button
    const allBtn = document.createElement('div');
    allBtn.className = 'sidebar-item active';
    allBtn.innerHTML = '<i class="fas fa-border-all"></i> All Subjects';
    allBtn.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        allBtn.classList.add('active');
        currentSubject = null;
        renderDashboard();
    });
    sidebarFilters.appendChild(allBtn);

    years.forEach(year => {
        const yearHeader = document.createElement('div');
        yearHeader.className = 'sidebar-header';
        yearHeader.textContent = `Level ${year}`;
        sidebarFilters.appendChild(yearHeader);

        const semesters = [1, 2];
        semesters.forEach(semester => {
            const semSubjects = subjectsData.filter(s => s.year === year && s.semester === semester);
            if (semSubjects.length === 0) return;

            const semHeader = document.createElement('div');
            semHeader.className = 'sidebar-header';
            semHeader.style.fontSize = '10px';
            semHeader.style.color = 'var(--primary-color)';
            semHeader.style.margin = '12px 0 4px 24px';
            semHeader.textContent = `Semester ${semester}`;
            sidebarFilters.appendChild(semHeader);

            semSubjects.forEach(sub => {
                const item = document.createElement('div');
                item.className = 'sidebar-item';
                item.style.paddingLeft = '24px'; // Indent under semester
                item.innerHTML = `<i class="fas fa-book" style="margin-right: 8px;"></i> <span class="subject-code">${sub.code}</span>`;
                item.title = sub.name;

                item.addEventListener('click', () => {
                    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                    currentSubject = sub.code;
                    renderSubjectView(sub);
                });
                sidebarFilters.appendChild(item);
            });
        });
    });
}

function renderDashboard() {
    mainContent.innerHTML = `
        <div class="header-section">
            <h1 class="page-title">Dashboard</h1>
            <p class="page-subtitle">Welcome back! Browse through your campus notes or upload a new one.</p>
        </div>
        
        <div class="stats-container">
            <div class="stat-card glass-card">
                <i class="fas fa-file-alt stat-icon"></i>
                <div class="stat-info">
                    <h3>Total Notes</h3>
                    <p>${notesData.length}</p>
                </div>
            </div>
            <div class="stat-card glass-card">
                <i class="fas fa-book-open stat-icon"></i>
                <div class="stat-info">
                    <h3>Subjects Covered</h3>
                    <p>${new Set(notesData.map(n => n.subjectCode)).size}</p>
                </div>
            </div>
        </div>

        <div class="recent-notes">
            <h2 class="section-title">Recent Uploads</h2>
            ${notesData.length === 0 ? '<p class="empty-state">No notes uploaded yet. Be the first to share!</p>' : ''}
            <div class="notes-grid">
                ${notesData.slice().reverse().slice(0, 6).map((note, index) => createNoteCard(note, index)).join('')}
            </div>
        </div>
    `;
    attachNoteEventListeners();
}

function renderSubjectView(subject) {
    const subjectNotes = notesData.filter(n => n.subjectCode === subject.code);

    mainContent.innerHTML = `
        <div class="header-section">
            <h1 class="page-title">${subject.code}</h1>
            <p class="page-subtitle">${subject.name}</p>
        </div>
        
        <div class="subject-notes">
            <h2 class="section-title">Notes & Resources</h2>
            ${subjectNotes.length === 0 ? `
                <div class="empty-state-card glass-card">
                    <i class="fas fa-folder-open empty-icon"></i>
                    <p>No notes available for this subject yet.</p>
                    ${isAdmin ? `
                    <button class="btn primary-btn" onclick="document.getElementById('upload-modal').classList.add('active')">
                        Upload Note
                    </button>
                    ` : ''}
                </div>
            ` : ''}
            <div class="notes-grid">
                ${subjectNotes.slice().reverse().map((note, index) => createNoteCard(note, index)).join('')}
            </div>
        </div>
    `;
    attachNoteEventListeners();
}

function createNoteCard(note, index = 0) {
    const subject = subjectsData.find(s => s.code === note.subjectCode);
    const delay = index * 0.1;
    return `
        <div class="note-card glass-card" data-id="${note.id}" style="animation-delay: ${delay}s">
            <div class="note-header">
                <div class="note-type"><i class="fas fa-file-pdf"></i></div>
                <div class="note-meta">
                    <span class="note-subject">${note.subjectCode}</span>
                    <span class="note-date">${new Date(note.date).toLocaleDateString()}</span>
                </div>
            </div>
            <h3 class="note-title">${note.title}</h3>
            <p class="note-desc">${note.description}</p>
            <div class="note-footer">
                <span class="note-author"><i class="fas fa-user-circle"></i> ${note.author}</span>
                <div class="note-actions">
                    ${isAdmin ? `<button class="icon-btn delete-btn" title="Delete Note" data-id="${note.id}" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);"><i class="fas fa-trash"></i></button>` : ''}
                    <button class="icon-btn download-btn" title="Download" data-id="${note.id}"><i class="fas fa-download"></i></button>
                    <button class="icon-btn comment-btn" title="Comments" data-id="${note.id}"><i class="fas fa-comment"></i> ${note.comments ? note.comments.length : 0}</button>
                </div>
            </div>
            <div class="comments-section" id="comments-${note.id}" style="display: none;">
                <div class="comments-list">
                    ${(note.comments || []).map(c => `
                        <div class="comment-item">
                            <strong>${c.author}</strong>: ${c.text}
                        </div>
                    `).join('')}
                </div>
                <form class="comment-form" data-id="${note.id}">
                    <input type="text" placeholder="Add a comment..." required>
                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    `;
}

function attachNoteEventListeners() {
    // Delete Note functionality
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (confirm('Are you sure you want to delete this note?')) {
                const id = e.currentTarget.getAttribute('data-id');
                notesData = notesData.filter(n => n.id != id);
                saveData();

                // Re-render
                if (currentSubject) {
                    renderSubjectView(subjectsData.find(s => s.code === currentSubject));
                } else {
                    renderDashboard();
                }
            }
        });
    });

    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const note = notesData.find(n => n.id == id);
            if (note) {
                // Mock download
                const blob = new Blob([note.fileData || 'Mock file content'], { type: 'application/octet-stream' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = note.fileName || 'note.pdf';
                a.click();
                URL.revokeObjectURL(url);
            }
        });
    });

    document.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const commentsSection = document.getElementById(`comments-${id}`);
            if (commentsSection.style.display === 'none') {
                commentsSection.style.display = 'block';
            } else {
                commentsSection.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = form.getAttribute('data-id');
            const input = form.querySelector('input');
            const text = input.value.trim();

            if (text) {
                if (!isUser) {
                    alert('Please sign in to add a comment.');
                    loginModal.classList.add('active');
                    return;
                }
                const noteIndex = notesData.findIndex(n => n.id == id);
                if (noteIndex !== -1) {
                    if (!notesData[noteIndex].comments) {
                        notesData[noteIndex].comments = [];
                    }
                    notesData[noteIndex].comments.push({
                        author: currentUser,
                        text: text,
                        date: new Date().toISOString()
                    });

                    saveData();
                    // Re-render
                    if (currentSubject) {
                        renderSubjectView(subjectsData.find(s => s.code === currentSubject));
                    } else {
                        renderDashboard();
                    }

                    // Keep comments open
                    setTimeout(() => {
                        document.getElementById(`comments-${id}`).style.display = 'block';
                    }, 50);
                }
            }
        });
    });
}

function handleUpload(e) {
    e.preventDefault();

    const title = document.getElementById('note-title').value;
    const subjectCode = document.getElementById('subject-select').value;
    const description = document.getElementById('note-desc').value;
    const author = document.getElementById('note-author').value;
    const fileInput = document.getElementById('note-file');

    if (!title || !subjectCode || !fileInput.files.length) return;

    const file = fileInput.files[0];

    // In a real app we'd upload the file. Here we just store mock metadata
    const newNote = {
        id: Date.now(),
        title,
        subjectCode,
        description,
        author: author || 'Anonymous',
        fileName: file.name,
        date: new Date().toISOString(),
        comments: []
    };

    notesData.push(newNote);
    saveData();

    // Reset and close
    uploadForm.reset();
    uploadModal.classList.remove('active');

    // Refresh view
    if (currentSubject === subjectCode) {
        renderSubjectView(subjectsData.find(s => s.code === subjectCode));
    } else if (!currentSubject) {
        renderDashboard();
    }
}

function saveData() {
    localStorage.setItem('campusNotes', JSON.stringify(notesData));
}

// Start app
document.addEventListener('DOMContentLoaded', init);
