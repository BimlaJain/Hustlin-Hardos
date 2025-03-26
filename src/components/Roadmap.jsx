"use client"
import { ROADMAP_DATA } from '@/utils/helper';
import React , {useState} from 'react';
import Image from 'next/image';

const Roadmap = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div>
            <div className='container max-w-[1172px] mx-auto px-4'> 
                <h2 className="lg:text-[80px] md:text-6xl text-5xl leading-[104%] font-normal  lg:py-[89px] md:py-10 py-7 text-black ">RoadMap</h2>
            </div>
            <div className='border-b-2 border-black w-full'></div>
            <div className="relative flex flex-col items-center container max-w-[1172px] mx-auto px-4 xl:border-x-2 lg:pt-[99px] pt-10 xl:pb-[220px] lg:pb-[120px] md:pb-[150px] pb-24">
                <div className="absolute top-0 xl:h-[1850px] lg:h-[1900px] md:h-[1300px] h-[1440px] max-md:right-[7%]">
                    <Image src="/assets/images/svg/down-arrow.svg" alt="down-arrow" width={5} height={1689} className='w-4 h-full  lg:mt-[150px] mt-10 '/>
                </div>
                {ROADMAP_DATA.map((item, index) => (
                    <div key={index} className={` flex w-full items-start ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`relative md:w-1/2 w-full  rounded-lg hover:shadow-md ${index % 2 === 0 ? 'justify-end lg:pl-[75px] md:pl-9' : 'justify-start lg:pr-[75px] pr-5 lg:pl-9'} :flex-row flex-col`}>
                            <p className='md:text-sm text-xs font-normal max-md:mt-6 mb-2'>{ item.phase}</p>
                            <h2 className="lg:text-4xl text-2xl leading-[110%] font-semibold mb-2">{item.title}</h2>
                            <p className={`text-black font-normal md:text-base text-sm overflow-hidden transition-all duration-300 ${expanded === index ? 'max-h-full' : 'lg:max-h-[190px] max-h-20'}`}>{item.description}</p>
                            {item.description.length > 190 && (
                                <button onClick={() => toggleExpand(index)} className="text-black">
                                    {expanded === index ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </div>
                        <div className={` md:size-14 size-10 bg-white border-2 border-black rounded-full flex items-center justify-center text-lg font-bold  md:absolute relative md:transform md:-translate-x-1/2 md:left-1/2`}>
                           <Image src="/assets/images/svg/roadmap-icon.svg" width={32} height={27} alt="arrow" className='md:w-8 md:h-7 size-6' />
                        </div>
                    </div>
                ))}

            </div>
            <div className='border border-black w-full'></div>
        </div>
    );
};

export default Roadmap;
