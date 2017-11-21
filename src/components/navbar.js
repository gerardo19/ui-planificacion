import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import '../styles/styles.css'
import { Divider } from 'material-ui/Divider';
const inc = <FontIcon className="material-icons">Inc</FontIcon>;
const pro = <FontIcon className="material-icons">Pro</FontIcon>;
const itSR = <FontIcon className="material-icons">SR</FontIcon>;

class BottomNavigationExampleSimple extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper zDepth={1} >
                <BottomNavigation selectedIndex={this.props.selectedIndex} className="navBar">
                    <BottomNavigationItem
                        label="Incidentes"
                        icon={inc}
                        onClick={() => this.props.select(0)}
                    />
                    <BottomNavigationItem
                        label="Problemas"
                        icon={pro}
                        onClick={() => this.props.select(1)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNavigationExampleSimple;