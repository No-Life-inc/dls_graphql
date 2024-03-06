USE master;
GO

CREATE DATABASE mssqlWrite;
GO

USE mssqlWrite;
GO

-- Create Users table
CREATE TABLE users (
    user_id INT IDENTITY PRIMARY KEY,
    user_guid UNIQUEIDENTIFIER,
    first_name NVARCHAR(255),
    last_name NVARCHAR(255),
    image_url NVARCHAR(255),
    created_at DATETIME
);
GO

-- Create Story table with foreign key constraint
CREATE TABLE stories (
    story_id INT IDENTITY PRIMARY KEY,
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
INSERT INTO users (user_guid, first_name, last_name, image_url, created_at)
VALUES 
    (NEWID(), 'John', 'Doe', 'john_doe.jpg', GETDATE()),
    (NEWID(), 'Jane', 'Doe', 'jane_doe.jpg', GETDATE()),
    (NEWID(), 'Alice', 'Smith', 'alice_smith.jpg', GETDATE());
GO

-- Insert dummy stories
INSERT INTO stories (story_guid, title, body_text, img_url, created_at, user_id)
VALUES 
    (NEWID(), 'My First Story', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'story1.jpg', GETDATE(), 1),
    (NEWID(), 'Another Story', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'story2.jpg', GETDATE(), 2),
    (NEWID(), 'Exciting Adventure', 'Nulla facilisi. Sed euismod porta erat id commodo.', 'story3.jpg', GETDATE(), 3);
GO