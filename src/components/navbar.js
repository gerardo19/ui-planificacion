import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import '../styles/styles.css'
const inc = <FontIcon className="material-icons">Inc</FontIcon>;
const pro = <FontIcon className="material-icons">Pro</FontIcon>;
const itSR = <FontIcon className="material-icons">SR</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <Paper zDepth={1} c>
                <BottomNavigation selectedIndex={this.state.selectedIndex} className="navBar">
                    <BottomNavigationItem
                        label="Incidentes"
                        icon={inc}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Problemas"
                        icon={pro}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="It service Request"
                        icon={itSR}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNavigationExampleSimple;