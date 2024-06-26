import React, {useState} from 'react';
import MetricsBox from './MetricsBox';
import FileUpload from './FileUpload';
import Spline from '@splinetool/react-spline';


// TODO: 1. fix background compliable
function Evaluation() {

//   const [overallScore, setOverallScore] = useState('');
//   const [accuracy, setAccuracy] = useState('');
//   const [clarity, setClarity] = useState('');
// const overallScore = 20;
// const accuracy = 34;
// const clarity = 35;

const [response, setResponse] = useState(null);
const [professional_related_score, setProfessional_related_score] = useState('');
const [skill_covered_score, setSkill_covered_score] = useState('');
const [grammar_score, setgrammar_score] = useState('');
const [format_standard_score, setFormat_standard_score] = useState('');
const [business_score, setBusiness_score] = useState('');

const handleResponse = (data) => {
    setResponse(data);

    setProfessional_related_score(data.task1.result/5 * 100);
    setSkill_covered_score(data.task2.coverage/5 * 100);
    setgrammar_score(data.task3.grammar_score/5 * 100);
    setFormat_standard_score(data.task4.format_standardization/5 * 100);
    setBusiness_score(data.task5.business_sense/5 * 100)

   


};



  return (
    <>
    {/* Branding Section */}
     <div className="navbar bg-[#261b51] px-5">
                <div className="flex-1 px-10">
                    <img className="h-24" src="1.png" alt=''>
                    </img>

                    
                </div>
                <div className="flex-none gap-2 mx-5">
                    
                    <div className="dropdown dropdown-end">
                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex="0" className="z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a href="/evaluate" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a href="/evaluate">Settings</a></li>
                        <li><a href="/evaluate">Logout</a></li>
                    </ul>
                    </div>
                </div>
     </div>

    {/* Feature Section */}
    <div className=" flex-row bg-gradient-to-r from-[#261b51] via-[#33427B] to-[#261b51] h-full ">
        {/* Hero Section */}
        <div className="hero-section flex flex-row 2xl:h-1/5 xl:h-1/6 lg:h-1/8">
            <div id="title-description" className="2xl:pt-12 px-5 xl:pt-4 w-3/5 flex flex-col">
                <p className="pt-3 pb-3 px-10 text-gray-50 font-mono 2xl:text-5xl xl:text-2xl lg:text-xl">智能简历(Resume/CV)评分服务</p>
                <p className="px-10 font-mono text-gray-50 2xl:text-xl xl:text-sm lg:text-sm">请上传您的简历，我们会通过多个维度去评测您的简历能否清晰、明确地展现您的优势。</p>
            </div>

            <div id="title-image" className="overflow-hidden  ">
                {/* <img src="./assets/cute_robot.webp" alt="Description" class="w-full h-auto object-cover"/> */}
               
                <Spline scene="https://prod.spline.design/bGY1NvZk7EF2IsPw/scene.splinecode"/>
                
            </div>
        </div>
        
        {/* Real Feature Section */}
        <div className="feature-section flex w-full p-2 h-4/5">
            {/* Upload buttons */}
            <div id="editor" className="w-3/5 pl-10 ">
            <div> test</div>
                <div className="editor mx-auto 2xl:p-5 xl:p-3 h-full shadow-3xl rounded-xl ">
                    <div className="toolbar flex justify-between  p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-t-lg border-b shadow-2xl">
                        
                        
                       
                        <div className="flex w-full gap-5 "> 
                        
                            <FileUpload onResponse={handleResponse}/>
                            {/* {response && <div> Response: {JSON.stringify(response)} </div>} */}

                            
                            
                        </div> 
                    </div>
                 
                   
                </div>
            </div>

            <div className="divider divider-horizontal"></div>

            {/* Metrics Section */}
            <div id="metrics" className="w-1/5 h-screen p-2 px-4 rounded-xl ">
                <div className="flex flex-wrap gap-3 first-letter mx-auto  justify-center ">

                {/* <MetricsBox MetricName={"Overall Score"} MetricValue={overallScore} Explanation={"Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience."} /> */}
                
                <MetricsBox MetricName={"Professional Related"} MetricValue={professional_related_score} Explanation={"Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience."} />

                <MetricsBox MetricName={"Skill Covered "} MetricValue={skill_covered_score} Explanation={"Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience."} />
                  
                <MetricsBox MetricName={"Grammar"} MetricValue={grammar_score} Explanation={"Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience."} />
                 
                <MetricsBox MetricName={"Format Standard"} MetricValue={format_standard_score} Explanation={"Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience."} />
                    
                <MetricsBox MetricName={"Business Sense"} MetricValue={business_score} Explanation={"Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience."} />
                
                </div>
    
            </div>

            {/* Suggestions Section */}
            <div id="details" className="w-1/5 ">
                <div className="flex h-full flex-wrap mx-auto rounded-xl ">
                    <div className="bg-white w-full m-2 rounded-lg text-blue-gray-900 p-6">
                        <p className="card-title">Suggestion:</p>
                        <p className="">Correctness in the context of an article refers to the accuracy and reliability of its information, adherence to grammatical rules, and consistency in style and formatting. It implies that the article is free from factual errors, logical inconsistencies, and language mistakes, ensuring that it communicates its message effectively and appropriately to its intended audience.</p>

                    </div>
                   
                </div>


            </div>
        </div>


    </div>
    
    </>
    
  );
}

export default Evaluation;
