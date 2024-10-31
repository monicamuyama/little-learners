import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Book, 
  Video, 
  CheckCircle 
} from 'lucide-react';

const LessonSchedule = () => {
  const [schedule, setSchedule] = useState([
    {
      day: 'Monday',
      lessons: [
        { 
          time: '10:00 AM', 
          subject: 'Mathematics', 
          teacher: 'Ms. Thompson', 
          type: 'Live Class',
          duration: '45 min',
          status: 'Upcoming'
        },
        { 
          time: '2:00 PM', 
          subject: 'Science Exploration', 
          teacher: 'Mr. Rodriguez', 
          type: 'Pre-recorded',
          duration: '30 min',
          status: 'Available'
        }
      ]
    },
    {
      day: 'Tuesday',
      lessons: [
        { 
          time: '9:30 AM', 
          subject: 'Reading Adventures', 
          teacher: 'Ms. Chen', 
          type: 'Live Class',
          duration: '45 min',
          status: 'Upcoming'
        },
        { 
          time: '3:00 PM', 
          subject: 'Art Workshop', 
          teacher: 'Mr. Garcia', 
          type: 'Interactive',
          duration: '60 min',
          status: 'Available'
        }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 flex items-center">
            <Calendar className="mr-3" /> My Lesson Schedule
          </h1>
          <p className="text-gray-600 mt-2">Discover your upcoming learning adventures!</p>
        </header>

        <div className="space-y-6">
          {schedule.map((daySchedule, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                {daySchedule.day}
              </h2>

              <div className="space-y-4">
                {daySchedule.lessons.map((lesson, lessonIndex) => (
                  <div 
                    key={lessonIndex} 
                    className="flex items-center bg-gray-100 p-4 rounded-lg"
                  >
                    <div className="flex-grow">
                      <div className="flex items-center mb-2">
                        <Book className="mr-2 text-green-500" />
                        <h3 className="font-bold text-lg">{lesson.subject}</h3>
                      </div>
                      
                      <div className="flex items-center text-gray-600 space-x-4">
                        <div className="flex items-center">
                          <Clock className="mr-1 w-4 h-4" />
                          <span>{lesson.time} | {lesson.duration}</span>
                        </div>
                        
                        <div className="flex items-center">
                          {lesson.type === 'Live Class' ? (
                            <Video className="mr-1 w-4 h-4 text-red-500" />
                          ) : (
                            <CheckCircle className="mr-1 w-4 h-4 text-blue-500" />
                          )}
                          <span>{lesson.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-1">
                        Instructor: {lesson.teacher}
                      </p>
                    </div>

                    <button 
                      className={`px-4 py-2 rounded-md ${
                        lesson.status === 'Upcoming' 
                          ? 'bg-blue-500 text-white hover:bg-blue-600' 
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      {lesson.status === 'Upcoming' ? 'Join Lesson' : 'Start Lesson'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonSchedule;