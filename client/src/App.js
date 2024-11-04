import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import Dashboard from './parent/Dashboard';
import Math from './parent/Math.js';
import English from './parent/English.js';
import Spanish from './parent/Spanish.js';
import Writing from './parent/Writing.js';
import Literacy from './parent/Literacy.js';
import Music from './parent/Music.js';
import Reading from './parent/Reading.js';
import Science from './parent/Science.js';
import Landing from './landing.js';
import RegistrationForm from './parent/RegistrationForm.js';
import EnrolledLessons from './parent/EnrolledLessons.js';
import Quizzes from './parent/Quizzes.js';
import ChildProgress from './parent/childProgress.js';
import TeacherVideos from './parent/TeacherVideos.js';
import TeacherBooks from './parent/TeacherBooks.js';
import TeacherReviews from './parent/TeacherReviews.js';
import ParentTeacherMessaging from './parent/ParentTeacherMessaging.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} /> {/* Default route rendering Landing component */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/parent/dashboard" element={<Dashboard />} />
      <Route path="/maths" element={<Math />} />
      <Route path="/literacy" element={<Literacy />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="/english" element={<English />} />
      <Route path="/music" element={<Music />} />
      <Route path="/science" element={<Science />} />
      <Route path="/spanish" element={<Spanish />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/RegistrationForm" element={<RegistrationForm />} />
      <Route path="/EnrolledLessons" element={<EnrolledLessons />} />
      <Route path="/Quizzes" element={<Quizzes />} />
      <Route path="/ChildProgress" element={<ChildProgress />} />
      <Route path="/TeacherVideos" element={<TeacherVideos />} />
      <Route path="/TeacherBooks" element={<TeacherBooks />} />
      <Route path="/TeacherReviews" element={<TeacherReviews />} />
      <Route path="/ParentTeacherMessaging" element={<ParentTeacherMessaging />} />





      




    </Routes>
  );
}

export default App;
