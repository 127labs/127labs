import React from 'react'

function MarketingBlocks () {
  return (
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
  )
}

export default MarketingBlocks
