const teacherCards = document.querySelectorAll('.teacher-card');
const teacherProfile = document.querySelector('.teacher-profile');
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileInfo = document.getElementById('profile-info');
const profileBatch = document.getElementById('batch')
const closeButton = document.querySelector('.close-button');

let currentTeacher = null;

function showProfile(index) {
    currentTeacher = index;
    const teacherData = teachers[index];

    profileImage.src = teacherData.image;
    profileName.textContent = teacherData.name;
    profileInfo.textContent = teacherData.info;
    profileBatch.textContent = teacherData.batch;
    teacherProfile.style.display = 'block';
}

function closeProfile() {
    teacherProfile.style.display = 'none';
    currentTeacher = null;
}

closeButton.addEventListener('click', closeProfile);

const teachers = [
    {
        name: 'Miss Hina',
        image: 'teacher-1.jpg',
        info: 'Web and App developer Teacher',
        batch: "Batch : One"
    },
    {
        name: 'Miss Tayyaba',
        image: 'teacher-2.jpg',
        info: 'Flutter and wordpress development teacher',
        batch: "Batch : Two"

    },
    {
        name: 'Miss Qurat',
        image: 'teacher-3.jpg',
        info: 'Chatbot & AI Teacher',
        batch: "Batch : Three"
    },
    {
        name: 'Sir Muzammil',
        image: 'teacher-4.jpg',
        info: 'Chatbot & AI Teacher',
        batch: "Batch : Three"
    },
    {
        name: 'Sir Usman',
        image: 'teacher-5.avif',
        info: 'Flutter and wordpress development teacher',
        batch: "Batch : Two"
    },
    {
        name: 'Sir Masood',
        image: 'teacher-6.avif',
        info: 'Web and App developer Teacher',
        batch: "Batch : One"
    }
];

// Initialize teacher cards
teacherCards.forEach((card, index) => {
    card.addEventListener('click', () => showProfile(index));
});


// TODO 
let list = document.getElementById("student-section");
let studentName = document.getElementById("student-name");
let rollNo = document.getElementById("RollNo");
let checkbox =document.getElementById("checkBOx");
let addBtn = document.getElementById("add-button");

const allData = (e) => {
    e.preventDefault();
    const studentNameV = studentName.value;
    const rollNoV = rollNo.value;
    localStorage.setItem("student-name",studentNameV);
    localStorage.setItem("RollNo",rollNoV);
    alert("ateendence mark")
    window.location.href="attendence.html"
}
addBtn.addEventListener("click", allData);


