const SectionFive = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="w-full h-[700px]  sm:h-[1000px]   md:h-[500px]   lg:h-[600px]  bg-[#000C1B] relative overflow-hidden flex flex-col-reverse items-center md:items-start md:flex-row">

            <div className="hidden md:block w-[25vw] h-[25vw] bg-[#B7D2EF] rounded-full p-[.2vw] absolute top-[-9vw] right-[-12vw]">
                <div className="w-full h-full rounded-full bg-gradient-to-b to-[#E6EAEE] from-[#E7EBEE]"></div>
            </div>

            <div className="hidden md:block w-[50vw] h-[50vw] bg-[#FFF] rounded-full p-[.2vw] absolute bottom-[-17vw] left-[-17vw]">
                <div className="w-full h-full rounded-full bg-[#EEE]"></div>
            </div>

            <div className="w-full h-full pt-[10vw] ps-[4vw] z-10">
                <span className="text-[#4A4A4A] text-[4vw] sm:text-[2.2vw] md:text-[1.5vw]">Tailored Service Plans</span>
                <h1 className="text-[#4C4886] text-[6vw] sm:text-[4vw] md:text-[2.4vw] font-semibold">Premium Business Packages End-To-End Service Excellence</h1>
                <p className="text-[#ABABAB] text-[4vw] mt-[3vw] pe-[2vw] font-semibold   sm:text-[2.2vw]   md:text-[2vw]   lg:text-[1.8vw]  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="w-[95%] sm:w-[90%] my-[5vw] sm:my-[3vw] md:my-0  md:mt-[4vw]  lg:mt-[3vw] flex flex-wrap gap-4">
                    <ul className="list-disc text-[#4D4987] px-2 py-[2vw] sm:py-[.7vw] font-[600] text-[12px] sm:text-[2vw] md:text-[1.4vw] ps-[5vw] sm:ps-[3vw] md:ps-[2.5vw] w-[47%] sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer"><li>Comprehensive Support</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[2vw] sm:py-[.7vw] font-[600] text-[12px] sm:text-[2vw] md:text-[1.4vw] ps-[5vw] sm:ps-[3vw] md:ps-[2.5vw] w-[47%] sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer"><li>Customized Solutions</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[2vw] sm:py-[.7vw] font-[600] text-[12px] sm:text-[2vw] md:text-[1.4vw] ps-[5vw] sm:ps-[3vw] md:ps-[2.5vw] w-[47%] sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer"><li>High Quality Deliverables</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[2vw] sm:py-[.7vw] font-[600] text-[12px] sm:text-[2vw] md:text-[1.4vw] ps-[5vw] sm:ps-[3vw] md:ps-[2.5vw] w-[47%] sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer"><li>Cost-Effective Plans</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[2vw] sm:py-[.7vw] font-[600] text-[12px] sm:text-[2vw] md:text-[1.4vw] ps-[5vw] sm:ps-[3vw] md:ps-[2.5vw] w-[47%] sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer"><li>Fast Turnaround</li></ul>
                    <ul className="list-disc text-[#4D4987] px-2 py-[2vw] sm:py-[.7vw] font-[600] text-[12px] sm:text-[2vw] md:text-[1.4vw] ps-[5vw] sm:ps-[3vw] md:ps-[2.5vw] w-[47%] sm:w-[48%] bg-white rounded border-l-2 border-[#4D4987] hover:bg-[#4C4886] hover:text-white transition-all duration-200 ease-in-out cursor-pointer"><li>Expert Consultation</li></ul>
                </div>
            </div>
            <div className="w-full sm:w-[80%] md:w-[50%] sm:h-full">
                <img src="/img/packagespage/image03.png" className="w-[80%] mt-[6vw] md:mt-[10vw] mx-auto md:ms-[4vw]" />
            </div>

        </div>
    );
};

export default SectionFive;