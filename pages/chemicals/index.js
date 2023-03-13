import Layout from "@/components/layout"
import Head from "next/head"
import Image from "next/image"
import ContactForm from "@/components/contactForm"

const chemsPage = () => {
  return (
    <>
      <Head>
        <title>Pool Chemicals - The Pool Dude</title>
        <meta name="description" content="Best friggin pool guys in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
      <section className='hero'>
          <h1 className='page-title'>
            Pool Chemicals
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
            <div className='page-txt'>Sick of spending hundreds each month at a pool shop?</div>
            <div className='page-txt'>Or perhaps you're worried about adulterating your pool with cheap rubbish from the local hardware store?</div>
            <div className='page-txt'>We stock and supply a wide range of only the best quality chemicals and additives for your pool.</div>
            <h2 className='page-heading2'>Our Chemicals...</h2>
            <ul className="page-list">
              <li className="page-list-item">Premium Pool Salt</li>
              <li className="page-list-item">Pool and Spa Mineral Additives</li>
              <li className="page-list-item">pH Balancing Chemicals</li>
              <li className="page-list-item">Liquid, Granular and Stabilised Pool Chlorine</li>
              <li className="page-list-item">Specialty Pool Chemicals</li>
              <li className="page-list-item">Scented Spa Additives</li>
            </ul>
            <section className="subsection">
              <Image 
                className="page-img"
                src='/Pool_pic_3.jpg'
                height={200}
                width={200}
                alt='hero1'
              />
            </section>
          </article>
            <ContactForm isSideNav={true} id="contact-form" />
        </section>
      </Layout>
    </>
  )
}

export default chemsPage