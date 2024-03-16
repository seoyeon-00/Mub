import React from "react";

type MovieListComponentProps = {
  children: React.ReactNode;
};

const MovieListComponent = ({ children }: MovieListComponentProps) => {
  return (
    <div className="flex flex-wrap mt-10 justify-start gap-3">
      {React.Children.map(children, (child) => (
        <div className="w-[48%] md:w-[31%] lg:w-[19%] 2xl:w-[15%] mb-8">
          {child}
        </div>
      ))}
    </div>
  );
};

export default MovieListComponent;
