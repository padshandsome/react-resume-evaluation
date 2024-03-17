import React from 'react';

const MetricsBox = ({MetricName, Explanation, MetricValue}) => {
    return (
        <div class="w-full lg:py-3 pb-3 rounded-xl shadow-3xl text-gray-700 bg-white hover:shadow-xl hover:bg-gray-100 text-gray-700 bg-white transition-all duration-300">
                        

                            
                            <div class="2xl:px-10 pt-3 xl:px-3 flex justify-between">
                                
                                <h5 class="block font-sans lg:text-lg md:text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{MetricName}: {MetricValue}</h5>
                            
                                <div class="dropdown dropdown-right ">
                                    <div tabindex="0" role="button" class="">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                    
                                    </div>
                                    <div tabindex="0" class="dropdown-content z-[1] card card-compact 2xl:w-64 p-2 ml-20 xl:ml-10 w-64 bg-white text-gray-700">
                                        <div class="card-body">
                                        <p class="card-title">{MetricName}: {MetricValue}</p>
                                        <p>{Explanation}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div> 


                        
                        <div class="2xl:px-10 xl:px-3">
                            <progress class="progress progress-error 2xl:w-56 xl:w-26" value={MetricValue} max="100"></progress>
                        </div>
                    </div>

    )
}

export default MetricsBox;