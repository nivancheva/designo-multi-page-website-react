import Countries from "../components/Countries/Countries"
import Form from "../components/Form/Form"
import './Contact.css'

export default function Contact() {
    return (
        <div className="">
            <div className="contact-form">
                <div className="contact-form_text">
                    <h1>Contact Us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
                </div>
                <Form />
            </div>
            <Countries />
            <div className="section-gap"></div>
        </div>
    )
}