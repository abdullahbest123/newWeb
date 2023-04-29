import React from 'react'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
         <a href='https://www.linkedin.com/in/web-stacking-11aa1626a' target="_blank" rel="noopener noreferrer"   className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
       </a>
     <a href='https://twitter.com/webstacking_' target="_blank" rel="noopener noreferrer"  className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </a>
          {/* <a href='https://twitter.com/webstacking_' target="_blank" rel="noopener noreferrer"   className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
       </a> */}
          <a href='https://www.fiverr.com/web_stacking' target="_blank" rel="noopener noreferrer"  className="cs-center">
        <Icon icon="fa6-brands:slack" />
       </a>
    </Div>
  )
}
