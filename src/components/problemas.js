import React from 'react';
import FormProblemas from './formProblemas';
import ListView from './listview';
import '../styles/styles.css'

export default class Problemas extends React.Component {
  render() {
    return (
      <div>
        <div className="side">
          <ListView />
        </div>
        <div className="side">
          <FormProblemas />
        </div>
      </div>
    )
  }
}