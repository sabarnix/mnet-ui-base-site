import React from 'react';

import { Collapsible } from 'mnet-ui-base';
import { Shift } from 'grommet-icons';
import { doc, themeDoc } from 'mnet-ui-base/components/Collapsible/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(Collapsible).toJSON();

export default () => (
  <Page>
    <Doc name="Collapsible" desc={desc} themeDoc={themeDoc} />
  </Page>
);

export const CollapsibleItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Shift color="brand" size="xlarge" />
  </Item>
);

CollapsibleItem.propTypes = Item.propTypes;
