"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart(props) {
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
    labels: [
      "Team Work",
      "Resilliance Reliability",
      "Programming",
      "Proactivity Contious Learning",
      "General Web Development",
      "Dev Ops Infrastructure",
      "Comunication",
      "Client Project Specific Knowledge",
    ],
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
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3,
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
        backgroundColor: "rgba(124,252,0,0.2)",
        borderColor: "rgba(124,252,0)",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scale: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "gray",
        },
        grid: {
          color: theme === "dark" ? "white" : "grey",
        },
        pointLabels: {
          color: theme === "dark" ? "white" : "grey",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: theme === "dark" ? "white" : "grey",
          backdropColor: theme === "dark" ? "black" : "white",
        },
        font: {
          fontSize: 16,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: theme === "dark" ? "white" : "grey",
          font: {
            size: 26,
          },
        },
      },
    },
  };

  return (
    <Radar
      key={theme}
      options={options}
      data={data}
      className="min-w-full max-h-dvh dark:bg-transparent object-contain"
    />
  );
}
