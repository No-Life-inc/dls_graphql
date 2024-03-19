// Create a MongoDB collection and insert some post documents
db.stories.insert([
    {
        _id: ObjectId(),
        title: "Post 1",
        body_text: "This is the body of post 1.",
        img_url: "https://example.com/image1.jpg",
        created_at: new Date(),
        user: {
            _id: ObjectId(),
            first_name: "Uno",
            last_name: "Testman",
            img_url: "https://example.com/image1.jpg",        
        }
    },
    {
        _id: ObjectId(),
        title: "Post 2",
        body_text: "This is the body of post 2.",
        img_url: "https://example.com/image2.jpg",
        created_at: new Date(),
        user: {
            _id: ObjectId(),
            first_name: "Deux",
            last_name: "Terstman",
            img_url: "https://example.com/image1.jpg",        
        }
    },
    {
        _id: ObjectId(),
        title: "Post 3",
        body_text: "This is the body of post 3.",
        img_url: "https://example.com/image3.jpg",
        created_at: new Date(),
        user: {
            _id: ObjectId(),
            first_name: "Tres",
            last_name: "Testerino",
            img_url: "https://example.com/image1.jpg",        
        }
    }
]);

