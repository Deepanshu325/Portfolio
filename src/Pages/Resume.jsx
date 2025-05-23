import React, { useState } from "react";

const Resume = () => {

   const Job = [ {option : "JOB POSITION",  ans: "FRONTEND INTERN" } , {option:"COMPANY NAME"  ,ans: "VIITORAPPS"},{option: "COMPANY LOCATION" , ans: " Plot No,15, DLF Phase 2, Sector 25, Gurugram, Shahpur, Haryana 122002" }]
   const training = [ {option : "COURSE" , ans: "MERN STACK" } , {option:"INSTITUTE NAME" , ans: "DUCAT" }, {option: "INSTITUTE LOCATION" , ans: "SECTOR-14 , GURUGRAM, HARYANA "}]
   const university = [{option : "UNIVERSITY NAME", ans : "MAHARISHI DAYANAND UNIVERSITY"}, {option : "DEGREE LEVEL" , ans: "BTECH"}, {option : "UNIVERSITY LOCATION", ans : "near Hero Honda, behind Marble Market, Sector 72A, Sector 34, Gurugram, Haryana 122004"}]
   const [data , setData ] = useState(Job);
   const [train , setTrain ] = useState(training);
  return (
    <div className="w-full ">

      {/* Resume Section */}
      <section className="pt-[100px] text-center">
        <div className="text-white text-3xl font-bold">Resume</div>
        <div className="w-11/12 md:w-4/5 mx-auto mt-10 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-white text-xl">Experience</h1>
         <a href=""> <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-full">DOWNLOAD CV</button></a>
        </div>
      </section>

      {/* Experience */}
          
        <section className="w-11/12 md:w-3/5 mx-auto bg-white my-6 p-6 rounded-md shadow-md">
          
                       
        <div className=" rounded-lg max-w-4xl mx-auto ">
      <div className="text-blue-600 font-semibold text-lg mb-4">2035-2035</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-blue-600">{item.option}</div>
            <div className="text-gray-800">{item.ans}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
             
          
        </section>

        <section className="w-11/12 md:w-3/5 mx-auto bg-white my-6 p-6 rounded-md shadow-md">
         <div className=" rounded-lg max-w-4xl mx-auto ">
      <div className="text-blue-600 font-semibold text-lg mb-4">2035-2035</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
        {training.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-blue-600">{item.option}</div>
            <div className="text-gray-800">{item.ans}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
        </section>


      {/* Education */}
      <div className="text-white text-xl font-bold text-center my-10">Education</div>
      
        <section className="w-11/12 md:w-3/5 mx-auto bg-white my-6 p-6 rounded-md shadow-md">
         <div className=" rounded-lg max-w-4xl mx-auto ">
      <div className="text-blue-600 font-semibold text-lg mb-4">2035-2035</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
        {university.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-blue-600">{item.option}</div>
            <div className="text-gray-800">{item.ans}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
        </section>
      

      {/* Skills */}

      <div className="text-white text-xl font-bold text-center my-10">SKILLS</div>

      <section className="w-11/12 md:w-3/5 mx-auto bg-white my-10 p-6 rounded-md shadow-md">
         <div className="text-blue-500 text-xl font-bold text-center my-10">TECHNICAL SKILLS</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-black">
          {['HTML','CSS(Cascading style sheet)','JAVASCRIPT', 'REACTJS', 'NODEJS','EXPRESSJS','MONGODB'].map(skill => (
            <div key={skill} className="flex items-center gap-2">
              <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
        <div className="text-blue-500 text-xl font-bold text-center my-10">LANGUAGES</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-black">
          {['ENGLISH', 'HINDI'].map(lang => (
            <div key={lang} className="flex items-center gap-2">
              <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
              <span>{lang}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
