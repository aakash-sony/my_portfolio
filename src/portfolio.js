const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/aakash-sony/my_portfolio',
    title: 'My Portfolio',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Akash Soni',
    role: 'Full Stack Java Developer',
    description:
        "Hello! I'm Akash Soni, a dedicated and passionate Full Stack Java Developer. With a strong foundation in both frontend and backend technologies, I thrive on creating seamless and efficient web applications.",
    resume: '/Akash_Soni_resume.pdf',
    social: {
        linkedin: 'https://www.linkedin.com/in/akash-soni-6312aa1a1/',
        github: 'https://github.com/aakash-sony',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Project 1',
        description:
            'This project manages contact list. You can add, delete, update and retrieve the contact. Custom header files have been created and used in this project.',
        stack: ['C Language'],
        sourceCode: 'https://github.com/aakash-sony/phone_directory',
        livePreview: 'https://github.com/aakash-sony/phone_directory',
    },
    {
        name: 'Project 2',
        description:
            'Here I have created a proper authentication page. In this project user can sign up, login, forget password, change password and edit their profile.',
        stack: ['HTML, CSS, JAVASCRIPT'],
        sourceCode: 'https://github.com/aakash-sony/_authentication',
        livePreview: 'https://github.com/aakash-sony/_authentication',
    },
    {
        name: 'Project 3',
        description:
            'This is an authentication based web application. You can maintain your day to day activities using this application. The major features of this application is registration, login, update profile, change password, forget password, add todo date-wise and priority. You can mark the status as done, in progress, on hold, on rejected etc.',
        stack: ['HTML, CSS, JAVASCRIPT'],
        sourceCode: 'https://github.com/aakash-sony/todo_app',
        livePreview: 'https://github.com/aakash-sony/todo_app',
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Java',
    'Oracle',
    'GitHub',

]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'aakashsoni8756@gmail.com',
}

export { header, about, projects, skills, contact }