const SectionSix = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[1550px]  md:h-[700px]  bg-[#EEEEEE] relative overflow-hidden pt-[96px]">

            {/* RIGHT CIRCLE */}
            <div className='homepage-sectionone-rightcircle w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[16px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* LEFT CIRCLE */}
            <div className='w-[185.26px] h-[185.26px] sm:w-[400px] sm:h-[400px] lg:w-[754px] lg:h-[754px] rounded-full bg-[#fff] absolute bottom-[-20px] left-[-40px] sm:bottom-[-30px] sm:left-[-160px] lg:bottom-[-200px] lg:left-[-160px] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#F2F3F5] to-[#F1F2F2]'></div>
            </div>

            <div className="mx-auto text-center w-[303px] h-[100px] border-t-[3px] border-[#4C4886] text-[32px] font-[500]">
                <h1 className="text-[#0A1119]">Our Latest</h1>
                <h2 className="text-[#4C4886]">Article</h2>
            </div>

            <div className="w-[90%] careerspage-sectionsix mx-auto h-[401px] flex flex-wrap items-center justify-center gap-[21px] mt-[53px]">
                <div className="w-full md:w-[30%] z-[50] h-full">
                    <div className="w-full h-[80%] rounded-[10px]">
                        <img src="/img/careerspage/sectionsix/image01.png" className="w-full h-full object-cover rounded-[10px]" loading="lazy" />
                    </div>

                    <div className="w-full h-[20%] flex items-center justify-between px-[30px] text-[16px] font-[600] text-[#4C4886]">
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Course</li>
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Free</li>
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Saturday</li>
                    </div>
                </div>

                <div className="sm:w-full md:w-[30%] z-[50] h-full">
                    <div className="w-full h-[80%] rounded-[10px]">
                        <img src="/img/careerspage/sectionsix/image02.png" className="w-full h-full object-cover rounded-[10px]" loading="lazy" />
                    </div>

                    <div className="w-full h-[20%] flex items-center justify-between px-[30px] text-[16px] font-[600] text-[#4C4886]">
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Course</li>
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Free</li>
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Saturday</li>
                    </div>
                </div>

                <div className="sm:w-full md:w-[30%] z-[50] h-full">
                    <div className="w-full h-[80%] rounded-[10px]">
                        <img src="/img/careerspage/sectionsix/image03.png" className="w-full h-full object-cover rounded-[10px]" loading="lazy" />
                    </div>

                    <div className="w-full h-[20%] flex items-center justify-between px-[30px] text-[16px] font-[600] text-[#4C4886]">
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Course</li>
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Free</li>
                        <li> <span className="w-[10px] h-[10px] rounded-full bg-[#AAAAAA]"></span> Saturday</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SectionSix;