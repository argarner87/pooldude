import Layout from "@/components/layout"
import Head from "next/head"
import Image from "next/image"
import ContactForm from "@/components/contactForm"

const servicesPage = () => {
  return (
    <>
      <Head>
        <title>Regular Pool Maintenance - The Pool Dude</title>
        <meta name="description" content="Best friggin pool guys in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      
      <Layout>
      <section className='hero'>
          <h1 className='page-title'>
            Pool Maintenance
          </h1>
          <Image 
            className='hero-img'
            src="/Pool_pic_1.jpg" 
            width={800}
            height={600}
            alt='hero'
          />
        </section>
        <section className="page-body">
          <article className='page-body-content'>
            <div className='page-txt'>Here at the Pool Dude, we pride ourselves on professional, reliable and affordable pool care.  So we have provided a range of servicing options to ensure you get the most out of our expert care, at a cost that suits you.</div>
            <div className='page-txt'>Check out our range of ongoing and one-off pool maintenance options below:</div>
            <section className="subsection">
              <h1 className='page-heading1'>Regular mini service</h1>
              <h2 className='page-heading2'>From $65 plus chems*</h2>
              <p className='page-txt'>Our flagship, gold-standard pool maintenance program ensures your pool is balanced, clean and safe, and that your pool equipment is functioning optimally all year round.</p>
              <table className="checklist-table">
                <tbody>
                  <tr>
                    <td>Water test & Balance</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Adjust Chlorine Output</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Check Pump Basket</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Empty Skimmer Basket</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Check Pool Equipment</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Backwash / Clean Filter</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Vacuum pool</td>
                    <td>&#10008;</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="subsection">
              <h1 className='page-heading1'>Regular full service</h1>
              <h2 className='page-heading2'>From $100 plus chems*</h2>
              <p className='page-txt'>Our flagship, gold-standard pool maintenance program ensures your pool is balanced, clean and safe, and that your pool equipment is functioning optimally all year round.</p>
              <table className="checklist-table">
                <tbody>
                  <tr>
                    <td>Water test & Balance</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Adjust Chlorine Output</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Check Pump Basket</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Empty Skimmer Basket</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Check Pool Equipment</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Backwash / Clean Filter</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Vacuum pool</td>
                    <td>&#10004;</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="subsection">
              <h1 className='page-heading1'>One-off full service</h1>
              <h2 className='page-heading2'>From $135 plus chems*</h2>
              <p className='page-txt'>Our flagship, gold-standard pool maintenance program ensures your pool is balanced, clean and safe, and that your pool equipment is functioning optimally all year round.</p>
              <table className="checklist-table">
                <tbody>
                  <tr>
                    <td>Water test & Balance</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Adjust Chlorine Output</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Check Pump Basket</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Empty Skimmer Basket</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Check Pool Equipment</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Backwash / Clean Filter</td>
                    <td>&#10004;</td>
                  </tr>
                  <tr>
                    <td>Vacuum pool</td>
                    <td>&#10004;</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </article>
          <article>
            <h1 className="page-heading1">Contact Us!</h1>
            <ContactForm isSideNav={true} id="contact-form" />
          </article>
        </section>
      </Layout>
    </>
    
  )
}

export default servicesPage