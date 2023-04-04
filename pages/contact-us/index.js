import Layout from "@/components/layout"
import ContactForm from "@/components/contactForm"
import Image from "next/image"

const servicesPage = () => {
  return (
    <Layout>
      <section className="hero">
        <h1 className="page-title">Contact Us</h1>
        <Image
          className="hero-img"
          src="/Pool_pic_1.jpg"
          width={800}
          height={600}
          alt="hero"
        />
      </section>
      <section className="page-body">
        <article className="page-body-content">
          <p className="page-txt">
            Need regular pool maintenance? Maybe your pool has turned green and you
            need help bringing it back to its former glory? Or perhaps you have an
            issue with some of your pool equipment?
          </p>
          <p className="page-txt">
            Get in touch using the form below, or give us a call or email today, so
            we can get to helping you take the hassle and stress out of your
            backyard oasis today!
          </p>
        </article>
      
      <ContactForm isSideNav={false} id="contact-form"/></section>
    </Layout>
  );
}

export default servicesPage