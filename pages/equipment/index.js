import Layout from "@/components/layout"
import Head from "next/head"
import Image from "next/image"
import ContactForm from "@/components/contactForm"

const servicesPage = () => {
  return (
    <>
      <Head>
        <title>Pool Equipment & Spares - The Pool Dude</title>
        <meta name="description" content="Best friggin pool guys in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
      <section className='hero'>
          <h1 className='page-title'>
            Pool Equipment & Spares
          </h1>
          <Image 
            className='hero-img'
            src="/Pool_pic_5.jpg" 
            width={800}
            height={600}
            alt='hero'
          />
        </section>
        <section className="page-body">
          <article className='page-body-content'>
            <div className='page-txt'>Is your chlorinator not producing?</div>
            <div className='page-txt'>Maybe your filter cartridge is old and needs replacing.</div>
            <div className='page-txt'>Or possibly you&apos;re looking at various heating options?</div>
            <div className='page-txt'>Perhaps you just have a broken skimmer basket?</div>
            <div className='page-txt'>We are experts in troubleshooting problems and we can supply and install solutions both big and small for almost any issue you may have.</div>
            <div className='page-txt'>Unlike most big franchises, we are able to shop around with our many suppliers to find better prices, better brands and items that are a guaranteed fit for your desired application.</div>
            <h2 className='page-heading2'>Ask us about...</h2>
            <ul className="page-list">
              <li className="page-list-item">Replacing noisy pool pumps and diagnosing water flow issues</li>
              <li className="page-list-item">Upgrading to an energy-saving, variable speed pool pump</li>
              <li className="page-list-item">Diagnosing chlorine production issues, including supply and fit of replacement cell for any chlorinator type</li>
              <li className="page-list-item">Sand filter media testing and upgrading to new glass media technology</li>
              <li className="page-list-item">Our wide range of pool heating solutions, including solar heating, gas heaters, electric heat pumps and solar pool blankets</li>
              <li className="page-list-item">Miscellaneous spare part replacements</li>
            </ul>
            {/* <section className="subsection">
              <Image 
                className="page-img"
                src='/Pool_pic_3.jpg'
                height={200}
                width={200}
              />
            </section> */}
          </article>
            <ContactForm isSideNav={true} id="contact-form" />
        </section>
      </Layout>
    </>
  )
}

export default servicesPage