# PersonaPath

A full-stack web application that combines personality assessment tools including MBTI testing, horoscope analysis, and palm reading. Users can create accounts, take personality tests, and receive personalized insights based on multiple personality assessment methodologies.
This project was a colloboration of three members including myself.

## Features

✨ **User Authentication**
- Secure signup and login with JWT-based authentication
- Password encryption using bcrypt
- User profile management

🎯 **Personality Assessments**
- **MBTI Test**: Comprehensive Myers-Briggs Type Indicator assessment
- **Horoscope Reading**: Astrological insights based on birth date
- **Palm Reading**: AI-powered palm reading analysis using Google's Palm API

📊 **Results & Analytics**
- View past assessment results
- Compare multiple personality assessments
- Download or export personality profiles

🎨 **User Experience**
- Responsive design with modern UI
- Intuitive navigation through test flows
- Real-time form validation
- Personalized dashboard

## Tech Stack

### Frontend
- **React** 19.1.1 - UI library
- **React Router** 7.9.5 - Client-side routing
- **Vite** 7.1.7 - Build tool and dev server
- **CSS3** - Styling

### Backend
- **Node.js** with **Express** 4.18.2 - REST API server
- **MongoDB** with **Mongoose** 8.19.3 - NoSQL database
- **JWT** - Authentication and authorization
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Google Palm API** - AI-powered insights

### Development
- **ESLint** - Code linting
- **Nodemon** - Auto-restart during backend development
- **Concurrently** - Run frontend and backend simultaneously
- **Sharp** - Image processing

## Project Structure

```
PersonaPath/
├── src/                          # React frontend
│   ├── components/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Login.jsx            # Login form
│   │   ├── Signup.jsx           # Registration form
│   │   ├── Mbtitest.jsx         # MBTI test component
│   │   ├── HoroscopeForm.jsx    # Horoscope input form
│   │   ├── PalmReading.jsx      # Palm reading component
│   │   ├── MbtiResults.jsx      # MBTI results page
│   │   ├── FinalResults.jsx     # Combined results view
│   │   ├── Oldresults.jsx       # Historical results
│   │   ├── navbar.jsx           # Navigation component
│   │   └── ...
│   ├── services/
│   │   └── mbtiService.js       # MBTI API calls
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # React entry point
│
├── backend/                      # Node.js backend
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── UserResult.js        # Test results schema
│   ├── routes/
│   │   ├── auth.js              # Authentication endpoints
│   │   ├── palm.js              # Palm reading endpoints
│   │   ├── reading.js           # Reading endpoints
│   │   └── results.js           # Results endpoints
│   ├── middleware/
│   │   └── auth.js              # JWT verification middleware
│   ├── services/
│   │   └── palmService.js       # Google Palm API integration
│   ├── config/
│   │   └── jwt.js               # JWT configuration
│   └── server.js                # Express server entry point
│
├── public/                       # Static assets
├── package.json                 # Frontend dependencies
└── vite.config.js               # Vite configuration
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Google Palm API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/virenfern/PersonaPath.git
   cd PersonaPath
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PALM_API_KEY=your_google_palm_api_key
   NODE_ENV=development
   PORT=5000
   ```

## Running the Application

### Development Mode

Run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:5173 (Vite dev server)
- **Backend**: http://localhost:5000 (Express server)

### Production Build

Build the frontend:
```bash
npm run build
```

Start the backend in production:
```bash
cd backend
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Tests & Results
- `GET /api/results` - Get user's test results
- `POST /api/results` - Save new test result
- `GET /api/results/:id` - Get specific result

### Personality Services
- `POST /api/palm/analyze` - Analyze palm reading
- `POST /api/horoscope/generate` - Generate horoscope
- `POST /api/mbti/calculate` - Calculate MBTI results

## Usage

1. **Sign Up**: Create a new account with email and password
2. **Take Tests**: Choose from MBTI, Horoscope, or Palm Reading
3. **View Results**: See your personality assessment results
4. **Compare**: View historical results and track personality insights
5. **Download**: Export your personality profile

## Key Features Explained

### MBTI Assessment
The Myers-Briggs Type Indicator test consists of questions that assess personality preferences across four dimensions to determine one of 16 personality types.

### Horoscope Reading
Based on your birth date and astrological sign, receive personalized insights about your personality traits and compatibility.

### Palm Reading
Uses AI-powered analysis with Google's Palm API to provide insights from palm images or manually entered characteristics.

## Security

- Passwords are hashed using bcrypt with salt rounds
- JWT tokens for secure session management
- CORS protection for cross-origin requests
- Input validation on both frontend and backend
- Protected routes requiring authentication

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Viren Fern** - [GitHub Profile](https://github.com/virenfern)

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Happy exploring your personality with PersonaPath! 🚀**
