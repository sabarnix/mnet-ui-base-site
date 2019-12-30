import React from 'react';

import { FormField, TextInput } from 'mnet-ui-base';
import { doc, themeDoc } from 'mnet-ui-base/components/FormField/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(FormField).toJSON();

export default () => (
  <Page>
    <Doc
      name="FormField"
      desc={desc}
      code={`<FormField label="Field label">
  <TextInput placeholder="type here" />
</FormField>`}
      themeDoc={themeDoc}
    />
  </Page>
);

export const FormFieldItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <FormField label="Label">
      <TextInput placeholder="value" />
    </FormField>
  </Item>
);

FormFieldItem.propTypes = Item.propTypes;
