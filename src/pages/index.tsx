import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  color: #555;
  margin-top: 3.75rem;
`;

const IndexPage = () => (
  <Layout>
    <Page>
      <Heading>Pagepro Website</Heading>
    </Page>
  </Layout>
);

export default IndexPage;
