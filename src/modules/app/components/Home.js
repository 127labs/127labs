import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home () {
  return (
    <div className='home'>
      <Header>
        <h1>Our Best Practices At Your Disposal</h1>
      </Header>
      <section className='marketing-blocks section flex flex--col-4'>
        <figure className='marketing-block'>
          <div className='marketing-block__image marketing-block__image--research' style={{backgroundImage: `url(${require('assets/images/research.svg')}`}} />
          <h3>RESEARCH</h3>
        </figure>
        <figure className='marketing-block'>
          <div className='marketing-block__image' style={{backgroundImage: `url(${require('assets/images/create.svg')}`}} />
          <h3>CREATE</h3>
        </figure>
        <figure className='marketing-block'>
          <div className='marketing-block__image' style={{backgroundImage: `url(${require('assets/images/manage.svg')}`}} />
          <h3>MANAGE</h3>
        </figure>
        <figure className='marketing-block'>
          <div className='marketing-block__image' style={{backgroundImage: `url(${require('assets/images/empower.svg')}`}} />
          <h3>EMPOWER</h3>
        </figure>
      </section>
      <section className='section marketing-section marketing-section--flipped-sm flex flex--col-2'>
        <div className='marketing-section__blurb blurb'>
          <h3 className='blurb__title'>
            ALWAYS BE TESTING
          </h3>
          <p className='blurb__description'>
            We spend time directly with your users, and prototype on paper and whiteboards, to quickly test our hypotheses.
          </p>
          <p className='blurb__description'>
            Our aim is for every decision we make to be validated. Usability testing is done weekly, to rapidly evaluate and assess features and functions, ensuring that your product is always on the right track.
          </p>
        </div>
        <img src={require('assets/images/always-test.svg')} alt='Always Be Testing' className='marketing-section__image' />
      </section>
      <section className='section marketing-section flex flex--col-2'>
        <div>
          <img src={require('assets/images/trinity.png')} alt='Always Be Testing' className='marketing-section__image' />
        </div>
        <div className='blurb'>
          <h3 className='blurb__title'>
            RED. GREEN. REFACTOR
          </h3>
          <p className='blurb__description'>
            Everything we build passes a suite of automated and manual tests.
          </p>
          <p className='blurb__description'>
            This allows us to focus on new features (instead of bugs) and gives you the confidence to evolve and adapt.
          </p>
          <p className='blurb__description'>
            Through test-driven development, the products we build are always reliable and flexible.
          </p>
        </div>
      </section>
      <section className='build-with-us-section'>
        <div className='slant slant--full-top' />
        <div className='section flex flex--col-2 flex--jc-center flex--ai-center'>
          <div>
            <img src={require('assets/images/iphone.png')} alt='Always Be Testing' className='build-with-us-section__iphone hidden--sm' />
          </div>
          <div>
            <h3 className='text--alt'>BUILD WITH US</h3>
            <p>With the internet becoming the commonplace these days you can't help but to move your business online.</p>
            <p>May it be your internal operations or your product, this is where we come in.</p>
            <p>We visualise your ideas and realise it for you end to end.</p>
            <p>We are here to build battle tested, fault-tolerant and beautiful softwares</p>
            <div style={{marginTop: '4rem'}}>
              <a href='#' className='btn btn--outline-light text--uppercase' style={{marginRight: '1rem'}}>Contact Us</a>
              <a href='#' className='btn btn--primary text--uppercase'>Development Process</a>
            </div>
          </div>
        </div>
        <div className='slant slant--full slant--full-dark' />
      </section>
      <Footer>
        <a href='#' className='btn btn--outline-light text--uppercase'>Send Us An Inquiry</a>
      </Footer>
    </div>
  )
}

export default Home
