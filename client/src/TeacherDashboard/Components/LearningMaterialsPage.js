import React from 'react';
import { 
  Card, CardHeader, CardContent, CardActions, Typography, Button 
} from '@mui/material';  // Importing Material UI components

const LearningMaterialsPage = () => {
  // Sample data
  const myMaterials = [
    { title: 'Introduction to Algebra', type: 'PDF', lastUpdated: '2023-04-15' },
    { title: 'Calculus Concepts', type: 'Video', lastUpdated: '2023-06-01' },
    { title: 'English Literature Overview', type: 'Document', lastUpdated: '2023-02-28' },
  ];

  const sharedMaterials = [
    { title: 'Statistics Fundamentals', sharedBy: 'Jane Smith', lastUpdated: '2023-07-10' },
    { title: 'Art History Timeline', sharedBy: 'Michael Johnson', lastUpdated: '2023-09-22' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50 p-8">
      <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <CardHeader
          sx={{
            background: 'linear-gradient(to right, #3b82f6, #6366f1)',
            color: 'white',
            textAlign: 'center'
          }}
          title={<Typography variant="h4" fontWeight="bold">Learning Materials</Typography>}
          subheader={<Typography variant="body2">Manage, organize, and share educational content with your students.</Typography>}
        />
        <CardContent>
          <div className="mb-8">
            <Typography variant="h6" color="primary">My Materials</Typography>
            <Typography variant="body2" color="textSecondary">View and manage your uploaded learning materials.</Typography>
            <Button sx={{ mt: 2, backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'green.700' } }}>
              Add New Material
            </Button>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full table-auto text-gray-700">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Type</th>
                    <th className="px-6 py-3 text-left">Last Updated</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myMaterials.map((material, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{material.title}</td>
                      <td className="px-6 py-4">{material.type}</td>
                      <td className="px-6 py-4">{material.lastUpdated}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end space-x-4">
                          <Button variant="outlined" size="small" color="primary">
                            Edit
                          </Button>
                          <Button variant="outlined" size="small" color="error">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Typography variant="h6" color="primary">Shared with Me</Typography>
            <Typography variant="body2" color="textSecondary">View materials that have been shared with you by other teachers.</Typography>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full table-auto text-gray-700">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Shared By</th>
                    <th className="px-6 py-3 text-left">Last Updated</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sharedMaterials.map((material, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{material.title}</td>
                      <td className="px-6 py-4">{material.sharedBy}</td>
                      <td className="px-6 py-4">{material.lastUpdated}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="outlined" size="small" color="primary">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningMaterialsPage;
