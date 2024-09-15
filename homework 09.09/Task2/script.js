// Функции для работы с localStorage
function setObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key) {
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

// Получаем элементы формы и кнопки
const studentNameInput = document.getElementById('studentName');
const subjectInput = document.getElementById('subject');
const gradeInput = document.getElementById('grade');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const studentListDiv = document.getElementById('studentList');

// Массив для хранения студентов
let students = [];

// Загружаем данные из localStorage при загрузке страницы
const savedStudents = getObject('students');
if (savedStudents) {
    students = savedStudents;
}

// Функция для сохранения данных студента
function saveStudent() {
    const student = {
        name: studentNameInput.value,
        subject: subjectInput.value,
        grade: gradeInput.value
    };

    // Добавляем объект студента в массив
    students.push(student);

    // Сохраняем массив студентов в localStorage
    setObject('students', students);

    // Очищаем поля формы
    studentNameInput.value = '';
    subjectInput.value = '';
    gradeInput.value = '';
}

// Функция для отображения всех студентов
function loadStudents() {
    // Очищаем содержимое studentListDiv
    studentListDiv.innerHTML = '';

    // Извлекаем массив студентов из localStorage
    const loadedStudents = getObject('students');

    // Проверяем есть ли студенты в localStorage
    if (loadedStudents) {
        // Проходимся по каждому студенту и создаем элемент для отображения
        loadedStudents.forEach(student => {
            const studentInfo = document.createElement('p');
            studentInfo.textContent = `Студент: ${student.name}, Предмет: ${student.subject}, Оценка: ${student.grade}`;
            studentListDiv.appendChild(studentInfo);
        });
    } else {
        studentListDiv.innerHTML = '<p>Нет данных о студентах.</p>';
    }
}

// Обработчики событий для кнопок
saveButton.addEventListener('click', saveStudent);
loadButton.addEventListener('click', loadStudents);
