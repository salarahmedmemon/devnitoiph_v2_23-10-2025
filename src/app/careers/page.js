import SectionOne from "../components/CareersPage/SectionOne";
import SectionTwo from "../components/CareersPage/SectionTwo";
import SectionThree from "../components/CareersPage/SectionThree";
import SectionFour from "../components/CareersPage/SectionFour";
import SectionFive from "../components/CareersPage/SectionFive";
import SectionSix from "../components/CareersPage/SectionSix";
import Footer from "../components/Footer";

const Page = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="overflow-hidden">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <Footer />
        </div>
    );
};

export default Page;