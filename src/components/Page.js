import React from 'react';
import { Box } from 'mnet-ui-base';
import Nav from './Nav';

const Page = ({ children, background }) => (
  <Box pad="large" background={background}>
    <Box>
      <Nav />
      <Box margin={{ top: 'large' }}>{children}</Box>
    </Box>
  </Box>
);

Page.propTypes = Box.propTypes;

export default Page;
