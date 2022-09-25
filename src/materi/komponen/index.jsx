import React from 'react';
import ClassComponent from './pembahasan/ClassComponent.jsx';
import FunctionalComponent from './pembahasan/FunctionComponent.jsx';
export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Meysari" />
        <FunctionalComponent nama="Meysari" />
      </div>
    );
  }
}
