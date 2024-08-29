import ProfileImage from "../assets/coding.png";

export default function Main() {
  return (
    <div
      id="main"
      className="flex items-center justify-around h-screen px-28 py-12  rounded-lg"
    >
      <div className=" p-6 rounded-lg ">
        <h1 className="text-gray-800 text-6xl font-bold">Amit kumar</h1>
        <p className="text-2xl ">Build your online presence <br /> I'm here to help you...</p>
        <button className="shadow-md shadow-gray-300 mt-3 px-3 text-xl border rounded-md hover:bg-slate-300 ">Resume</button>
      </div>
      <img className="h-96 w-96   shadow-white " src={ProfileImage} alt="profile logo" />
    </div>
  );
}
