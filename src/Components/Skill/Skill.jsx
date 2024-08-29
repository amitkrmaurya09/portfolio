import ProgramingItems from "../../assets/ProgramingLogo.json";

export default function Skill() {
  return (
    <div id="skill" className="h-fit p-24">
        <h2 className="text-center text-6xl font-bold mb-10">Skill</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ProgramingItems.map((tech, index) => (
          <div key={index} className="flex flex-col shadow-lg shadow-white items-center  rounded-xl">
            <img src={tech.image} alt={tech.name} className="w-24 h-24" />
            <p className=" text-2xl mt-2 text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
