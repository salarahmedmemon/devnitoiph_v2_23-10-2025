import Footer from "../components/Footer";
import SectionFive from "../components/PackagesPage/SectionFive";
import SectionFour from "../components/PackagesPage/SectionFour";
import SectionOne from "../components/PackagesPage/SectionOne";
import SectionThree from "../components/PackagesPage/SectionThree";
import SectionTwo from "../components/PackagesPage/SectionTwo";
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
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <Footer />
        </div>
    )
};

export default Page;