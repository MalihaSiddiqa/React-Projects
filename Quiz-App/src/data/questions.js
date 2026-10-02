const questions = [
    {
        question: "Which of these is a valid IPv4 address?",
        choices: ["10.256.0.1", "192.168.1", "172.16.254.1", "10.0.0.0.1"],
        answer: "172.16.254.1"
    },
    {
        question: "When rendering a list with map(), what should each item have?",
        choices: ["A unique key prop", "An id attribute", "A className", "A ref"],
        answer: "A unique key prop"
    },
    {
        question: "What does typeof null return in JavaScript?",
        choices: ['"null"', '"undefined"', '"object"', '"number"'],
        answer: '"object"'
    },
    {
        question: "What is a deadlock?",
        choices: [
            "A process using 100% of the CPU",
            "Two or more processes waiting on each other forever",
            "The system running out of memory",
            "The OS killing a process that crashed"
        ],
        answer: "Two or more processes waiting on each other forever"
    },
    {
        question: "Which command creates a new branch and switches to it?",
        choices: ["git branch -d feature", "git merge feature", "git checkout -b feature", "git push feature"],
        answer: "git checkout -b feature"
    },
]

export default questions