import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  window.open('https://github.com/Tan-Moy');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Simple Markdown Editor</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
  />
);

export default AppBarExampleIconButton;