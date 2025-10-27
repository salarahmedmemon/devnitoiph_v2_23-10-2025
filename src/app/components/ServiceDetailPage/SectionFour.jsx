const SectionFour = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[500px] sm:h-[600px] md:h-[737px] bg-[#EEEEEE] relative overflow-hidden flex flex-col-reverse items-center md:items-start md:flex-row ">

            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[16px] sm:right-[-150px] lg:right-[-200px] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* LEFT CIRCLE */}
            <div className='w-[185.26px] h-[185.26px] sm:w-[400px] sm:h-[400px] lg:w-[754px] lg:h-[754px] rounded-full bg-[#fff] absolute bottom-[-20px] left-[-40px] sm:bottom-[-30px] sm:left-[-160px] lg:bottom-[-200px] lg:left-[-160px] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#F2F3F5] to-[#F1F2F2]'></div>
            </div>

            <div className="w-full careerspage-section-four mx-auto h-full z-[999] pt-[14px] sm:pt-[60px] md:pt-[90px] lg:pt-[160px]">
                <div className="w-[80%] h-[80%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
                    
                    <div className="w-full md:w-[600px] xl:w-[640px] h-[492px]">
                        <span className="hidden lg:block text-[#4A4A4A] text-[20px]">Why Trust Us?</span>
                        <h1 className="hidden lg:block text-[#4C4886] text-[34px] font-[600]">Achieve Digital Transformation For Your Retail Business Services</h1>
                        <p className="hidden lg:block text-[16px] font[600] text[#AAAAAA] mt-[20px]">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typestting Industry. Lorem Ipsum Has Been The
                            Industry's Standard Dummy Text Ever Since The 1500s.
                        </p>
                        <div className="w-full mt-[20px]">
                            <ul className="flex flex-wrap items-center justify-center lg:justify-start  gap-4">
                                <li className="w-[158px] sm:w-[200px] xl:w-[284px] sm:h-[49px] text-[10px] sm:text-[16px] xl:text-[20px] font-[600] text-[#4C4886] bg-white rounded-[7px] p-[10px] border-l-[2px] border-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Protect Your Business</li>
                                <li className="w-[158px] sm:w-[200px] xl:w-[284px] sm:h-[49px] text-[10px] sm:text-[16px] xl:text-[20px] font-[600] text-[#4C4886] bg-white rounded-[7px] p-[10px] border-l-[2px] border-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Network Security</li>
                                <li className="w-[158px] sm:w-[200px] xl:w-[284px] sm:h-[49px] text-[10px] sm:text-[16px] xl:text-[20px] font-[600] text-[#4C4886] bg-white rounded-[7px] p-[10px] border-l-[2px] border-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Data Security</li>
                                <li className="w-[158px] sm:w-[200px] xl:w-[284px] sm:h-[49px] text-[10px] sm:text-[16px] xl:text-[20px] font-[600] text-[#4C4886] bg-white rounded-[7px] p-[10px] border-l-[2px] border-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Small Business Owners</li>
                                <li className="w-[158px] sm:w-[200px] xl:w-[284px] sm:h-[49px] text-[10px] sm:text-[16px] xl:text-[20px] font-[600] text-[#4C4886] bg-white rounded-[7px] p-[10px] border-l-[2px] border-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Running Your Business</li>
                                <li className="w-[158px] sm:w-[200px] xl:w-[284px] sm:h-[49px] text-[10px] sm:text-[16px] xl:text-[20px] font-[600] text-[#4C4886] bg-white rounded-[7px] p-[10px] border-l-[2px] border-[#4C4886] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">Network Monitoring</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[300px] sm:w-[489px] h-full">
                        <img src="/img/servicedetailspage/image.png" loading="lazy" />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SectionFour;