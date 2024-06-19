import { AiOutlineCopyright } from "react-icons/ai";

const Copyright = () => {
  return (
    <div className="pb-8 pt-2 px-6 md:px-12 mx-auto">
      <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-between text-sm text-dark-20">
        <div>
          <p className="flex items-center gap-1">
            Copyright <AiOutlineCopyright /> 2024. All rights reserved.
          </p>
        </div>
        <div>
          <p>
            ~ built by <span className="text-lime italic">Paruk Azziyi</span> ~
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
