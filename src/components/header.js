import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import FontAwesome from "react-fontawesome"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

// const MySocials = styled.a`
//   width: 100%,
//   height: 20px;
//   display: flex;
//   alignItems: center;
//   justifyContent: center;
//   overflow: hidden;
// `

// const GitHubLink = styled.a`
//   color: black;
//   margin-left: 15px;
//   text-decoration: none;
//   display: inline-block;
//   position: relative;

//   ::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     transform: scaleX(0);
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.8);
//     transform-origin: bottom right;
//     transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
//   }

//   :hover::after {
//     transform: scaleX(1);
//     transform-origin: bottom left;
//   }
// `

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`
// const socialSites = [
//   {
//     url: "https://github.com/maffsojah",
//     icon: "github",
//     text: "Connect with me.",
//   },
//   {
//     url: "https://twitter.com/maffsojah",
//     icon: "twitter",
//     text: "Follow me.",
//   },
//   {
//     url: "mailto:maffsojah1@gmail.com",
//     icon: "email",
//     text: "Drop an email",
//   },
// ]

// const SocialLink = ({ url, icon, text }) => (
//   <a href={url}>
//     <FontAwesome name={icon} size="3px" />
//     <span>{text}</span>
//   </a>
// )

// SocialLink.propTypes = {
//   url: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// }

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">Home</HomeLink>
        <NavLink to="/blog">Blog</NavLink>{" "}
        <NavLink to="/about">About Me</NavLink>{" "}
        {/* <GitHubLink href="https://github.com/maffsojah/maffsojah.co.zw">
          {" "}
          GitHub{" "}
        </GitHubLink>{" "} */}
      </p>{" "}
      {/* <div>
        {socialSites.map(s => (
          <SocialLink url={s.url} icon={s.icon} text={s.text} key={s.url} />
        ))}
      </div> */}
    </Content>{" "}
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
