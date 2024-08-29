import StudentLogo from "../../assets/studentLogo.png";
import DeveloperInfo from "./DeveloperInfo";

export default function About() {
  return (
  <div id="about" className="h-screen px-28  flex items-center justify-center">
    <div  className="w-full p-32 flex shadow-2xl shadow-white justify-around items-center  rounded-lg " >
      <div className="bg-amber-100 p-5 rounded-lg">
        <img className="h-52 w-52" src={StudentLogo} alt="student logo" />
        <h2 className="text-4xl text-center text-blue-500 font-bold">Student</h2>
        <h2>web Developer</h2>
      </div>
      <div className="w-1/2 h-fit p-5 ">
       <DeveloperInfo name="frontend" description="i have done many project on frontend" />
       <DeveloperInfo name="Back-end" description="i build fast and reliable project on back-end" />
      </div>
    </div>
  </div>
    
  );
}
