import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/layout'
import ContactForm from '@/components/contactForm'
import ItemGrid from '@/components/itemGrid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Pool Dude</title>
        <meta name="description" content="Best friggin pool guys in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/PDPL.ico" />
      </Head>

      <Layout>
        <section className='hero'>
          <div className="hero-txt">
            <h1 className='page-title'>
              Professional <br /> Reliable <br /> Affordable
            </h1>
            <h1 className="page-title">
              <span className="no-wrap">Pool Care</span>
              <br />
              <span className="no-wrap">Done Your Way</span>
            </h1>            
          </div>
          <video 
            className='homepg-hero-video hero-video'
            layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            autoPlay 
            loop 
            muted={true} 
            src="/home_vid.mp4" 
            controls={false}
            width={800}
            height={600}
            
          />
        </section>
        <section className="page-body">
          <article className='page-body-content'>
            <h1 className='page-heading1'>Stuff We Do:</h1>
            <ItemGrid />
          </article>
        </section>
          <ContactForm isSideNav={true} id="contact-form" />

      </Layout>
    </>
  )
}
