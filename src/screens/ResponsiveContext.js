import React from 'react';

import { Box } from 'mnet-ui-base';
import { ResponsiveContext } from 'mnet-ui-base/contexts';
import { doc, themeDoc } from 'mnet-ui-base/contexts/ResponsiveContext/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(ResponsiveContext.Consumer).toJSON();

export default () => (
  <Page>
    <Doc
      name="ResponsiveContext"
      title="Responsive Context"
      desc={desc}
      themeDoc={themeDoc}
      code={`function Example() {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box pad="medium">
      <Text>{size}</Text>
    </Box>
  );
}`}
    />
  </Page>
);

export const ResponsiveContextItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box direction="row" align="end" gap="xsmall">
      <Box align="center">
        <Box
          border={{ color: 'brand', size: 'medium' }}
          round="small"
          pad={{ horizontal: 'xlarge', vertical: 'large' }}
        />
        <Box background="brand" pad="small" />
      </Box>
      <Box
        border={{ color: 'brand', size: 'medium' }}
        round="xsmall"
        pad={{ horizontal: 'small', vertical: 'medium' }}
      />
    </Box>
  </Item>
);

ResponsiveContextItem.propTypes = Item.propTypes;
