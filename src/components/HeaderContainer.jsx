import React from 'react'
import IndexIntro from './IndexIntro'
import SocialLinks from './SocialLinks'

const HeaderContainer = () => {
  return (
    <div>
        <div class="container-fluid" id="header">
            <IndexIntro />
            <SocialLinks />
        </div>
    </div>
  )
}

export default HeaderContainer