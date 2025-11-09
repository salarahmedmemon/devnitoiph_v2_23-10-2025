import SectionOne from "../components/CareersPage/SectionOne";
import SectionTwo from "../components/CareersPage/SectionTwo";
import SectionThree from "../components/CareersPage/SectionThree";
import UpdatedSectionThree from "../components/CareersPage/UpdatedSectionThree";
import SectionFour from "../components/CareersPage/SectionFour";
import SectionFive from "../components/CareersPage/SectionFive";
import UpdatedSectionFive from "../components/CareersPage/UpdatedSectionFive";
import SectionSix from "../components/CareersPage/SectionSix";
import Footer from "../components/Footer";
import UpdatedHeader from "../components/UpdatedHeader";

const Page = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="overflow-hidden">
            <UpdatedHeader />
            <SectionOne />
            <SectionTwo />
            <UpdatedSectionThree />
            {/* <SectionThree /> */}
            <SectionFour />
            {/* <SectionFive /> */}
            <UpdatedSectionFive />
            <SectionSix />
            <Footer /> 
        </div>
    );
};

export default Page;