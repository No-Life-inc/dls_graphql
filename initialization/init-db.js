// Create a MongoDB collection and insert some post documents
db.stories.insert([
    {
        _id: ObjectId(),
        createdAt: new Date(),
        user: {
            _id: ObjectId(),
            firstName: "Uno",
            lastName: "Testman",
            imgUrl: "user1.jpg",
        },
        storyInfo: {
            title: "Post 1",
            bodyText: "This is the body of post 1.",
            imgUrl: "story1.png",
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
                    imgUrl: "deux.jpg",
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
                    imgUrl: "tres.jpg",
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
            imgUrl: "quatro.jpg",
        },
        storyInfo: {
            title: "Post 2",
            bodyText: "This is the body of post 2.",
            imgUrl: "story2.jpg",
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
                    imgUrl: "cinco.jpg",
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
                    imgUrl: "seis.jpg",
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
            imgUrl: "siete.jpg",
        },
        storyInfo: {
            title: "Post 3",
            bodyText: "This is the body of post 3.",
            imgUrl: "story3.jpg",
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
                    imgUrl: "oche.jpg",
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
                    imgUrl: "nueve.jpg",
                },
                reactionType: "Wow"
            }
        ]
    }
]);
