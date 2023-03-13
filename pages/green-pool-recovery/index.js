import Layout from "@/components/layout"
import Head from "next/head"
import Image from "next/image"
import ContactForm from "@/components/contactForm"

const greenPoolCleanupPage = () => {
  return (
    <>
      <Head>
        <title>Green Pool Recovery - The Pool Dude</title>
        <meta name="description" content="Best friggin pool guys in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
      <section className='hero'>
          <h1 className='page-title'>
            Green Pool Recovery
          </h1>
          <Image 
            className='hero-img'
            src="/Pool_pic_2.jpg" 
            width={800}
            height={600}
            alt='hero'
          />
        </section>
        <section className="page-body">
          <article className='page-body-content'>
            <div className='page-txt'>Does your pool look more like a mosquito-infested swamp than a swimming pool?</div>
            <div className='page-txt'>We are experts in bringing your backyard oasis back to its former glory.</div>
            <div className='page-txt'>Our minimum-chemical, tried-and-true approach to green pool recovery will ensure the best result, at a very competitative cost and in a timely manner.</div>
            <section className="subsection">
              <h1 className='page-heading1'>Some of Our Work...</h1>
              <Image 
                className="page-img"
                src='/Pool_pic_3.jpg'
                height={200}
                width={200}
                alt=''
              />
              <Image 
                className="page-img"
                src='/Pool_pic_4.jpg'
                height={200}
                width={200}
                alt=''
              />
              <Image 
                className="page-img"
                src='/Pool_pic_5.jpg'
                height={200}
                width={200}
                alt=''
              />
            </section>
          </article>
          <ContactForm isSideNav={true} id="contact-form" />
        </section>
      </Layout>
    </>
  )
}

export default greenPoolCleanupPage