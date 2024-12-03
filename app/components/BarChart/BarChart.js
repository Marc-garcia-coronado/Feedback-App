"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Team Work",
  "Resilliance Reliability",
  "Programming",
  "Proactivity Contious Learning",
  "General Web Development",
  "Dev Ops Infrastructure",
  "Comunication",
  "Client Project Specific Knowledge",
];

export function BarChar(props) {
  const { theme } = useTheme();

  const {
    teamWork,
    resillianceReliability,
    programming,
    proactivityContinousLearning,
    generalWebDevelopment,
    devOpsInfrastructure,
    communication,
    clientProjectSpecificKnowledge,
    genTeamWork,
    genResillianceReliability,
    genProgramming,
    genProactivityContinousLearning,
    genGeneralWebDevelopment,
    genDevOpsInfrastructure,
    genCommunication,
    genClientProjectSpecificKnowledge,
  } = props;
  const data = {
    labels,
    datasets: [
      {
        label: "Score",
        data: [
          teamWork,
          resillianceReliability,
          programming,
          proactivityContinousLearning,
          generalWebDevelopment,
          devOpsInfrastructure,
          communication,
          clientProjectSpecificKnowledge,
        ],
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "General",
        data: [
          genTeamWork,
          genResillianceReliability,
          genProgramming,
          genProactivityContinousLearning,
          genGeneralWebDevelopment,
          genDevOpsInfrastructure,
          genCommunication,
          genClientProjectSpecificKnowledge,
        ],
        backgroundColor: "rgba(124,252,0)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scale: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: theme === "dark" ? "rgba(255,255,255,0.2)" : "grey",
        },
      },
      y: {
        grid: {
          color: theme === "dark" ? "rgba(255,255,255,0.2)" : "grey",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme === "dark" ? "white" : "grey",
          font: {
            size: 20,
          },
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}
