import ContactInfo from "./CntactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section className=" text-white py-12 px-6">
            <div className="  flex flex-col sm:flex-row items-center gap-8">
                {/* Sol Taraf: Contact Info */}
                <ContactInfo />

                {/* Sağ Taraf: Contact Form */}
                <ContactForm />
            </div>
        </section>
    );
}
