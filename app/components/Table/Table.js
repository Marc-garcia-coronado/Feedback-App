import React from "react";

const Table = (props) => {
  const { title, obj } = props;

  return (
    <div className="lg:gap-x-5">
      <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
      <div className="pt-0.5 px-5 ">
        {obj.map((ele, i) => {
          if (!ele) {
            return null;
          }
          if (ele.message) {
            return (
              <div key={i}>
                <p className="text-start my-4">
                  {ele.name && <span>{ele.name}: </span>}
                  {ele.message}
                </p>
                <hr />
              </div>
            );
          } else {
            return (
              <div key={i}>
                <p className="text-start my-4">{ele}</p>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Table;
