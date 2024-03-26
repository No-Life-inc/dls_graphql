// Create a MongoDB collection and insert some post documents
db.stories.insert([
    {
        _id: ObjectId(),
        createdAt: new Date(),
        user: {
            _id: ObjectId(),
            firstName: "Uno",
            lastName: "Testman",
            imgUrl: "https://example.com/image1.jpg",
        },
        storyInfo: {
            title: "Post 1",
            bodyText: "This is the body of post 1.",
            imgUrl: "https://example.com/image1.jpg",
            createdAt: new Date(),
        },
        comments: [
            {
                _id: ObjectId(),
                createdAt: new Date(),
                user: {
                    _id: ObjectId(),
                    firstName: "Deux",
                    lastName: "Testman",
                    imgUrl: "https://example.com/image2.jpg",
                },
                commentInfo: {
                    bodyText: "This is a comment.",
                    createdAt: new Date(),
                }
            }
        ],
        reactions: [
            {
                _id: ObjectId(),
                user: {
                    _id: ObjectId(),
                    firstName: "Tres",
                    lastName: "Testerino",
                    imgUrl: "https://example.com/image3.jpg",
                },
                reactionType: "Like"
            }
        ]
    },
    {
        _id: ObjectId(),
        createdAt: new Date(),
        user: {
            _id: ObjectId(),
            firstName: "Quatro",
            lastName: "Testman",
            imgUrl: "https://example.com/image4.jpg",
        },
        storyInfo: {
            title: "Post 2",
            bodyText: "This is the body of post 2.",
            imgUrl: "https://example.com/image2.jpg",
            createdAt: new Date(),
        },
        comments: [
            {
                _id: ObjectId(),
                createdAt: new Date(),
                user: {
                    _id: ObjectId(),
                    firstName: "Cinco",
                    lastName: "Testman",
                    imgUrl: "https://example.com/image5.jpg",
                },
                commentInfo: {
                    bodyText: "This is another comment.",
                    createdAt: new Date(),
                }
            }
        ],
        reactions: [
            {
                _id: ObjectId(),
                user: {
                    _id: ObjectId(),
                    firstName: "Seis",
                    lastName: "Testerino",
                    imgUrl: "https://example.com/image6.jpg",
                },
                reactionType: "Love"
            }
        ]
    },
    {
        _id: ObjectId(),
        createdAt: new Date(),
        user: {
            _id: ObjectId(),
            firstName: "Siete",
            lastName: "Testman",
            imgUrl: "https://example.com/image7.jpg",
        },
        storyInfo: {
            title: "Post 3",
            bodyText: "This is the body of post 3.",
            imgUrl: "https://example.com/image3.jpg",
            createdAt: new Date(),
        },
        comments: [
            {
                _id: ObjectId(),
                createdAt: new Date(),
                user: {
                    userId: "8",
                    firstName: "Ocho",
                    lastName: "Testman",
                    imgUrl: "https://example.com/image8.jpg",
                },
                commentInfo: {
                    bodyText: "This is yet another comment.",
                    createdAt: new Date(),
                }
            }
        ],
        reactions: [
            {
                _id: ObjectId(),
                user: {
                    _id: ObjectId(),
                    firstName: "Nueve",
                    lastName: "Testerino",
                    imgUrl: "https://example.com/image9.jpg",
                },
                reactionType: "Wow"
            }
        ]
    }
]);
