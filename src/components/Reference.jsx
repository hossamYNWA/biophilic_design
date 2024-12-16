import React from 'react';

const SatisfactionIndicator = () => {
  const satisfactionLevels = [
    { presence: 'Very Satisfied', score: 3 },
    { presence: 'Satisfied', score: 2 },
    { presence: 'Dissatisfied', score: 1 },
    { presence: 'Non-existent', score: 0 },
  ];

  const containerStyle = {
    textAlign: 'center',
    margin: '20px',
    opacity: 0.8,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '170px',
    backgroundColor: '#c2ebc2',
    borderRadius: '10px',
    padding: '10px', // Adding some padding for aesthetics
  };

  return (
    <div style={containerStyle}>
      <h5 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Satisfaction Scores</h5>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Presence</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {satisfactionLevels.map((level, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{level.presence}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{level.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SatisfactionIndicator;