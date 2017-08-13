const about = {
    head: "I'm a web developer and software engineer from the Greater New York area.",
    detail: "I enjoy building things that provide a tangible difference to the world. When I'm not programming, you'll find me bouldering or producing music."
}

const indexData = {
    developer: {
        title: "Web Dev",
        keywords: [
            "React",
            "Redux",
            "Node.js",
            "MongoDB",
            "Rails"
        ]
    },
    engineer: {
        title: "Engineer",
        keywords: [
            "Unix/Linux",
            "Scikit-learn",
            "TensorFlow",
            "PyTorch",
            "NumPy"
        ]
    }
}

const skills = [
    {
        title: "Front-end Development",
        description: [
            "As a biomedical science major, I had never touched code until my Sophomore year of college. It was then that I began learning front-end development in order to build a social network for my school intended to improve its night life. Although it was built only using raw HTML, JavaScript, CSS, and a shoddy LAMP stack for ther back-end, it gained popularity and inspired me to switch my major to Information Systems.",
            "Over the following years I delved more into development learned auxiliarry frameworks, libraries, and extensions including jQuery,  Sass, and redesigned the site from the ground up. I also learned Objective-C and iOS Development to build a native mobile application for the service. This application called \"NiteSpot\" ended up winning the Mid-Hudson Regional Business Competition and helpmed get a job at IBM my junior year of college.",
            "At work, I helped automate internal processes including my team's node allocation procedure by building a website. This site, which was globally utilized by geographically dispersed members, gave a visual representation of the 1300+ servers and provided a means to lease and request nodes from other users. It made use of a number of 3rd party libraries including Google's graphing one for representing distributional attributes.",
            "Additionally, I have aquired comprehension in the use industry standard frameworks and libraries such as React and Redux which were used to build this very site."
        ],
        keywords: [
            "HTML",
            "JavaScript",
            "CSS",
            "SASS",
            "React",
            "Redux",
            "es2015",
            "JSX"
        ]
    },
    {
        title: "Back-end Development",
        description: [
            "As serving NiteSpot's backend with raw PHP files became difficult to scale, migrating to a mature framework appeared to be the next logical step. Ruby on Rails was highly popular and supported at the time so the service was rebuilt using it. The MVC architecture and ORM technique was intuitive, especially after using Django throughout my undergraduate studies, and allowed for quick prototyping and deployment.",
            "Building mobile applications required a means to communicate with the server using a structured data format. A REST API that generated JSON responses was constructed for the social network.",
            "The service used to help automate my employer's node allocation process was also built on Rails. It communicated with a multitude of servers on the intranet such as our management system to provide functionality such as powering on and off servers without a TCP connection.",
            "Additionally, I have acquired comprehension in the use of industry standard platforms, frameworks, and data stores including Node.js, Express, and MongoDB which were also used to build this site."
        ],
        keywords: [
            "Rails",
            "Node.js",
            "MongoDB",
            "SQL",
            "Ruby",
            "Unix/Linux",
            "MVC"
        ]
    },
    {
        title: "Automated Testing",
        description: [
            "Testing IBM's proprietary distributed file system required me to build both developmental and operational skills. On one hand, programming automated tools to conduct tests in a professional and agile environment grew me as an engineer. On the other, the responsibility of working in dstributed environments taught me invaluable skills in the realms of Unix/Linux and networking.",
            "",
            "",
            ""
        ],
        keywords: [
            "Perl",
            "Unix/Linux",
            "Unit Testing",
            "Integration Testing",
            "Regression"
        ]
    },
    {
        title: "Machine Learning",
        description: [
            "",
            "",
            "",
            ""
        ],
        keywords: [
            "Python",
            "Computer Vision",
            "Natural Language Processing",
            "PyTorch",
            "TensorFlow",
            "NumPy",
            "Scikit-learn"
        ]
    }
]

module.exports = {
    about,
    indexData,
    skills
}
