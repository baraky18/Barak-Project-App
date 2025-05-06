import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Dashboard from './Dashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);
render(<App />, document.getElementById('root'));
export default App;

//ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
//
//function App() {
//  const [jql, setJql] = useState('');
//  const [statusCounts, setStatusCounts] = useState(null);
//  const [error, setError] = useState(null);
//
//  const handleRun = async () => {
//    setStatusCounts(null);
//    setError(null);
//    try {
//      const result = await invoke('getEpicStatusCounts', { jql });
//      setStatusCounts(result);
//    } catch (err) {
//      console.error('Error fetching data:', err);
//      setError('Failed to load data. Check your JQL.');
//    }
//  };
//
//  const chartData = {
//    labels: [''],
//    datasets: statusCounts
//      ? Object.entries(statusCounts).map(([status, count]) => ({
//          label: status,
//          data: [count],
//          backgroundColor: getColorForStatus(status)
//        }))
//      : []
//  };
//
//  const chartOptions = {
//    indexAxis: 'y',
//    responsive: true,
//    plugins: {
//      legend: { position: 'bottom' }
//    },
//    scales: {
//      x: { stacked: true },
//      y: { stacked: true }
//    }
//  };
//
//  return (
//    <div style={{ padding: 20 }}>
//      <h2>Epic Status Progress</h2>
//
//      <input
//        type="text"
//        value={jql}
//        onChange={(e) => setJql(e.target.value)}
//        placeholder="Enter JQL (e.g. project = MYPROJ)"
//        style={{ width: '100%', padding: 8, marginBottom: 10 }}
//      />
//
//      <button onClick={handleRun}>Run</button>
//
//      {error && <p style={{ color: 'red' }}>{error}</p>}
//
//      {statusCounts && <Bar data={chartData} options={chartOptions} />}
//    </div>
//  );
//}
//
//function getColorForStatus(status) {
//  const colors = {
//    'To Do': '#d32f2f',
//    'In Progress': '#fbc02d',
//    'Done': '#388e3c',
//    'Unknown': '#9e9e9e'
//  };
//  return colors[status] || '#90caf9';
//}

//export default App;
