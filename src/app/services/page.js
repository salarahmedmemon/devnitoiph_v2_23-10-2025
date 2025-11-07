import Footer from "../components/Footer";
import SectionFour from "../components/ServicePage/SectionFour";
import SectionOne from "../components/ServicePage/SectionOne";
import SectionTwo from "../components/ServicePage/SectionTwo";
import SectionThree from "../components/ServicePage/SectionThree";
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
            <Footer />
        </div>
    );
};

export default Page;