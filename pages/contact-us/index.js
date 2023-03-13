import Layout from "@/components/layout"
import ContactForm from "@/components/contactForm"

const servicesPage = () => {
  return (
    <Layout>
      <h1>Contact us</h1>
      <ContactForm isSideNav={false} />
    </Layout>
    
  )
}

export default servicesPage