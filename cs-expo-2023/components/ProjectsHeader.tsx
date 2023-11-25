// ProjectsHeader.tsx
import React from "react";

interface ProjectsHeaderProps {
  headerText: string;
  subheaderText: string;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
  headerText,
  subheaderText,
}) => {
  return (
    <main>
      <div className="w-full self-center relative">
        <div className="w-full top-0 text-center text-zinc-900 text-5xl custom-font">
          {headerText}
        </div>
        <div className="flex justify-center text-center md:w-4/5 lg:w-4/5 mx-auto text-zinc-900 max-sm:text-base md:text-lg lg:text-xl font-normal font-['Helvetica Now Text ']">
          {subheaderText}
        </div>
      </div>
    </main>
  );
};

export default ProjectsHeader;
