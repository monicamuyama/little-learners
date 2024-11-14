import React, { useState } from 'react';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';

const QuizzesManagement = () => {
  const [quizzes, setQuizzes] = useState([
    { name: 'Math Quiz 1', dueDate: '2023-10-15', numQuestions: 20, avgScore: 85 },
    { name: 'English Essay', dueDate: '2023-10-20', numQuestions: 1, avgScore: 90 },
    { name: 'Science Lab Quiz', dueDate: '2023-10-25', numQuestions: 15, avgScore: 78 },
    { name: 'Reading Comprehension Quiz', dueDate: '2023-10-18', numQuestions: 10, avgScore: 82 },
  ]);

  const [newQuiz, setNewQuiz] = useState({
    name: '',
    dueDate: '',
    numQuestions: 0,
    avgScore: 0,
  });

  const handleQuizAdd = () => {
    if (newQuiz.name.trim() !== '') {
      setQuizzes([...quizzes, newQuiz]);
      setNewQuiz({
        name: '',
        dueDate: '',
        numQuestions: 0,
        avgScore: 0,
      });
    }
  };

  const handleQuizEdit = (index, updates) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[index] = { ...updatedQuizzes[index], ...updates };
    setQuizzes(updatedQuizzes);
  };

  const handleQuizDelete = (index) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes.splice(index, 1);
    setQuizzes(updatedQuizzes);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Quizzes Management</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={newQuiz.name}
            onChange={(e) => setNewQuiz({ ...newQuiz, name: e.target.value })}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Quiz Name"
          />
          <input
            type="date"
            value={newQuiz.dueDate}
            onChange={(e) => setNewQuiz({ ...newQuiz, dueDate: e.target.value })}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={handleQuizAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Quiz</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Due Date</th>
                <th className="px-4 py-2 text-left">Questions</th>
                <th className="px-4 py-2 text-left">Average Score</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{quiz.name}</td>
                  <td className="px-4 py-2">{quiz.dueDate}</td>
                  <td className="px-4 py-2">{quiz.numQuestions}</td>
                  <td className="px-4 py-2">{quiz.avgScore}%</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() =>
                        handleQuizEdit(index, {
                          name: 'Edited Quiz',
                          dueDate: '2023-11-01',
                          numQuestions: 25,
                          avgScore: 88,
                        })
                      }
                      className="text-yellow-500 hover:text-yellow-700 focus:outline-none"
                    >
                      <EditIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleQuizDelete(index)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizzesManagement;