import React from 'react';
import FormProblemas from './formProblemas';
import ListView from './listview';
import '../styles/styles.css'

export default class Problemas extends React.Component {
  render() {
    return (
      <div>
        <div className="side">
          <ListView title="Lista de Problemas"/>
        </div>
        <div className="side">
          <FormProblemas />
        </div>
      </div>
    )
  }
}