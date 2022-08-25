import { FaTelegramPlane} from "react-icons/fa";
import AboutUs from "./SharedComponent/AboutUs";
import ContactUs from "./SharedComponent/ContactUs";
import Header from "./SharedComponent/Header";
import Strategy from "./SharedComponent/Strategy";

const Index = (props) => {
    return (
        <>
            <Header 
                description="Large yet most efficient business oriented technology company in Indonesia"
                buttonText="LearnMore"
            />
            <AboutUs
                title="What's the special about us ?"
                description="We have unique preposition and strategy to super charge our delivery process"
                descriptionSubTitle1="Quick Sprint turn within fortnightly framework"
                descriptionSubTitle2="Delivery Fast, Fail Fast , Iterate Fast"
                descriptionSubTitle3="Pipeline based code delivery stream"
            />
            <Strategy
                 title="Our Strategies "
                 description="We believed in the power of market influence, that's why we trust our capability to become market leader by holding into the following pillars"
                 descriptionSubTitle1="Customization Bussiness Model"
                 descriptionSubTitle2="Cutting Edge Technology Implementation"
                 descriptionSubTitle3="Self Managed and Curated By Indonesian Best Talents"
                 descriptionSubTitle4="Breakthrough and out of the box products"
            />
           <ContactUs 
                title="Contact Us"
                description="Intrique to know More About Pojokan.io? Drop us a message at your convenience"
                label1="Fullname"
                InputPlaceholderName="Fullname"
                label2="Email"
                InputPlaceholderEmail="email@mail.com"
                label3="Your message"
                InputPlaceholderMessage="Your message"
                buttonTitle="Send"
           />
        </>
    )
}

export default Index