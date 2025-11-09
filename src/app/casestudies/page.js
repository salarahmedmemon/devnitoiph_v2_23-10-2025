import SectionOne from "../components/CaseStudiesPage/SectionOne";
import SectionThree from "../components/CaseStudiesPage/SectionThree";
import SectionTwo from "../components/CaseStudiesPage/SectionTwo";
import Footer from "../components/Footer";
import UpdatedHeader from "../components/UpdatedHeader";
import UpdateSectionThree from "../components/CaseStudiesPage/UpdateSectionThree";

const Page = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="overflow-hidden">
            <UpdatedHeader />
            <SectionOne />
            <SectionTwo />
            {/* <SectionThree /> */}
            <UpdateSectionThree />
            <Footer />
        </div>
    );
};

export default Page;