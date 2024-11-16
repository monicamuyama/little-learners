import React from 'react';
import { 
  Card, CardHeader, CardContent, CardActions, Typography, Button 
} from '@mui/material';

const LearningMaterialsPage = () => {
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
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        padding: '16px',
      }}
    >
      <Card sx={{ width: '90%', maxWidth: '800px', boxShadow: 3, borderRadius: 2 }}>
        <CardHeader
          sx={{
            background: 'linear-gradient(to right, #3b82f6, #6366f1)',
            color: 'white',
            textAlign: 'center',
            padding: '16px',
          }}
          title={<Typography variant="h4" fontWeight="bold">Learning Materials</Typography>}
          subheader={<Typography variant="body2">Manage, organize, and share educational content with your students.</Typography>}
        />
        <CardContent>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="h6" color="primary">My Materials</Typography>
            <Typography variant="body2" color="textSecondary">
              View and manage your uploaded learning materials.
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
            >
              Add New Material
            </Button>
            <div style={{ marginTop: '16px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#e3f2fd' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Title</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Type</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Last Updated</th>
                    <th style={{ textAlign: 'right', padding: '8px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myMaterials.map((material, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>{material.title}</td>
                      <td style={{ padding: '8px' }}>{material.type}</td>
                      <td style={{ padding: '8px' }}>{material.lastUpdated}</td>
                      <td style={{ textAlign: 'right', padding: '8px' }}>
                        <Button variant="outlined" color="primary" size="small" sx={{ marginRight: '8px' }}>Edit</Button>
                        <Button variant="outlined" color="error" size="small">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Typography variant="h6" color="primary">Shared with Me</Typography>
            <Typography variant="body2" color="textSecondary">
              View materials that have been shared with you by other teachers.
            </Typography>
            <div style={{ marginTop: '16px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#e3f2fd' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Title</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Shared By</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Last Updated</th>
                    <th style={{ textAlign: 'right', padding: '8px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sharedMaterials.map((material, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>{material.title}</td>
                      <td style={{ padding: '8px' }}>{material.sharedBy}</td>
                      <td style={{ padding: '8px' }}>{material.lastUpdated}</td>
                      <td style={{ textAlign: 'right', padding: '8px' }}>
                        <Button variant="outlined" color="primary" size="small">View</Button>
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
