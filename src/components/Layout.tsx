import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyles from '../common/GlobalStyles';

const App = styled.div``;

const Layout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} />
        <GlobalStyles />
        <App>{children}</App>
      </>
    )}
  />
);

export default Layout;
