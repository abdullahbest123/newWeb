import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import { Link } from 'react-router-dom';
import Button from '../Button'
import Cta from '../Cta'
// import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import { useLocation } from 'react-router-dom'
import Spacing from '../Spacing'
import portfolioData from '../Portfolio/data'

export default function PortfolioDetailsPage() {
      window.scrollTo(0, 0);
  // const params = useParams()
    const locate = useLocation()
    let length = portfolioData.length;
      let { index ,nextstate} = locate.state
      const next =index+1;
      const prev =index-1;
     if(nextstate === "next")
      index = next%length
    else if(nextstate === "prev"){
      index = prev%length
      if(index === -1)
      {
        index = length-1
      }
    }
      
    console.log(index)
    const portfolio = portfolioData[index]
    const {bigsrc,discription,location,catgeory,stack,date,client } = portfolio
     
  pageTitle('Portfolio Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.portfolioDetailsId}
      /> */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <img src={bigsrc} alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title={stack} 
              subtitle="details:" 
            >
              <Spacing lg='40' md='20'/>
              <p>{discription}</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>{catgeory}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>{location}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Stack:</h3>
                <p className='cs-m0'>{stack}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>{date}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>{client}</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Link href='/portfolio/portfolio-details' state={{index,nextstate: "prev"}}>
              <Button btnText='Prev Project' variant='cs-type1'/>
            </Link>
            </Div>
            <Div>
            <Link href='/portfolio/portfolio-details' state={{index,nextstate: "next"}}>
              <Button btnText='Next Project'/>
              </Link>
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='wstacking@gmail.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
