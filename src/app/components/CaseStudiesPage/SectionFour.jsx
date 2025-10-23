const SectionFour = () => {
    // 1. states/hook variables

    // functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[1000px] sm:h-[1500px] md:h-[1200px] lg:h-[798px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* IMAGE */}
            <div className="lg:hidden w-[70%] h-[310px] md:w-[40%] mx-auto mt-[120px]">
                <img src="/img/casestudiespage/image03.png" className="ms-[4%]"/>
            </div>

            {/* CONTENT */}
            <div className="lg:hidden w-[92%] h-[629px] mx-auto flex flex-col items-start sm:mt-[220px] md:mt-[40px]">
                <span className="text-[20px] font-[400] text-[#333333]">Discovery Phase</span>
                <h1 className="w-[202px] h-[40px] border-l-[3px] border-[#4C4886] text-[28px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px] mt-[26px]">Quality Research</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[36px] text-[#AAAAAA]">When An Unknown Printer Took A Gallery Of Type And Scrambled It To Make A Type
                    Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into 
                    Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised in 
                    The 1960s With The Release f Letraset Sheets Containing Lorem Ipsum Passages, And 
                    More Recently With Desktop 
                </p>
                <button className="w-[194px] h-[46px] text-[#4C4886] text-[16px] font-[600]">TALK TO OUR EXPERT</button>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] lg:mt-[20%] xl:mt-[14%] justify-between">
                <div className="w-[511px] h-[419px] ms-[5%]">
                    <img src="/img/casestudiespage/image02.png" className="w-full h-full object-cover ms-[4%]" />
                </div>

                <div className="w-[640px] h-full lg:ms-[5%] me-[5%]">
                    <span className="text-[20px] font-[400] text-[#333333]">Discovery Phase</span>
                    <h1 className="w-[202px] h-[40px] border-l-[3px] border-[#4C4886] text-[28px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px] mt-[26px]">Quality Research</h1>
                    <p className="text-[16px] sm:text-[20px] font-[400] pt-[36px] text-[#AAAAAA]">When An Unknown Printer Took A Gallery Of Type And Scrambled It To Make A Type
                        Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into 
                        Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised in 
                        The 1960s With The Release f Letraset Sheets Containing Lorem Ipsum Passages, And 
                        More Recently With Desktop 
                    </p>
                    <button className="w-[194px] h-[46px] text-[#4C4886] text-[16px] font-[600]">TALK TO OUR EXPERT</button>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;