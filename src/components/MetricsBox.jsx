import React from 'react';

const MetricsBox = ({MetricName, Explanation, MetricValue}) => {
    return (
        <div className="w-full lg:py-3 pb-3 rounded-xl shadow-3xl text-gray-700 bg-white hover:shadow-xl hover:bg-gray-100 text-gray-700 bg-white transition-all duration-300">
                        

                            
                            <div className="2xl:px-10 pt-3 xl:px-3 flex justify-between">
                                
                                <h5 className="block font-sans lg:text-lg md:text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{MetricName}: {MetricValue}</h5>
                            
                                <div className="dropdown dropdown-right ">
                                    <div tabIndex="0" role="button" className="">
                                    
                                    </div>
    
                                </div>
                            
                            </div> 


                        
                        <div className="2xl:px-10 xl:px-3">
                            <progress className="progress progress-error 2xl:w-56 xl:w-26" value={MetricValue} max="100"></progress>
                        </div>
                    </div>

    )
}

export default MetricsBox;