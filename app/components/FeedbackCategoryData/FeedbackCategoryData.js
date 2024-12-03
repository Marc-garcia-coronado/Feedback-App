"use client";

import Table from "@/app/components/Table/Table";

export function FeedbackCategoryData(props) {
  const { title, obj } = props;

  if (
    obj?.mostVotedCompetenciesHighlighted.length > 0 ||
    obj?.mostVotedCompetenciesToImprove.length > 0 ||
    obj?.comments.length > 0
  ) {
    return (
      <div>
        <h2 className="text-4xl font-bold mt-10 lg:mt-20">{title}</h2>
        <div className="lg:flex lg:flex-row lg:justify-between lg:gap-16">
          {obj?.mostVotedCompetenciesHighlighted.length > 0 && (
            <div className="lg:w-6/12">
              <Table
                title={"Most Voted Competencies high Lighted"}
                obj={obj?.mostVotedCompetenciesHighlighted}
              />
            </div>
          )}
          {obj?.mostVotedCompetenciesToImprove.length > 0 && (
            <div className="lg:w-6/12">
              <Table
                title={"Most Voted Competencies To Improve"}
                obj={obj?.mostVotedCompetenciesToImprove}
              />
            </div>
          )}
        </div>
        {obj?.comments.length > 0 && (
          <div className="lg:mt-15">
            <Table title={"Comments"} obj={obj?.comments} />
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
