const PostsReducer = () => ([
    {
        title: "Hello World!",
        date: new Date(2017, 8, 14),
        imgSrc: "/images/posts/post1.jpg",
        preview: "This post inaugurates the launch of my personal website and portfolio. I'm pretty happy with how it turned out and content with all the experience I've acquired through the building process. It took me a 4 days to build from scratch using Node, React, and Redux. More is to come in terms of expansion hopefully very soon.",
        content: null
    }
])

module.exports = PostsReducer
