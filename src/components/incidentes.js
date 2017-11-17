import React, { Component } from 'react'
import ListView from './listview';
import '../styles/styles.css'

export default class Incidentes extends Component {
    render() {
        return (
            <div>
                <div className="left-side">
                    <ListView className="left-side" />
                </div>
                <div className="right-side">
                    <ListView className="left-side" />
                </div>
            </div>
        )
    }
}
