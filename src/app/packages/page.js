import Footer from "../components/Footer";
import SectionFour from "../components/PackagesPage/SectionFour";
import SectionOne from "../components/PackagesPage/SectionOne";
import SectionThree from "../components/PackagesPage/SectionThree";
import SectionTwo from "../components/PackagesPage/SectionTwo";

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
            <Footer />
        </div>
    )
};

export default Page;