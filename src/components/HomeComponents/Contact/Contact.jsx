import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";

const Contact = () => (
    <div id="contacts" className="contacts text-center">
        <h1 className="mb-5 font-weight-bold display-4">Get in touch</h1>

        <div className="container contact-section text-left mb-5">
            <div className="row">
                <div className="col-md-6 mb-5">
                    <ContactForm />
                </div>

                <div className="col-md-6 mb-5">
                    <ContactInfos />
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
