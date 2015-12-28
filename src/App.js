import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { MyThemeMixin } from './customTheme'

export const App = React.createClass({
  mixins: [MyThemeMixin],
  render() {
    return (
      <div>
        <h1>Empty App!</h1>
        <RaisedButton label="Yo" primary={true}/>
      </div>
    );
  }
});
