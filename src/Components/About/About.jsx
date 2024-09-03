import StudentLogo from "../../assets/studentLogo.png";
import DeveloperInfo from "./DeveloperInfo";

export default function About() {
  return (
  <div id="about" className="h-screen px-28  flex items-center justify-center">
    <div  className="w-full p-32 flex shadow-2xl shadow-white justify-around items-center  rounded-lg " >
      <div className="bg-gray- p-5 rounded-lg">
        <img className="h-52 w-52 pb-3"  src={StudentLogo} alt="student logo" />
        <h2 className="font-bold">Currently Pursuing B-tech from <br />Central university of Uttarakhand</h2>
      </div>
      <div className="w-1/2 h-fit p-5 ">
       <DeveloperInfo name="frontend" description="I specialize in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React" />
       <DeveloperInfo name="Back-end" description="My expertise lies in building RESTful APIs, working with databases like PostgreSQL and optimizing server performance." />
      </div>
    </div>
  </div>
    
  );
}
