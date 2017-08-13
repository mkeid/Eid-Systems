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
            "Over the following years I delved more into development learned auxiliary frameworks, libraries, and extensions including jQuery,  Sass, and redesigned the site from the ground up. I also learned Objective-C and iOS Development to build a native mobile application for the service. This application called \"NiteSpot\" ended up winning the Mid-Hudson Regional Business Competition and helpmed get a job at IBM my junior year of college.",
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
            "MVC",
            "REST"
        ]
    },
    {
        title: "Automated Testing",
        description: [
            "Testing IBM's proprietary distributed file system required me to build both developmental and operational skills. On one hand, programming automated tools to conduct tests in a professional and agile environment cultivated me as an engineer. On the other, the responsibility of working in dstributed environments taught me invaluable skills in the realms of Unix/Linux and networking.",
            "The automation ranged from checking the consistency of documentation to more concrete software features such as sudo wrapper, a component for allowing non-administrative users to run priveleged commands through abstraction. Auxiliary tools such as a configuration randomizer were made to help ensure greater variation in test environments.",
            "Not only were automated tools built, but as were unit and integration tests to verify the integrity of those tools: testing the test tools. Such methodology is necessary as it is necessary to validate one's assumptions. In this case, the assumption is that the tests are accurate. Authentic tests are required for a stable product.",
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
            "Studying machine learning is fascinating as it entails learning about the underlying principles of cognition. I have been pursuing various topics in machine learning through independent study. My focus has primarily revoled around computer vision and natural language processing using deep learning as an application.",
            "I've reconstructed computer vision experiments from scientific literature including a couple artistic style transfer models and a texture synthesizer. Artistic style transfer is the process of applying a \"style\" from a given artistic work such as Van Gough's \"The Starry Night\" to an arbitrary input input image. The end result is the input image remade as if it were drawn or painted by the individual who made the artistic work. Texture synthesis is another process which entails extracting a high-level texture representation from a given image and non-deterministically generating new images with the same texture.",
            "I've also reconstructed natural language experiments from scientific literature such as a machine translation model and a chat bot agent. The translator is based on a stacked recurrent neural network model which is comprised of encoder and networks. Once trained, it can translate a given sequence of constituent words into another language. The chat bot works similarily but instead outputs a sequence representing an answer to a given question.",
            "Additionally, I have built a raw neural network from scratch in pure Java to demonstrate my comprehension of the inner workings and intricacies of feed-forward neural networks. The linear algebra and multivariate calculus required to predict and perform backpropagation is entirely done in Java."
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
