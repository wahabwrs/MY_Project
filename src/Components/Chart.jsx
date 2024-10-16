import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ postCount = 0, commentCount = 0, userCount = 0, todoCount = 0 }) => {
  // Chart data and configuration
  const data = {
    labels: ['Posts', 'Comments', 'Users', 'Todos'],  // Categories for the chart
    datasets: [
      {
        label: 'Statistics',  // Dataset label
        data: [postCount, commentCount, userCount, todoCount],  // Data points
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)', // Posts color
          'rgba(54, 162, 235, 0.5)', // Comments color
          'rgba(255, 206, 86, 0.5)', // Users color
          'rgba(75, 192, 192, 0.5)', // Todos color
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,  // Thickness of bar border
      },
    ],
  };

  const options = {
    responsive: true,  // Ensures the chart adjusts to screen size
    maintainAspectRatio: false,  // Allow the chart to be resized dynamically
    plugins: {
      legend: {
        position: 'top',  // Position of the legend
      },
      title: {
        display: true,
        text: 'Dashboard Statistics',  // Title of the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true,  // Start the Y-axis from 0
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full h-full md:max-w-lg lg:max-w-xl">
      <Bar data={data} options={options} />
    </div>
  );
};

// Prop types validation
Chart.propTypes = {
  postCount: PropTypes.number,
  commentCount: PropTypes.number,
  userCount: PropTypes.number,
  todoCount: PropTypes.number,
};

export default Chart;
