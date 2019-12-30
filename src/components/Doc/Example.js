import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'mnet-ui-base';

export const Example = ({ example }) => (
  <Box alignSelf="center" align="center" pad="medium" margin={{ top: 'large' }}>
    {example}
  </Box>
);

Example.propTypes = {
  example: PropTypes.node.isRequired,
};
