import React from 'react'

export default function Card() {
    return (
        <>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://assets-global.website-files.com/6553a47b7cee77d6e1f583d5/657b2be2a474741675172c8c_231212_Bug_Bounty_Program_6e9159f1b5-p-800.png" alt="" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Through metadata enrichment Nuklai helps you gain deeper context for data analysis and decision-making.
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Enrich Insights</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="container-6 align-center">
            <div className="title-container">
               <div className="section_inner inner2">
                  <div className="badge">
                     <img src="https://assets-global.website-files.com/6553a47b7cee77d6e1f583d5/6570dd15b10c60c08b8a303d_badge2.svg" loading="lazy" alt="" className="image"/>
                     <div className="badge-bg-light-top"></div>
                     <div className="badge-bg-light-bottom"></div>
                  </div>
                  <div className="title_wrap">
               
                     <div className="title_container">
                        <div className="h2"><span className="text-span-2 text_fix">Elevated </span>insights, through collaboration</div>
                     </div>
                    
                    <span/>
               
                     <div className="description_container description-container2 words-slide-from-right text-split ">
                        <div className="regular-large">Nuklai helps you structure, activate and monetize untapped data for new business opportunities.</div>
                     </div>
                    
                  </div>
               </div>
            </div>
            <div className="section2-content-wrapp">
               <div className="diamond-wrap _1">
                  <div className="diamond-container">
                     <div className="diamonds-background"></div>
                     <div className="empower-box-content">
                        <img src="https://assets-global.website-files.com/6553a47b7cee77d6e1f583d5/6570d21dde7170b054e64cf3_Env.svg" loading="lazy" width="85.50370025634766" height="63.46666717529297" alt="" className="vectors-wrapper-4"/>
                        <div className="h3 empower-header1">Create Data Sharing <br/>Economies</div>
                        <div className="regular regular-smaller box-description pp">Data consortiums create new private <br/>or public data economies with their own <br/>data governance policies. <br/>Combine datasets within <br/>and between data <br/>economies to <br/>maximize their <br/>utility.</div>
                     </div>
                  </div>
               </div>
               <div className="diamond-wrap _2">
                  <div className="diamond-container">
                     <div className="diamonds-background"></div>
                     <div className="empower-box-content">
                        <img src="https://assets-global.website-files.com/6553a47b7cee77d6e1f583d5/6570cff9e0536554ee08fde3_Monetize.svg" loading="lazy" alt=""/>
                        <div className="h3 empower-header3">Monetize Your <br/>Untapped Data</div>
                        <div className="regular regular-smaller box-description">Almost all data remains underutilized because <br/>it&#x27;s not worth the hassle to put <br/>data on marketplaces. Nuklai allows <br/>easy monetization of <br/>data, so vast amounts <br/>of dark data can be <br/>unlocked.</div>
                     </div>
                  </div>
               </div>
               <div className="diamond-wrap _3">
                  <div className="diamond-container">
                     <div className="diamonds-background"></div>
                     <div className="empower-box-content">
                        <img src="https://assets-global.website-files.com/6553a47b7cee77d6e1f583d5/6570cff93c780fb592e85da1_Structure.svg" loading="lazy" alt=""/>
                        <div className="h3 empower-header2">Collaborative Contextualization</div>
                        <div className="regular regular-smaller box-description">Deeply described metadata can be leveraged <br/>to find combinations between datasets <br/>that were unprecedented <br/>before. Extended metadata is<br/> leveraged for AI and <br/>contextualizing LLM <br/>integrations.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="background-light section-placement"></div>
         <div className="background-light green-light"></div>
        </div>
        </>
    );
}