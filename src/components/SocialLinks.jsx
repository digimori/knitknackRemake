import React from 'react'

const SocialLinks = () => {
  return (
    <div>
         <div class="col-md-4 col-sm-12 social">
          <ul class="list-inline social-links">
            <li class="list-inline-item">
              <a target="_blank" href="https://www.facebook.com" aria-label="Link to Facebook page (Opens in new tab)">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" href="https://www.twitter.com" aria-label="Link to Twitter page (opens in new tab)">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <span class="sr-only">Twitter</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" href="https://www.instragram.com"
                aria-label="Link to Instagram page (opens in new tab)">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" href="https://www.pinterest.com"
                aria-label="Link to Pinterest page (opens in new tab)">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
                <span class="sr-only">Pinterest</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" href="https://www.youtube.com" aria-label="Link ot Youtube channel (opens in new tab)">
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <span class="sr-only">Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default SocialLinks