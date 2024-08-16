const header = {
    homepage: 'https://github.com/aakash-sony/my_portfolio',
    title: 'My Portfolio',
}

const about = {
    name: 'Akash Soni',
    role: 'Full Stack Java Developer',
    description:
        "Hello! I'm Akash Soni, a dedicated and passionate Full Stack Java Developer. With a strong foundation in both frontend and backend technologies, I thrive on creating seamless and efficient web applications.",
    resume:
        'https://drive.google.com/file/d/1s2gKQ0FHByMOoXQNCQZ9CpI8OJIUmhkE/view?usp=drive_link',

    social: {
        linkedin: 'https://www.linkedin.com/in/akash-soni-6312aa1a1/',
        github: 'https://github.com/aakash-sony',
    },
}

const projects = [
    {
        name: 'Kanban Board',
        description:
            'Developed a Kanban board using React.js with features to add, search, and move tasks between columns.Implemented task management functionalities and utilized React Hooks for state management along with drag - and - drop capabilities for task organization.',
        stack: ['React JS'],
        sourceCode: 'https://github.com/aakash-sony/Kanban_Board',
        livePreview: 'https://aakash-sony.github.io/Kanban_Board/',
    },
    {
        name: 'Textutil Application',
        description:
            'Developed a Textutil application using React.js. This application enables users to manipulate text by converting it to upper or lower case, removing extra spaces, and copying text. Additionally, it provides functionality to count words and characters, offering a versatile tool for text management.',
        stack: ['React JS'],
        sourceCode: 'https://github.com/aakash-sony/react_project01_TextUtil',
        livePreview: 'https://aakash-sony.github.io/react_project01_TextUtil/',
    },
    {
        name: 'Phone Directory',
        description:
            'This project manages contact list. You can add, delete, update and retrieve the contact. Custom header files have been created and used in this project.',
        stack: ['C Language'],
        sourceCode: 'https://github.com/aakash-sony/phone_directory',
        livePreview: 'https://github.com/aakash-sony/phone_directory',
    },
    {
        name: 'Fully Authentication System',
        description:
            'Here I have created a proper authentication page. In this project user can sign up, login, forget password, change password and edit their profile.',
        stack: ['HTML, CSS, JAVASCRIPT'],
        sourceCode: 'https://github.com/aakash-sony/_authentication',
        livePreview: 'https://github.com/aakash-sony/_authentication',
    },
    {
        name: 'To Do List',
        description:
            'This is an authentication based web application.You can maintain your day to day activities using this application.The major features of this application is registration, login, update profile, change password, forget password, add todo date- wise and priority.You can mark the status as done, in progress, on hold, on rejected etc.',
        stack: ['HTML, CSS, JAVASCRIPT'],
        sourceCode: 'https://github.com/aakash-sony/todo_app',
        livePreview: 'https://github.com/aakash-sony/todo_app',
    },
]

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React Js',
    'Java',
    'Oracle',
    'GitHub',

]

const contact = {
    email: 'aakashsoni8756@gmail.com',
}

export { header, about, projects, skills, contact }