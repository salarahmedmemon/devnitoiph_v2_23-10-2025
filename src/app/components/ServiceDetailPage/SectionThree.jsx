import Maq from "./Maq";
import Link from "next/link";

const SectionThree = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full bg-[#0A131C]">
            <div className="servicedetailspage-sectionthree mx-auto w-full h-[2380px] sm:h-[2580px] md:h-[1600px]  lg:h-[2400px] relative">
                <div className="image w-full h-[40vh] absolute top-[10vw] p-4 left-0 text-white  lg:left-[5%]   xl:top-[140px] xl:left-[0px]">
                    <img src="/img/servicedetailspage/sectionthree/image01.png" className="border-[2px] border-[#fff] rounded-lg    w-full  lg:w-[60%]  xl:w-[820px] lg:border-[3px] xl:h-[465px]" loading="lazy" />
                    <h1 className="text-[#77CCF3] text-[20px] font-[600]   sm:text-[6vw]   md:text-[4vw]   lg:text-[3vw]    xl:text-[36px]">Information Security Services We Offer</h1>
                    <p className="w-[100%] text-[12px] font-[400] mt-2    sm:text-[2.4vw]   md:text-[2vw]     lg:w-[55%] lg:text-[2vw]   xl:w-[817px] xl:text-[16px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        ipsum has been the industry's standard text ever since the 1500s. When an unknown
                        printer took a gallery of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially uncharged. It was popularized in the 1960s with the release of
                        Letraset sheets containing lorem ipsum passages, and more recently with desktop publishing
                        software like aldus pagemaker including version of Lorem ipsum.
                    </p>

                    <p className="w-[90%] text-[12px] font-[400] mt-5  sm:text-[2.4vw]    md:text-[2vw]    lg:w-[55%] lg:text-[2vw]    xl:w-[812px] xl:text-[16px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        ipsum has been the industry's standard text ever since the 1500s. When an unknown
                        printer took a gallery of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="hidden xl:flex w-full mt-[51px] gap-5">
                        <img src="/img/servicedetailspage/sectionthree/image02.png" className="w-full border-1 border-[#fff] rounded-[20px]    xl:w-[400px] xl:h-[300px]" loading="lazy"/>
                        <img src="/img/servicedetailspage/sectionthree/image03.png" className="w-full border-1 border-[#fff] rounded-[20px]    xl:w-[400px] xl:h-[300px]" loading="lazy" />
                    </div>

                    <p className="hidden xl:block w-[90%] text-[12px] mt-[19px]   xl:w-[817px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        ipsum has been the industry's standard text ever since the 1500s. When an unknown
                        printer took a gallery of type and scrambled it to make a type specimen book.
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        ipsum has been the industry's standard text ever since the 1500s. When an unknown
                        printer took a gallery of type and scrambled it to make a type specimen book.
                    </p>

                    <p className="hidden xl:block w-[90%] text-[12px] mt-[19px]   xl:w-[812px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        ipsum has been the industry's standard text ever since the 1500s. When an unknown
                        printer took a gallery of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="w-full sm:w-[90%] mt-[51px] flex flex-wrap items-center sm:justify-between gap-[10px] sm:gap-[16px] md:gap-[20px]   lg:w-[60%] lg:gap-[3vw]   xl:w-[673px] xl:gap-[20px]">
                        <div className="w-[90%] sm:w-[40%] text-[#77CCF3] flex items-center justify-between gap-[8px] sm:gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                            <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">01 <b className="text-white" >.</b> </span>
                            <div className="flex flex-col">
                                <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                                <p className="text-white text-[12px] sm:w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                    indutsry.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%] sm:w-[40%] text-[#77CCF3] flex items-center justify-between gap-[8px] sm:gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                            <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">02 <b className="text-white" >.</b> </span>
                            <div className="flex flex-col">
                                <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                                <p className="text-white text-[12px] sm:w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                    indutsry.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%] sm:w-[40%] text-[#77CCF3] flex items-center justify-between gap-[8px] sm:gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                            <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">03 <b className="text-white" >.</b> </span>
                            <div className="flex flex-col">
                                <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                                <p className="text-white text-[12px] sm:w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                    indutsry.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%] sm:w-[40%] text-[#77CCF3] flex items-center justify-between gap-[8px] sm:gap-1   md:gap-[20px]    lg:w-[40%] lg:gap-[10px]   xl:w-[317px] xl:gap-[17px]">
                            <span className="text-[14px] flex font-[400]    sm:text-[4vw]    md:text-[3vw]     lg:text-[2vw]   xl:text-[32px]">04 <b className="text-white" >.</b> </span>
                            <div className="flex flex-col">
                                <h1 className="text-[14px] w-[262px] font-[600]   sm:text-[4vw]    md:text-[3vw]    lg:text-[2.4vw]   xl:text-[24px] xl:w-[262px]">Latest Technologies</h1>
                                <p className="text-white text-[12px] sm:w-[150px]  sm:text-[2vw] sm:w-[100%]    md:text-[2vw] md:w-[100%]      lg:text-[1.8vw] lg:w-[100%]   xl:text-[12px] xl:w-[262px]">Lorem ipsum is simply dummy text of the printing and typesetting
                                    indutsry.
                                </p>
                            </div>
                        </div>

                    </div>

                    <Maq />

                </div>

                <div className="md:hidden lg:block ListOfServices w-[90%] sm:w-[94%] border-1 border-[#423D4C] absolute top-[1360px] right-[5vw] sm:right-[3vw] sm:top-[1600px] p-4 rounded-lg lg:w-[24%] lg:top-[145px] lg:border-[2px] lg:right-[7%]   xl:w-[413px] xl:h-[513px] xl:right-[20px] xl:top-[152px] xl:p-2 xl:border-[1px]">
                    <h1 className="text-white text-[1.4rem] xl:text-[24px] font-[600]">List of Services</h1>
                    <Link href="/packages">
                        <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[56px] bg-[#042A48] mt-8 rounded p-2 flex items-center gap-5  xl:mt-3">
                            <img src="/img/servicedetailspage/sectionthree/wd.png" loading="lazy"  />
                            <span className="text-white text-[16px] font-[600]">Web Development</span>
                        </div>
                    </Link>

                    <Link href="/packages">
                        <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[56px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                            <img src="/img/servicedetailspage/sectionthree/dm.png" loading="lazy" />
                            <span className="text-white text-[16px] font-[600]">Digital Marketing</span>
                        </div>
                    </Link>


                    <Link href="/packages">
                        <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[56px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                            <img src="/img/servicedetailspage/sectionthree/ma.png" loading="lazy" />
                            <span className="text-white text-[16px] font-[600]">Mobile App</span>
                        </div>
                    </Link>

                    <Link href="/packages">
                        <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[56px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                            <img src="/img/servicedetailspage/sectionthree/uiux.png" loading="lazy" />
                            <span className="text-white text-[16px] font-[600]">UI/UX Designing</span>
                        </div>
                    </Link>

                    <Link href="/packages">
                        <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[56px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                            <img src="/img/servicedetailspage/sectionthree/ecommerce.png" loading="lazy" />
                            <span className="text-white text-[16px] font-[600]">Ecommerce</span>
                        </div>
                    </Link>

                    <Link href="/packages">
                        <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[56px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                            <img src="/img/servicedetailspage/sectionthree/db.png" loading="lazy" />
                            <span className="text-white text-[16px] font-[600]">Digital Branding</span>
                        </div>
                    </Link>
                </div>

                <div className="md:hidden lg:block ListOfServices text-white w-[90%] sm:w-[94%] border-1 border-[#423D4C] absolute top-[1900px] sm:top-[2140px] right-[5vw] sm:right-[3vw] p-4 rounded-lg     lg:w-[24%] lg:border-[2px] lg:right-[7%]  lg:top-[700px]   xl:w-[413px] xl:h-[269px] xl:right-[20px] xl:top-[720px] xl:p-2 xl:border-[1px]">
                    <h1 className="text-[1.2rem] md:text-[1.4rem]">Download Assets</h1>
                    <p className="text-[.7rem] md:text-[.8rem] mt-2">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem ipsum has been the industry's standard dummy text ever since the
                        1500s.
                    </p>
                    <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[57px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/servicerepo.png" loading="lazy" />
                        <span className="text-white">Service Report</span>
                    </div>

                    <div className="w-[100%] xl:w-[393px] h-[10%] xl:h-[57px] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                        <img src="/img/servicedetailspage/sectionthree/servicerepo.png" loading="lazy" />
                        <span className="text-white">All Services</span>
                    </div>
                </div>

                <div className="md:hidden lg:block ListOfServices text-white w-[90%] sm:w-[94%] border-1 border-[#423D4C] absolute top-[2220px] sm:top-[2420px] right-[5vw] sm:right-[3vw] p-4 rounded-lg  lg:w-[24%] lg:top-[1050px] lg:border-[2px] lg:right-[7%]  xl:w-[413px] xl:h-[160px] xl:right-[20px] xl:top-[1050px] xl:p-2 xl:border-[1px]">
                    <h1 className="text-[1.4rem]">Follow Us On</h1>
                    <div className="w-[100%] mt-2 rounded flex flex-wrap items-center justify-between gap-2   xl:my-[20px]">
                        <img src="/img/servicedetailspage/sectionthree/facebook.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" loading="lazy" />
                        <img src="/img/servicedetailspage/sectionthree/youtube.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" loading="lazy" />
                        <img src="/img/servicedetailspage/sectionthree/instagram.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" loading="lazy" />
                        <img src="/img/servicedetailspage/sectionthree/twitter.png" className="w-[10vw]    lg:w-[20%]     xl:w-[51px] xl:h-[50px]" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;