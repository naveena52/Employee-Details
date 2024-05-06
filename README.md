Project Documentation : 
Express.js MongoDB Authentication
Introduction:
This project is an authentication system built using Express.js and MongoDB. It provides APIs for 
user registration, email verification with OTP, user information update, user login with JWT 
token generation, and retrieval of user information using the JWT token.
Technologies Used:
• Express.js
• MongoDB
• JSON Web Tokens (JWT)
• Nodemailer (for sending OTP)
• Bcrypt.js (for password hashing)
• dotenv (for environment variables)
• JavaScript (implemented)
API Documentation:
1. User Registration :
Endpoint : http://localhost:5000/register
Method : POST
Purpose : Allows users to register with email and password.
Request Body:
Response:
![image](https://github.com/naveena52/express-mongodb/assets/106575001/85bd5ac3-392a-470a-ad12-1269a8ed0b37)
Generated OTP :
Exception Handling:
Case-1. Existing User : If any User Try to Register with Existing Email then exception is handled 
with a message “user with this mail already exists Please Login”
Case-2.PassWordValidation :
• Password must contain at least one uppercase letter
• one lowercase letter
• one number
• one special character and be at least 8 characters long'
 If the user try to register with unvalidated password then that exception is handled with 
message of “Password must contain at least one uppercase letter, one lowercase letter, one 
number, one special character, and be at least 8 characters long “
2.Email Verification:
 Endpoint: http://localhost:5000/validateuser
 Method: POST
Purpose: Verifies user's email using OTP sent to their email address.
Request Body :
Response :
Exceptions Handled :
Case-1.Invalid OTP : If the user is given wrong opt then exception is handled with a message
“Invalid Otp”
Case -2.Email already Verified : If any user tried to use already verified opt then 
that exception is handled with a message of “Email already verified”
User Login:
Endpoint: http://localhost:5000/login
Method: POST
Purpose: Allows users to login with email and password.
Response Body :
Response :
Exception Handling :
Case-1.Unregistered Email : If any user try to login with unregistered/invalid email then 
that exception is handled with message of “Unregistered Email Please Register”
Case-2.PasswordValidation : If the user try to login with wrong password then that 
exception is handled with message of “invalid password”
Update User Information :
Endpoint: http://localhost:5000/update-info
Method: PUT
Purpose: Update the User data when user login using JWT token.
Response Body : with JWT token 
Response :
Exception Handling :
Case-1.Jwt Token Expiring : If the user try to update the user data with expired jwt token 
then that exception is handled with message of “Token is expired please login again”
Case-2.Unvalidated User : If a User is not verified with opt and tried to login and update the 
data then that exception is handle with message “User is not validate”
Get User Information :
Endpoint : http://localhost:5000/user
Method: GET
Purpose: Retrieves user information using JWT token.
Response Body : with JWT token
Response :
MongoDB Schema:
User Schema:
Data Base : Here can see the data in the database with users like one with validated and 
another not validated
Conclusion: This project provides a basic authentication system with functionalities like user 
registration, email verification, user information update, user login with JWT token generation, 
and retrieval of user information using the JWT token.
