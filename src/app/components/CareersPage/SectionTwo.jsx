const SectionTwo = () => {
    // 1. states/hook variables

    // functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[1000px] sm:h-[1300px] md:h-[1200px] lg:h-[798px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>
            {/* LEFT CIRCLE */}
            <div className="hidden lg:block bg-white w-[50vw] h-[50vw] rounded-full p-1 absolute bottom-[-10vw] left-[-5vw]">
                <div className="w-full h-full rounded-full bg-[#EEEEEE]"></div>
            </div>

            {/* HEADINGS */}
            <div className="w-[303px] h-[100.77px] border-t-[3px] lg:border-t-[5px] border-[#4C4886] absolute left-1/2 -translate-x-1/2">
                <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[500] text-center text-[#333333]">Our Careers</h1>
                <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[600] text-[#4C4886] text-center">Blog</h2>
            </div>

            {/* IMAGE */}
            <div className="lg:hidden w-[70%] h-[310px] md:w-[40%] mx-auto mt-[120px]">
                <img src="/img/careerspage/image04.png" className="ms-[4%]" loading="lazy" />
            </div>

            {/* CONTENT */}
            <div className="lg:hidden w-[92%] h-[629px] mx-auto flex flex-col items-start sm:mt-[220px] md:mt-[40px]">
                <h1 className="w-[202px] h-[40px] border-l-[3px] border-[#4C4886] text-[28px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px]">Our Blog</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[26px] text-[#AAAAAA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                <span className="text-[12px] sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                <div className="w-[242px] sm:w-[400px] mt-[24px] flex flex-col">
                    <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px] font-[500] text-[#4C4886]"> AIsthetic</h3>
                        <p className="text-[12px] sm:text-[16px] font-[400] text-[#AAAAAA] pt-[17px]">"Strategically developed an AI-powered platform for generating text, images, audio, code, and videos. With a focus on precision,  </p>
                    </div>

                    <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px]  font-[500] text-[#4C4886]"> MenaJobs.io</h3>
                        <p className="text-[12px] sm:text-[16px]  font-[400] text-[#AAAAAA] pt-[17px]">"We led MenaJobs.io's development, shaping it into a user-friendly job portal. Our work spanned planning, design, coding, and optimization—the result: "</p>
                    </div>
                </div>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] lg:mt-[20%] xl:mt-[16%] justify-between">
                <div className="w-[511px] h-[419px] ms-[8%] z-[1000]">
                    <img src="/img/careerspage/image04.png" className="w-full h-full object-cover ms-[4%]" loading="lazy" />
                </div>

                <div className="w-[680px] h-full lg:ms-[5%] me-[4%]">
                    <h1 className="border-l-[3px] border-[#4C4886] text-[30px] font-[600] text-[#4C4886] ps-[6px]">Our Blog</h1>
                    <p className="text-[20px] font-[400] mt-[20px] text-[#AAAAAA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                    <span className="text-[18px] text-[#4C4886] block mt-[20px] font-[700]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                    <div className="w-full mt-[24px] flex items-center justify-center">
                        <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                            <h3 className="text-[18px] font-[500] text-[#4C4886]">Alsthetic</h3>
                            <p className="text-[12px] font-[400] text-[#AAAAAA] pt-[17px]">"Strategically developed an AI-powered platform for generating text, images, audio, code, and videos. With a focus on precision, </p>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                            <h3 className="text-[18px]  font-[500] text-[#4C4886]">MenaJobs.io</h3>
                            <p className="text-[12px] font-[400] text-[#AAAAAA] pt-[17px]">"We led MenaJobs.io's development, shaping it into a user-friendly job portal. Our work spanned planning, design, coding, and optimization—the result.</p>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px] mt-[30px] sm:mt-0">
                            <h3 className="text-[18px] font-[500] text-[#4C4886]">APK Hub</h3>
                            <p className="text-[12px] font-[400] text-[#AAAAAA] pt-[17px]">As the Developer of APK Hub. We Crafted a user friendly platform for discovering and exploring Apps and Games from The Play Store. My work spans design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;