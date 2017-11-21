import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

export default class Navbar extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <List>
                    <Subheader>{this.props.title}</Subheader>
                    <ListItem
                        leftAvatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTFStUhVn8GF9cF-uBc7UiJFoFgBKr4M-1ALPB-jPbFPha-zn" />}
                        primaryText="Lorem ipsum dolor sit amet"
                        secondaryText={
                            <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="https://previews.123rf.com/images/mindscanner/mindscanner1511/mindscanner151100017/48207595-Wordcloud-con-etiquetas-de-Manejo-de-Incidentes-Foto-de-archivo.jpg" />}
                        primaryText={
                            <p>Lorem ipsum dolor sit amet</p>
                        }
                        secondaryText={
                            <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="http://arandasoft.com/wp-content/uploads/2016/09/service-desk-mucho-mas-que-soporte-a-usuarios-y-solucion-de-incidentes.png" />}
                        primaryText="Lorem ipsum dolor sit amet"
                        secondaryText={
                            <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLCeQ1CIMpdw6HfsiRLHtj_fmjPwj1KtHT_BpqBddDSLly8C-" />}
                        primaryText="Lorem ipsum dolor sit amet"
                        secondaryText={
                            <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        }
                        secondaryTextLines={2}
                    />
                </List>
                <RaisedButton label="Guardar" primary={true} style={style} />
            </div>
        );
    }
}

