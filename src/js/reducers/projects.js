let projects  = [
    {
        title: "Feed-Forward Style Transfer",
        type: "Computer Vision",
        imgSrc: "/images/projects/feed-forward-style-transfer.jpg",
        url: "https://github.com/mohamedkeid/Feed-Forward-Style-Transfer",
        forIndex: true
    },
    {
        title: "Neural Machine Translation",
        type: "NLP",
        imgSrc: "/images/projects/neural-machine-translation.jpg",
        url: "https://github.com/mohamedkeid/Neural-Machine-Translation",
        forIndex: true
    },
    {
        title: "Neural Network From Scratch",
        type: "Deep Learning",
        imgSrc: "/images/projects/neural-network-from-scratch.jpg",
        url: "https://github.com/mohamedkeid/Neural-Network-For-Digit-Prediction",
        forIndex: true
    },
    {
        title: "Texture Synthesis",
        type: "Computer Vision",
        imgSrc: "/images/projects/texture-synthesis.jpg",
        url: "https://github.com/mohamedkeid/Texture-Synthesis",
        forIndex: false
    },
    {
        title: "Style Transfer Algorithm",
        type: "Computer Vision",
        imgSrc: "/images/projects/style-transfer-algorithm.jpg",
        url: "https://github.com/mohamedkeid/Style-Transfer-Algorithm",
        forIndex: false
    },
    {
        title: "Eid Systems",
        type: "Web Development",
        imgSrc: "/images/projects/eid-systems.jpg",
        url: "https://github.com/mohamedkeid/Eid-Systems",
        forIndex: false
    },
    {
        title: "NiteSpot",
        type: "Web & Mobile Development",
        imgSrc: "/images/projects/nitespot.jpg",
        url: "https://github.com/mohamedkeid/NiteSpot",
        forIndex: false
    },
    {
        title: "Blew My Mind",
        type: "Graphic Design",
        imgSrc: "/images/projects/blew-my-mind.jpg",
        url: "https://www.behance.net/gallery/55729569/Blew-My-Mind",
        forIndex: false
    },
    {
        title: "City Tripper",
        type: "Illustration",
        imgSrc: "/images/projects/city-tripper.jpg",
        url: "https://www.behance.net/gallery/55729487/City-Tripper",
        forIndex: false
    },
    {
        title: "Beside You",
        type: "Music Production",
        imgSrc: "/images/projects/beside-you.jpg",
        url: "https://soundcloud.com/mokeid/besideyou",
        forIndex: false
    },
    {
        title: "Chrome Spark",
        type: "Music Production",
        imgSrc: "/images/projects/chrome-spark.jpg",
        url: "https://soundcloud.com/mokeid/chromespark",
        forIndex: false
    }
]

const sortByKey = (array, key) => (
    array.sort(function(a, b) {
        const x = a[key]
        const y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
)

projects = sortByKey(projects, "type")
const ProjectsReducer = () => (projects)

module.exports = ProjectsReducer
