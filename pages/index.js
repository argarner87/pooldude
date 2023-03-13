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
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Layout>
        <section className='hero'>
          <h1 className='page-title'>
            Professional <br /><br /> Reliable <br /><br /> Affordable
            <br />
            <br />
            <br />
            <br />
            <span className="no-wrap">Pool Care</span>
            <br /><br />
            <span className="no-wrap">Done Your Way</span>
          </h1>
          <video 
            className='homepg-hero-video hero-video'
            layout="fill"
            objectFit="cover"
            objectPosition="center"
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
          <ContactForm isSideNav={true} id="contact-form" />
        </section>

      </Layout>
    </>
  )
}
