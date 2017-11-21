import React, { Component } from 'react'
import FormIncidentes from './formIncidentes';
import ListView from './listview';
import '../styles/styles.css'

export default class Incidentes extends Component {
    render() {
        return (
            <div>
                <div className="side">
                    <ListView title="Lista de Incidentes" />
                </div>
                <div className="side">
                    <FormIncidentes />
                </div>
            </div>
        )
    }
}
