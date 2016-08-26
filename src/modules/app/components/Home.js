import React from 'react'

function Home () {
  return (
    <div className='home'>
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
            We engage directly with your users, and prototype on paper and whiteboards, to quickly test our hypotheses.
          </p>
          <p className='blurb__description'>
            Our goal is for every decision we make to be validated. Usability testing is of utmost important and is done weekly, to rapidly evaluate and assess features and functions, ensuring that your product is always on the right track.
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
            We are heavy on tests, anything we build must pass through a suite of automated and manual tests.
          </p>
          <p className='blurb__description'>
            This helps us to focus on new features (instead of bugs) and gives you the confidence to evolve and adapt.
          </p>
          <p className='blurb__description'>
            Through this practice, the products we craft are always reliable and flexible.
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
              <a href='mailto:team@127labs.com?Subject=Hello,%20127%20Labs' target='_top' className='btn btn--outline-light text--uppercase' style={{marginRight: '1rem'}}>Contact Us</a>
              { /* <a href='#' className='btn btn--primary text--uppercase'>Development Process</a> */ }
            </div>
          </div>
        </div>
        <div className='slant slant--full slant--full-dark' />
      </section>
    </div>
  )
}

export default Home
