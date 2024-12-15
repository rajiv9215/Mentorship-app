import React, { useState } from "react";


const MentorSuggestionForm = () => {
   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [goals, setGoals] = useState("");
  const [experience, setExperience] = useState("");
  const [preferredMentor, setPreferredMentor] = useState("");
  const [communicationPreference, setCommunicationPreference] = useState("");
  const [availableTime, setAvailableTime] = useState("");

  const handleSubmit = (event) => {  
    event.preventDefault();
    // Call API or send data to server to suggest a mentor
    console.log({
      name,
      email,
      industry,
      goals,
      experience,
      preferredMentor,
      communicationPreference,
      availableTime,
    });
  };
  const handleOutsideClick = () => {
   
  }

  return (
    <>
    {/* <div onClick={handleOutsideClick} className='w-full backdrop-blur-sm top-0 absolute h-[140vh] z-10'>
      </div> */}
     
   {/* <div className="z-20 relative   justify-center pt-24"> */}
  
   <div className=" bg-blue-500 max-w-2xl mx-auto rotate-2">
   <div className="max-w-2xl mx-auto bg-yellow-400 -rotate-2 ">
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-10 leading-loose rounded m-4 shadow-md  "
    >
      <h2 className="text-2xl font-bold mb-4">Find a Mentor!</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="industry"
        >
          Industry
        </label>
        <select
          className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
          id="industry"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
        >
          <option value="">Select an industry</option>
          <option value="tech">Tech</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="goals"
        >
          What are your goals?
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="goals"
          value={goals}
          onChange={(event) => setGoals(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="experience"
        >
          What is your level of experience?
        </label>
        <select
          className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
          id="experience"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        >
          <option value="">Select your level of experience</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="preferredMentor"
        >
          What kind of mentor are you looking for?
        </label>
        <select
          className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
          id="preferredMentor"
          value={preferredMentor}
          onChange={(event) => setPreferredMentor(event.target.value)}
        >
          <option value="">Select a mentor type</option>
          <option value="career">Career</option>
          <option value="industry">Industry</option>
          <option value="networking">Networking</option>
        </select>
      </div>
      <div className="text-center p-4">
      <button
    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1.5 px-4 rounded"
    type="submit"
  >
    Submit
  </button>
  </div>
    </form>
    </div>
    </div>
    
    {/* </div> */}
   
    </>
  );
};

export default MentorSuggestionForm;
