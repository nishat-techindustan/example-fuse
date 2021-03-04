import React from 'react'
import { Pie } from 'react-chartjs-2'

import CardContainer from '../../shared/CardContainer'

const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }],
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

interface Props {
    chartData?: {
        label: String,
        data: any[],
        options?: any
    }
}

const RadarChart = (props: Props, context: any) => {
    return (
        <CardContainer text='Pie Chart' comp='h5'>
            <Pie
                data={{
                    labels: chartData.labels,
                    datasets: chartData.datasets.map(obj => ({
                        ...obj,
                    }))
                }}
                options={chartData.options}
            />
        </CardContainer>
    )
}

export default RadarChart