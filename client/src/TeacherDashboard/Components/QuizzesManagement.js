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
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '16px',
      }}
    >
      <div style={{ width: '90%', maxWidth: '800px', background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
          Quizzes Management
        </h2>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={newQuiz.name}
            onChange={(e) => setNewQuiz({ ...newQuiz, name: e.target.value })}
            placeholder="Quiz Name"
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
          <input
            type="date"
            value={newQuiz.dueDate}
            onChange={(e) => setNewQuiz({ ...newQuiz, dueDate: e.target.value })}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
          <button
            onClick={handleQuizAdd}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '10px 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <PlusIcon style={{ height: '18px', width: '18px' }} />
            Add Quiz
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #ddd' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #ddd' }}>Due Date</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #ddd' }}>Questions</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #ddd' }}>Average Score</th>
                <th style={{ textAlign: 'right', padding: '12px', borderBottom: '1px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>{quiz.name}</td>
                  <td style={{ padding: '12px' }}>{quiz.dueDate}</td>
                  <td style={{ padding: '12px' }}>{quiz.numQuestions}</td>
                  <td style={{ padding: '12px' }}>{quiz.avgScore}%</td>
                  <td style={{ textAlign: 'right', padding: '12px', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() =>
                        handleQuizEdit(index, {
                          name: 'Edited Quiz',
                          dueDate: '2023-11-01',
                          numQuestions: 25,
                          avgScore: 88,
                        })
                      }
                      style={{ color: '#fbbf24', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      <EditIcon style={{ height: '18px', width: '18px' }} />
                    </button>
                    <button
                      onClick={() => handleQuizDelete(index)}
                      style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      <TrashIcon style={{ height: '18px', width: '18px' }} />
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
