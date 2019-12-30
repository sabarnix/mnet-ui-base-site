import React from 'react';
import { Box, Heading, Paragraph } from 'mnet-ui-base';
import Nav from '../components/Nav';

export default () => (
  <Box>
    <Box pad="large">
      <Nav />
      <Box direction="row">
        <Box margin={{ vertical: 'large' }} basis="medium">
          <Heading level={1}>
            <strong>About</strong>
          </Heading>
          <Paragraph size="large">
            <strong>TBD</strong>
          </Paragraph>
        </Box>
      </Box>
    </Box>
  </Box>
);
