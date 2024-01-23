
# Saraha App




## Introduction
Saraha App is a simple messaging platform developed using Express, Mongoose, Joi, and bcrypt. It allows users to send and receive messages securely.


## Features
- Hashed password storage using bcrypt
- Message sending and receiving
- Logged-in user validation
## Prerequisites

Before running the application, ensure you have the following installed :

- Node.js
- npm (Node Package Manager)
- MongoDB
## Database Models

## User
- Fields:
    - userName: User's username
    - age: User's age
    - email: User's email
    - password: Hashed password using bcrypt
## Message
- Fields:
    - messageText: Text of the message
    - receiverId: ID of the message receiver
    - Passwords are hashed using bcrypt for secure storage.