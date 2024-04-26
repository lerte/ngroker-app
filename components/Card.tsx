import React from "react";

const Card = ({ title, icon, children }) => {
  return (
    <div className="group flex flex-[1_1_150px] flex-col items-center justify-between gap-2 rounded-xl border px-2 py-6 md:gap-4 md:p-5 lg:py-10 bg-white dark:bg-black">
      {icon}
      <div className="t-b18">{title}</div>
      {children}
    </div>
  );
};

export default Card;
