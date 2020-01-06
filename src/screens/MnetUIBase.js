import React from 'react';

import { MnetUIBase } from 'mnet-ui-base';
import { Grommet as GrommetIcon } from 'grommet-icons';
import { doc, themeDoc } from 'mnet-ui-base/components/MnetUIBase/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(MnetUIBase).toJSON();

export default () => (
  <Page>
    <Doc
      name="MnetUIBase"
      desc={desc}
      code={`<MnetUIBase
  theme={{ global: { colors: { doc: '#ff99cc' } } }}
>
  <Box pad="large" background="doc" />
</MnetUIBase>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const MnetUIBaseItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <GrommetIcon color="brand" size="xlarge" />
  </Item>
);

MnetUIBaseItem.propTypes = Item.propTypes;
