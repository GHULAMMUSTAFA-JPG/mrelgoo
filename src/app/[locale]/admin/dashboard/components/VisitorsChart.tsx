'use client'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import React from 'react'

export default function VisitorsChart() {
  const state = {
    series: [
      {
        name: 'series1',
        data: [0, 15, 25, 12, 18, 30, 10],
      },
    ],
    options: {
      chart: {
        height: 100,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        row: {
          colors: ['transparent'],
          opacity: 0.5,
        },
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  }

  return (
    <>
      {true && (
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='area'
          height={350}
        />
      )}
    </>
  )
}
