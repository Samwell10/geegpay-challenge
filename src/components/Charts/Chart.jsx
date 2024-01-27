import './Chart.css'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useRef } from 'react';
const Graph = ({isdarkmode}) => {
    const chartRef = useRef(null);

    const initialBackgroundColor = 'rgba(52, 202, 165, 0.10)';
    const hoverGradient = 'linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)';
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
        datasets: [
          {
            data: [10000, 20000, 19000, 25000, 30000, 45000, 15000, 25000, 35000,10000, 30000, 25000,10000], // Replace with your actual data
            backgroundColor: initialBackgroundColor,
            borderRadius: 30, 
            barPercentage: 0.9, 
            barThickness: 40,
            hoverBackgroundColor: "#34CAA5",
          },
        ],
    };
    const options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 50000,
            ticks: {
                stepSize: 10000,
                font: {
                    size: 12, // Set font size for x-axis labels
                    color: `${isdarkmode ? "#EBECF2" : '#525252'}`, // Set font color for x-axis labels
                    family:"Plus Jakarta Sans",
                    weight: 600
                },
            },
            grid: {
              // borderDash: [5], // Make the grid lines on the x-axis dotted
            },
          },
          x: {
            grid: {
                display: false, // Remove grid on the Y-axis
            },
            ticks:{
                font: {
                    size: 12, // Set font size for x-axis labels
                    color: `${isdarkmode ? '#EBECF2':'#525252'}`, // Set font color for x-axis labels
                    family:"Plus Jakarta Sans",
                    weight: 600
                },
            }
          },
        },
        plugins: {
            legend: {
              display: false, // Remove legend
            },
          },
      };

    return ( 
        <div className="chart" style={{height: "280px"}}>
            <Bar data={chartData} options={options}/>
        </div>
    );
}
 
export default Graph;