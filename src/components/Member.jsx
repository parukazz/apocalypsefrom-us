import { member } from "../constants";

const Member = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 lg:gap-16 uppercase font-clashgrotesk text-zinc-800 px-6 py-10">
      {member.map((item) => (
        <h3 className="h4" key={item.id}>
          {item.name}
        </h3>
      ))}
    </div>
  );
};

export default Member;
