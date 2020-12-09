import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";

const Contact = () => (
    <div
        id="contacts"
        className="contacts text-center d-flex flex-column justify-content-center align-items-center"
    >
        <h1 className="mb-5 font-weight-bold display-4">Get in touch</h1>

        <div className="container contact-section text-left p-3 mb-5">
            <div className="row">
                <div className="col-sm">
                    <ContactForm />
                </div>

                <div className="col-sm">
                    <ContactInfos />
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
