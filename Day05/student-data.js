document.addEventListener('DOMContentLoaded', function() {
    const studentList = document.getElementById('studentList');
    const consoleOutput = document.getElementById('consoleOutput');
    const displayStudentsBtn = document.getElementById('displayStudents');
    const clearAddressBtn = document.getElementById('clearAddress');
    const resetDataBtn = document.getElementById('resetData');

    let students = [
        {
            "id": 1,
            "name": "John Doe",
            "age": 20,
            "address": "123 Main St, City, Country",
            "skills": ["JavaScript", "HTML", "CSS", "React"],
            "isLeader": true
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "age": 22,
            "address": "456 Oak Ave, Town, Country",
            "skills": ["Python", "Java", "SQL", "Machine Learning"],
            "isLeader": false
        },
        {
            "id": 3,
            "name": "Mike Johnson",
            "age": 21,
            "address": "789 Pine Rd, Village, Country",
            "skills": ["C++", "Data Structures", "Algorithms", "Git"],
            "isLeader": true
        }
    ];

    displayStudentsBtn.addEventListener('click', function() {
        clearConsole();
        logToConsole("=== Displaying All Students ===");
        students.forEach(student => {
            logToConsole(`Student: ${student.name}`, "student-output");
            logToConsole(`Skills: ${student.skills.join(', ')}`, "skills-output");
            logToConsole(`Address: ${student.address}`, "address-output");
            logToConsole("---");
        });
        updateStudentCards();
    });

    clearAddressBtn.addEventListener('click', function() {
        if (students.length >= 2) {
            students[1].address = null;
            clearConsole();
            logToConsole("=== Address Cleared for Student 2 ===");
            logToConsole(`Student: ${students[1].name}`, "student-output");
            logToConsole(`Address: ${students[1].address}`, "address-output");
            updateStudentCards();
        }
    });

    resetDataBtn.addEventListener('click', function() {
        students = [
            {
                "id": 1,
                "name": "John Doe",
                "age": 20,
                "address": "123 Main St, City, Country",
                "skills": ["JavaScript", "HTML", "CSS", "React"],
                "isLeader": true
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "age": 22,
                "address": "456 Oak Ave, Town, Country",
                "skills": ["Python", "Java", "SQL", "Machine Learning"],
                "isLeader": false
            },
            {
                "id": 3,
                "name": "Mike Johnson",
                "age": 21,
                "address": "789 Pine Rd, Village, Country",
                "skills": ["C++", "Data Structures", "Algorithms", "Git"],
                "isLeader": true
            }
        ];
        clearConsole();
        logToConsole("=== Data Reset ===");
        updateStudentCards();
    });

    function updateStudentCards() {
        studentList.innerHTML = '';
        students.forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            
            const skillsHTML = student.skills.map(skill => 
                `<span class="skill-tag">${skill}</span>`
            ).join('');
            
            const leaderBadge = student.isLeader ? 
                '<div class="leader-badge">Team Leader</div>' : '';
            
            studentCard.innerHTML = `
                <h3>${student.name}</h3>
                <div class="student-info">
                    <strong>ID:</strong> <span>${student.id}</span>
                </div>
                <div class="student-info">
                    <strong>Age:</strong> <span>${student.age}</span>
                </div>
                <div class="student-info">
                    <strong>Address:</strong> <span>${student.address || 'No address'}</span>
                </div>
                <div class="student-info">
                    <strong>Skills:</strong>
                </div>
                <div class="skills-list">
                    ${skillsHTML}
                </div>
                ${leaderBadge}
            `;
            
            studentList.appendChild(studentCard);
        });
    }

    function logToConsole(message, className = '') {
        const outputLine = document.createElement('div');
        outputLine.className = `output-line ${className}`;
        outputLine.textContent = message;
        consoleOutput.appendChild(outputLine);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    function clearConsole() {
        consoleOutput.innerHTML = '';
    }

    updateStudentCards();
}); 