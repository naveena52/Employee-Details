# Project Documentation: Express.js MongoDB Authentication

## Introduction
This project is an authentication system built using Express.js and MongoDB. It provides APIs for user registration, email verification with OTP, user information update, user login with JWT token generation, and retrieval of user information using the JWT token.

## Technologies Used
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- Nodemailer (for sending OTP)
- Bcrypt.js (for password hashing)
- dotenv (for environment variables)
- JavaScript (implemented)

## API Documentation

### 1. User Registration
- **Endpoint**: http://localhost:5000/register
- **Method**: POST
- **Purpose**: Allows users to register with email and password.
- **Request Body**: [Provide structure of the request body]
- **Response**: ![image](https://github.com/naveena52/express-mongodb/assets/106575001/85bd5ac3-392a-470a-ad12-1269a8ed0b37)
- **Generated OTP**: [Provide information about generated OTP]
- **Exception Handling**:
  - **Existing User**: If any User Try to Register with Existing Email then exception is handled with a message “user with this mail already exists Please Login”.
  - **Password Validation**: If the user tries to register with an unvalidated password, handle the exception with the message "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long".

### 2. Email Verification
- **Endpoint**: http://localhost:5000/validateuser
- **Method**: POST
- **Purpose**: Verifies user's email using OTP sent to their email address.
- **Request Body**: [Provide structure of the request body]
- **Response**: [Provide information about the response]
- **Exceptions Handled**:
  - **Invalid OTP**: If the user is given the wrong OTP, handle the exception with the message “Invalid Otp”.
  - **Email already Verified**: If any user tries to use an already verified OTP, handle the exception with the message "Email already verified".

### 3. User Login
- **Endpoint**: http://localhost:5000/login
- **Method**: POST
- **Purpose**: Allows users to login with email and password.
- **Request Body**: [Provide structure of the request body]
- **Response Body**: [Provide structure of the response body]
- **Response**: [Provide information about the response]
- **Exception Handling**:
  - **Unregistered Email**: If any user tries to login with an unregistered/invalid email, handle the exception with the message “Unregistered Email Please Register”.
  - **Password Validation**: If the user tries to login with the wrong password, handle the exception with the message “invalid password”.

### 4. Update User Information
- **Endpoint**: http://localhost:5000/update-info
- **Method**: PUT
- **Purpose**: Update the User data when the user logs in using JWT token.
- **Request Body**: [Provide structure of the request body]
- **Response Body**: with JWT token
- **Response**: [Provide information about the response]
- **Exception Handling**:
  - **Jwt Token Expiring**: If the user tries to update the user data with an expired JWT token, handle the exception with the message “Token is expired please login again”.
  - **Unvalidated User**: If a User is not verified with OTP and tries to login and update the data, handle the exception with the message “User is not validated”.

### 5. Get User Information
- **Endpoint**: http://localhost:5000/user
- **Method**: GET
- **Purpose**: Retrieves user information using JWT token.
- **Response Body**: with JWT token
- **Response**: [Provide information about the response]

## MongoDB Schema
- **User Schema**: [Provide information about the user schema]
- **Database**: Here can see the data in the database with users like one with validated and another not validated.

## Conclusion
This project provides a basic authentication system with functionalities like user registration, email verification, user information update, user login with JWT token generation, and retrieval of user information using the JWT token.
