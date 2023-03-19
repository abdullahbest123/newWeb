import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/react.svg',
      alt: 'Partner'
    },
    {
      src: '/images/bootstrap.svg',
      alt: 'Partner'
    },
    {
      src: '/images/css.svg',
      alt: 'Partner'
    },
    {
      src: '/images/xd.svg',
      alt: 'Partner'
    },
    {
      src: '/images/javascript.svg',
      alt: 'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => <div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
