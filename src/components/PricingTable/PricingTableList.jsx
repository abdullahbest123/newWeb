import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('shopify')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'shopify' ? "active" : ""} onClick={()=>setTab('shopify')}>Shopify</li>
        <li className={tab === 'react' ? "active" : ""} onClick={()=>setTab('react')}>React</li>
        <li className={tab === 'wordpress' ? "active" : ""} onClick={()=>setTab('wordpress')}>Word Press</li>
        <li className={tab === 'uiux' ? "active" : ""} onClick={()=>setTab('uiux')}>UI/UX</li>
        {//<li className={tab === 'graphic' ? "active" : ""} onClick={()=>setTab('graphic')}>Graphic Designing</li>
}
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='shopify' && (
            <PricingTable 
              title='Silver'
              price='90'
              currency='$'
              timeline='monthly'
              features={['Shopify Store with Free Theme' , '5 Products' , 'Stock Photos' , 'Bug Fix' , 'social medias']}
              btnText='Purchase Now'
              btnLink='https://www.fiverr.com/web_stacking/create-or-customize-a-shopify-store-or-shopify-section'
            />
          )}
          {tab==='react' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='wordpress' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='uiux' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='shopify' && (
            <PricingTable 
              title='Gold'
              price='200'
              currency='$'
              timeline='monthly'
              features={['Shopify Store with Premium Theme' , 'Social Medias' ,'Stock Photos' ,'Products research' , '7-day support']}
              btnText='Purchase Now'
              btnLink='https://www.fiverr.com/web_stacking/create-or-customize-a-shopify-store-or-shopify-section'
            />
          )}
          {tab==='react' && (
            <PricingTable 
              title='Professional'
              price='399'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='wordpress' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='uiux' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='shopify' && (
            <PricingTable 
              title='Platinum'
              price='500'
              currency='$'
              timeline='monthly'
              features={['Custom Design', 'Plugins','Social Medias', 'SEO','Logo','Banner','Products & Suppliers Research','15-day support']}
              btnText='Purchase Now'
              btnLink='https://www.fiverr.com/web_stacking/create-or-customize-a-shopify-store-or-shopify-section'
            />
          )}
          {tab==='react' && (
            <PricingTable 
              title='Ultimate'
              price='599'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='wordpress' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='uiux' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
