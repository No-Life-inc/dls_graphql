USE master;
GO

CREATE DATABASE mssqlWrite;
GO

USE mssqlWrite;
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
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
GO

-- Create User Deleted table
CREATE TABLE user_deleted(
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)
GO

-- Create Story table with foreign key constraint
CREATE TABLE stories (
    story_id INT IDENTITY PRIMARY KEY,
    story_guid UNIQUEIDENTIFIER,
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
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
    FOREIGN KEY (story_id) REFERENCES Stories(story_id)
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
    FOREIGN KEY (story_id) REFERENCES Stories(story_id)
)
GO

-- Create Comment Info table
CREATE TABLE comment_info(
    comment_info_id INT IDENTITY PRIMARY KEY,
    body_text NVARCHAR(MAX),
    created_at DATETIME,
    comment_id INT,
    FOREIGN KEY (comment_id) REFERENCES Comments(comment_id) 
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

-- Create Friend List table
CREATE TABLE friend_list(
    friend_list_id INT IDENTITY PRIMARY KEY,
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)
GO

-- Create Friend table
CREATE TABLE friends(
    friend_id INT IDENTITY PRIMARY KEY,
    created_at DATETIME,
    friend_list_id INT,
    FOREIGN KEY (friend_list_id) REFERENCES Friend_list(friend_list_id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)
GO

-- Create Blocked List table
CREATE TABLE blocked_list(
    blocked_list_id INT IDENTITY PRIMARY KEY,
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)
GO

-- Create Blocked table
CREATE TABLE blocked(
    blocked_id INT IDENTITY PRIMARY KEY,
    created_at DATETIME,
    blocked_list_id INT,
    FOREIGN KEY (blocked_list_id) REFERENCES Blocked_list(blocked_list_id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)
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

-- Insert dummy data into FriendList table
INSERT INTO friend_list (created_at, user_id)
VALUES 
    (GETDATE(), 1),
    (GETDATE(), 2);

-- Insert dummy data into Friends table
INSERT INTO friends (created_at, friend_list_id, user_id)
VALUES 
    (GETDATE(), 1, 2),
    (GETDATE(), 1, 3),
    (GETDATE(), 2, 1),
    (GETDATE(), 2, 3);

-- Insert dummy data into BlockedList table
INSERT INTO blocked_list (created_at, user_id)
VALUES 
    (GETDATE(), 1),
    (GETDATE(), 2);

-- Insert dummy data into Blocked table
INSERT INTO blocked (created_at, blocked_list_id, user_id)
VALUES 
    (GETDATE(), 1, 2),
    (GETDATE(), 2, 1);
