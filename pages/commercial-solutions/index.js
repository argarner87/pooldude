import Layout from "@/components/layout"
import Head from "next/head"
import Image from "next/image"
import ContactForm from "@/components/contactForm"

const servicesPage = () => {
  return (
    <>
      <Head>
        <title>Commercial Pool Solutions - The Pool Dude</title>
        <meta name="description" content="Best friggin pool guys in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      
      <Layout>
      <section className='hero'>
          <h1 className='page-title'>
            Commercial Pool Solutions
          </h1>
          <Image 
            className='hero-img'
            src="/Pool_pic_1.jpg" 
            width={800}
            height={600}
          />
        </section>
        <section className="page-body">
          <article className='page-body-content'>
            <div className='page-txt'>At the Pool Dude, we don't just focus on residential pools.</div>
            <div className='page-txt'>We're also experts at maintaining commercial pools, as well as troubleshooting issues and upgrading commercial equipment.</div>
            <div className='page-txt'>Whether you need dosing, filtration or heating solutions or you require periodic chlorine deliveries, The Pool Dude has what you need to keep your commercial pool running properly.</div>
          </article>
          <ContactForm isSideNav={true} id="contact-form" />
        </section>
      </Layout>
    </>
    
  )
}

export default servicesPage