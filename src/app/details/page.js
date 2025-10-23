import Footer from "../components/Footer";
import SectionFour from "../components/ServiceDetailPage/SectionFour";
import SectionOne from "../components/ServiceDetailPage/SectionOne";
import SectionThree from "../components/ServiceDetailPage/SectionThree";
import SectionTwo from "../components/ServiceDetailPage/SectionTwo";


const Page = () => {
    // 1. states/hook variables

    // functions/methods

    // 3. return statement/jsx
    return (
        <div className="overflow-hidden">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </div>
    );
};

export default Page;