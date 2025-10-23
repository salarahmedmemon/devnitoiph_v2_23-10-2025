const SectionSix = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[1550px]  md:h-[700px]  bg-[#EEEEEE] relative overflow-hidden pt-[96px]">

            <div className="hidden md:block w-[25vw] h-[25vw] bg-[#B7D2EF] rounded-full p-[.2vw] absolute top-[-9vw] right-[-12vw]">
                <div className="w-full h-full rounded-full bg-gradient-to-b to-[#E6EAEE] from-[#E7EBEE]"></div>
            </div>

            <div className="hidden md:block w-[50vw] h-[50vw] bg-[#FFF] rounded-full p-[.2vw] absolute bottom-[-17vw] left-[-17vw]">
                <div className="w-full h-full rounded-full bg-[#EEE]"></div>
            </div>

            <div className="mx-auto text-center w-[303px] h-[100px] border-t-[3px] border-[#4C4886] text-[32px] font-[500]">
                <h1 className="text-[#0A1119]">Our Latest</h1>
                <h2 className="text-[#4C4886]">Article</h2>
            </div>

            <div className="w-[90%] mx-auto h-[401px] flex flex-wrap items-center justify-center gap-[21px] mt-[53px]">
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