import React from 'react';
import URLSearchParams from 'url-search-params';
import { Grommet } from 'mnet-ui-base';
import { mnet, dark } from 'mnet-ui-base/themes';
import { Router } from './Router';
import Analytics from './components/Analytics';
import Content from './components/Content';

const THEMES = {
  mnet,
  dark,
};

export default () => {
  const [themeName, setThemeName] = React.useState('mnet');
  const [search, setSearch] = React.useState();

  React.useEffect(() => {
    if (window.location.search) {
      const {
        location: { search: nextSearch },
      } = window;
      const params = new URLSearchParams(nextSearch);
      setSearch(nextSearch);
      setThemeName(params.get('theme'));
    }
  }, []);

  return (
    <Router search={search}>
      <Analytics>
        <Grommet theme={THEMES[themeName || 'mnet']}>
          <Content />
        </Grommet>
      </Analytics>
    </Router>
  );
};
