import React from 'react'
import { Link } from 'gatsby'

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import {IconContext} from 'react-icons'

const MyFooter = () => (
  <div className ="container" style={{display: 'flex', justifyContent: 'center'}}>
      <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: '5em' }}>
      <a href="https://twitter.com/bradfordcondon">        <FaTwitter/>
      </a>
      <a href ="https://github.com/bradfordcondon"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/bradford-condon-0843823b/"><FaLinkedin/></a>
        </IconContext.Provider>
    </div>
)

export default MyFooter
