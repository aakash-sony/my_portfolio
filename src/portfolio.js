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
        'https://drive.google.com/file/d/1o8N1Urnx8CdZ9kuiB09OiSKwbkC3B9mT/view',

    social: {
        linkedin: 'https://www.linkedin.com/in/akash-soni-6312aa1a1/',
        github: 'https://github.com/aakash-sony',
    },
}

const projects = [
    {
        name: 'Social Media Login Application',
        description:
            'Developed a comprehensive social media login application using React.js and Firebase. This project features a seamless authentication process, allowing users to log in using multiple methods, including email/password, Google, Facebook, Twitter, and GitHub.',
        stack: ['React JS, Firebase'],
        sourceCode: 'https://github.com/aakash-sony/React-Practice/tree/social_media_login',
        livePreview: 'https://github.com/aakash-sony/React-Practice/tree/social_media_login',
    },
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
        name: 'Book Store Management',
        description:
            'Developed a web-based bookstore management application using Servlets and JSP. Features include user and admin authentication, user registration, and book management capabilities for admins (add, view, update, delete books). Users can browse and purchase books, with session management for login/logout. ',
        stack: ['Servlet, JSP'],
        sourceCode: 'https://github.com/aakash-sony/Book-store/tree/master',
        livePreview: 'https://github.com/aakash-sony/Book-store/tree/master',
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
]

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React Js',
    'Core Java',
    'Advance Java',
    'Spring Core',
    'Spring Boot',
    'Oracle',
    'GitHub',

]

const contact = {
    email: 'aakashsoni8756@gmail.com',
}

export { header, about, projects, skills, contact }