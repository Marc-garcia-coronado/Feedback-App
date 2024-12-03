"use client";

import { useEffect, useState } from "react";
import FeedbackResultsPopup from "../components/FeedbackResultsPopup";
import { FeedbackCategoryData } from "../components/FeedbackCategoryData/FeedbackCategoryData";
import { RadarChart } from "../components/RadarChart/RadarChart";
import { BarChar } from "../components/BarChart/BarChart";
import axios, { Axios } from "axios";

export default function Page() {
  const [uuid, setUuid] = useState("");
  const [data, setData] = useState(null);
  const [generalScore, setGeneralScore] = useState(null);
  const [error, setError] = useState(undefined);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    setError(undefined);
    if (uuid)
      axios
        .get(
          `https://kindred-360-evaluation-functions.azurewebsites.net/api/getFeedbackByGUIDAndDate?`,
          {
            params: {
              uuid: uuid,
              startDate: start,
              endDate: end,
            },
          }
        )
        .then((response) => setData(response.data))
        .catch((error) => {
          setError(error);
        });
    if (uuid)
      axios
        .get(
          `https://kindred-360-evaluation-functions.azurewebsites.net/api/getAverageCategoryScoreByDate?`,
          {
            params: {
              startDate: start,
              endDate: end,
            },
          }
        )
        .then((response) => {
          setGeneralScore(response.data);
        });
  }, [uuid]);

  return (
    <>
      <FeedbackResultsPopup
        setUuid={setUuid}
        setStart={setStart}
        setEnd={setEnd}
        modalOpen={!data || error}
        error={error}
        data={data}
      />
      <main className="lg:p-7 p-3 ">
        <h3 className="mt-10 text-2xl font-semibold">
          How much does the person know
        </h3>
        <div className="w-full flex justify-center">
          <div className="w-full lg:px-16 mt-4 hidden md:block">
            <RadarChart
              teamWork={data?.teamWorkSummaryFeedback?.avgScore}
              resillianceReliability={
                data?.resillianceReliabilitySummaryFeedback?.avgScore
              }
              programming={data?.programmingSummaryFeedback?.avgScore}
              proactivityContinousLearning={
                data?.proactivityContinousLearningSummaryFeedback?.avgScore
              }
              generalWebDevelopment={
                data?.generalWebDevelopmentSummaryFeedback?.avgScore
              }
              devOpsInfrastructure={
                data?.devOpsInfrastructureSummaryFeedback?.avgScore
              }
              communication={data?.communicationSummaryFeedback?.avgScore}
              clientProjectSpecificKnowledge={
                data?.clientProjectSpecificKnowledgeSummaryFeedback?.avgScore
              }
              genTeamWork={generalScore?.teamWorkScore}
              genResillianceReliability={
                generalScore?.resillianceReliabilityScore
              }
              genProgramming={generalScore?.programmingSumScore}
              genProactivityContinousLearning={
                generalScore?.proactivityContinousLearningScore
              }
              genGeneralWebDevelopment={
                generalScore?.generalWebDevelopmentScore
              }
              genDevOpsInfrastructure={generalScore?.devOpsInfrastructureScore}
              genCommunication={generalScore?.communicationSumScore}
              genClientProjectSpecificKnowledge={
                generalScore?.clientProjectSpecificKnowledgeScore
              }
            />
          </div>
          <div className="block md:hidden h-[500px]">
            <BarChar
              teamWork={data?.teamWorkSummaryFeedback?.avgScore}
              resillianceReliability={
                data?.resillianceReliabilitySummaryFeedback?.avgScore
              }
              programming={data?.programmingSummaryFeedback?.avgScore}
              proactivityContinousLearning={
                data?.proactivityContinousLearningSummaryFeedback?.avgScore
              }
              generalWebDevelopment={
                data?.generalWebDevelopmentSummaryFeedback?.avgScore
              }
              devOpsInfrastructure={
                data?.devOpsInfrastructureSummaryFeedback?.avgScore
              }
              communication={data?.communicationSummaryFeedback?.avgScore}
              clientProjectSpecificKnowledge={
                data?.clientProjectSpecificKnowledgeSummaryFeedback?.avgScore
              }
              genTeamWork={generalScore?.teamWorkScore}
              genResillianceReliability={
                generalScore?.resillianceReliabilityScore
              }
              genProgramming={generalScore?.programmingSumScore}
              genProactivityContinousLearning={
                generalScore?.proactivityContinousLearningScore
              }
              genGeneralWebDevelopment={
                generalScore?.generalWebDevelopmentScore
              }
              genDevOpsInfrastructure={generalScore?.devOpsInfrastructureScore}
              genCommunication={generalScore?.communicationSumScore}
              genClientProjectSpecificKnowledge={
                generalScore?.clientProjectSpecificKnowledgeScore
              }
            />
          </div>
        </div>
        <FeedbackCategoryData
          title={"Team Work"}
          obj={data?.teamWorkSummaryFeedback}
        />
        <FeedbackCategoryData
          title={"Resilliance Reliability"}
          obj={data?.resillianceReliabilitySummaryFeedback}
        />
        <FeedbackCategoryData
          title={"Programming"}
          obj={data?.programmingSummaryFeedback}
        />
        <FeedbackCategoryData
          title={"Proactivity Contious Learning"}
          obj={data?.proactivityContinousLearningSummaryFeedback}
        />
        <FeedbackCategoryData
          title={"General Web Development"}
          obj={data?.generalWebDevelopmentSummaryFeedback}
        />
        <FeedbackCategoryData
          title={"Dev Ops Infrastructure"}
          obj={data?.devOpsInfrastructureSummaryFeedback}
        />
        <FeedbackCategoryData
          title={"Comunication"}
          obj={data?.communicationSummaryFeedback}
        />
        <FeedbackCategoryData
          title={"Client Project Specific Knowledge"}
          obj={data?.clientProjectSpecificKnowledgeSummaryFeedback}
        />
      </main>
    </>
  );
}
