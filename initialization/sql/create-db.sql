USE master;
GO

CREATE DATABASE mssqlWrite;
GO

USE mssqlWrite;
GO

-- Create Users table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_guid UNIQUEIDENTIFIER,
    first_name NVARCHAR(255),
    last_name NVARCHAR(255),
    image_url NVARCHAR(255),
    created_at DATETIME
);
GO

-- Create Story table with foreign key constraint
CREATE TABLE stories (
    story_id INT PRIMARY KEY,
    story_guid UNIQUEIDENTIFIER,
    title NVARCHAR(255),
    body_text NVARCHAR(MAX),
    img_url NVARCHAR(255),
    created_at DATETIME,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
GO

-- Insert dummy users
INSERT INTO users (user_id, user_guid, first_name, last_name, image_url, created_at)
VALUES 
    (1, NEWID(), 'John', 'Doe', 'john_doe.jpg', GETDATE()),
    (2, NEWID(), 'Jane', 'Doe', 'jane_doe.jpg', GETDATE()),
    (3, NEWID(), 'Alice', 'Smith', 'alice_smith.jpg', GETDATE());
GO

-- Insert dummy stories
INSERT INTO stories (story_id, story_guid, title, body_text, img_url, created_at, user_id)
VALUES 
    (1, NEWID(), 'My First Story', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'story1.jpg', GETDATE(), 1),
    (2, NEWID(), 'Another Story', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'story2.jpg', GETDATE(), 2),
    (3, NEWID(), 'Exciting Adventure', 'Nulla facilisi. Sed euismod porta erat id commodo.', 'story3.jpg', GETDATE(), 3);
GO