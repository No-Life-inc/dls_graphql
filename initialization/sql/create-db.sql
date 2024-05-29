USE master;
GO

CREATE DATABASE writedb;
GO

USE writedb;
GO

-- Create Users table
CREATE TABLE users(
    user_id INT IDENTITY PRIMARY KEY,
    user_guid UNIQUEIDENTIFIER,
    created_at DATETIME
);
GO

-- Create User Info table
CREATE TABLE user_info (
    user_info_id INT IDENTITY PRIMARY KEY,
    first_name NVARCHAR(255),
    last_name NVARCHAR(255),
    img_url NVARCHAR(255),
    email NVARCHAR(255),
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
GO

-- Create User Deleted table
CREATE TABLE user_deleted(
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
)
GO

-- Create Story table with foreign key constraint
CREATE TABLE stories (
    story_id INT IDENTITY PRIMARY KEY,
    story_guid UNIQUEIDENTIFIER,
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
GO

-- Create Story info table
CREATE TABLE story_info(
    story_info_id INT IDENTITY PRIMARY KEY,
    title NVARCHAR(255),
    body_text NVARCHAR(MAX),
    img_url NVARCHAR(255),
    created_at DATETIME,
    story_id INT,
    FOREIGN KEY (story_id) REFERENCES Stories(story_id) ON DELETE CASCADE
)
GO

-- Create Comment table
CREATE TABLE comments(
    comment_id INT IDENTITY PRIMARY KEY,
    comment_guid UNIQUEIDENTIFIER,
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    story_id INT,
    FOREIGN KEY (story_id) REFERENCES Stories(story_id) ON DELETE CASCADE
)
GO

-- Create Comment Info table
CREATE TABLE comment_info(
    comment_info_id INT IDENTITY PRIMARY KEY,
    body_text NVARCHAR(MAX),
    created_at DATETIME,
    comment_id INT,
    FOREIGN KEY (comment_id) REFERENCES Comments(comment_id) ON DELETE CASCADE
)
GO

-- Create Recation Type table
CREATE TABLE reaction_type(
    reaction_type_id INT IDENTITY PRIMARY KEY,
    reaction_type_name NVARCHAR(255),
    reaction_type_img NVARCHAR(255)
)
GO

-- Create Recation table
CREATE TABLE reactions(
    reaction_id INT IDENTITY PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    story_id INT,
    FOREIGN KEY (story_id) REFERENCES Stories(story_id),
    reaction_type_id INT,
    FOREIGN KEY (reaction_type_id) REFERENCES Reaction_type(reaction_type_id)
)
GO

-- Create Story Reaction table
CREATE TABLE story_reaction(
    story_reaction_id INT IDENTITY PRIMARY KEY,
    story_id INT,
    FOREIGN KEY (story_id) REFERENCES Stories(story_id),
    reaction_id INT,
    FOREIGN KEY (reaction_id) REFERENCES Reactions(reaction_id)
)
GO

-- Create Comment Reaction table
CREATE TABLE comment_reaction(
    comment_reaction_id INT IDENTITY PRIMARY KEY,
    comment_id INT,
    FOREIGN KEY (comment_id) REFERENCES Comments(comment_id),
    reaction_id INT,
    FOREIGN KEY (reaction_id) REFERENCES Reactions(reaction_id)
)
GO

-- Friends table (Join table for the many-to-many relationship between users and their friends)
CREATE TABLE friends (
    friendship_id INT IDENTITY PRIMARY KEY,
    created_at DATETIME,
    user_id INT,
    friend_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (friend_id) REFERENCES Users(user_id),
    UNIQUE(user_id, friend_id) -- Ensures uniqueness of friendships
);
GO

-- Blocked table
CREATE TABLE blocked (
    blocked_id INT IDENTITY PRIMARY KEY,
    created_at DATETIME,
    blocking_user_id INT,
    blocked_user_id INT,
    FOREIGN KEY (blocking_user_id) REFERENCES Users(user_id),
    FOREIGN KEY (blocked_user_id) REFERENCES Users(user_id),
    UNIQUE(blocking_user_id, blocked_user_id) -- Ensures uniqueness of blocked relationships
);
GO

-- Insert dummy data into Users table
INSERT INTO users (user_guid, created_at)
VALUES 
    (NEWID(), GETDATE()),
    (NEWID(), GETDATE()),
    (NEWID(), GETDATE());

-- Insert dummy data into UserInfo table
INSERT INTO user_info (first_name, last_name, img_url, email, created_at, user_id)
VALUES 
    ('John', 'Doe', 'john_doe.jpg', 'john@example.com', GETDATE(), 1),
    ('Jane', 'Doe', 'jane_doe.jpg', 'jane@example.com', GETDATE(), 2),
    ('Alice', 'Smith', 'alice_smith.jpg', 'alice@example.com', GETDATE(), 3);

-- Insert dummy data into UserDeleted table
INSERT INTO user_deleted (created_at, user_id)
VALUES 
    (GETDATE(), 1),
    (GETDATE(), 2);

-- Insert dummy data into Stories table
INSERT INTO stories (story_guid, created_at, user_id)
VALUES 
    (NEWID(), GETDATE(), 1),
    (NEWID(), GETDATE(), 2),
    (NEWID(), GETDATE(), 3);

-- Insert dummy data into StoryInfo table
INSERT INTO story_info (title, body_text, img_url, created_at, story_id)
VALUES 
    ('Story 1', 'Lorem ipsum dolor sit amet.', 'story1.jpg', GETDATE(), 1),
    ('Story 2', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'story2.jpg', GETDATE(), 2),
    ('Story 3', 'Nulla facilisi. Sed euismod porta erat id commodo.', 'story3.jpg', GETDATE(), 3);

-- Insert dummy data into Comments table
INSERT INTO comments (comment_guid, created_at, user_id, story_id)
VALUES 
    (NEWID(), GETDATE(), 1, 1),
    (NEWID(), GETDATE(), 2, 2),
    (NEWID(), GETDATE(), 3, 3);

-- Insert dummy data into CommentInfo table
INSERT INTO comment_info (body_text, created_at, comment_id)
VALUES 
    ('Comment 1', GETDATE(), 1),
    ('Comment 2', GETDATE(), 2),
    ('Comment 3', GETDATE(), 3);

-- Insert dummy data into ReactionType table
INSERT INTO reaction_type (reaction_type_name, reaction_type_img)
VALUES 
    ('Like', 'like.jpg'),
    ('Love', 'love.jpg'),
    ('Haha', 'haha.jpg');

-- Insert dummy data into Reactions table
INSERT INTO reactions (user_id, story_id, reaction_type_id)
VALUES 
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3);

-- Insert dummy data into StoryReaction table
INSERT INTO story_reaction (story_id, reaction_id)
VALUES 
    (1, 1),
    (2, 2),
    (3, 3);

-- Insert dummy data into CommentReaction table
INSERT INTO comment_reaction (comment_id, reaction_id)
VALUES 
    (1, 1),
    (2, 2),
    (3, 3);

-- Insert dummy data into Blocked table
INSERT INTO Blocked (created_at, blocking_user_id, blocked_user_id)
VALUES 
    (GETDATE(), 1, 2),  -- User 1 blocks User 2
    (GETDATE(), 2, 3),  -- User 2 blocks User 3
    (GETDATE(), 3, 1);  -- User 3 blocks User 1

-- Insert dummy data into Friends table
INSERT INTO Friends (created_at, user_id, friend_id)
VALUES 
    (GETDATE(), 1, 2),  -- User 1 is friends with User 2
    (GETDATE(), 1, 3),  -- User 1 is friends with User 3
    (GETDATE(), 2, 3),  -- User 2 is friends with User 3
    (GETDATE(), 3, 1);  -- User 3 is friends with User 1

