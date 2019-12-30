import React from 'react';
import { Box, Text, ResponsiveContext, Image } from 'mnet-ui-base';
import RoutedAnchor from './RoutedAnchor';
import Search from './Search';

export default () => {
  const size = React.useContext(ResponsiveContext);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      width="xlarge"
      alignSelf="center"
      gap="medium"
    >
      <RoutedAnchor
        path="/"
        icon={<Image src="/img/logos/mnetb.svg" />}
        label={size !== 'small' && <Text size="xlarge">BASE UI</Text>}
      />
      <Box direction="row" gap="small">
        <Search open={searchOpen} setOpen={value => setSearchOpen(value)} />
      </Box>
    </Box>
  );
};
