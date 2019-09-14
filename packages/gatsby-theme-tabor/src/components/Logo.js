import React from 'react';
import { Link } from 'gatsby';
import wpgraphqlLogo from '../images/wpgraphql-logo.png';

const Logo = ({ data }) => (
  <Link to="/" className="custom-logo-link site-logo" rel="home" itemProp="url">
    <img
      src={wpgraphqlLogo}
      alt="WPGraphQL Logo"
      width="150"
      height="150"
      className="custom-logo initial loaded"
      alt={data.site.siteMetadata.title}
      itemProp="logo"
    />
  </Link>
);

export default Logo;
