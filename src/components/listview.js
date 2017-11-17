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
    

    render() {
        return (
            <div>
                <List>
                    <Subheader>Hoy</Subheader>
                    <ListItem
                        leftAvatar={<Avatar src="https://tinyclipart.com/resource/man/man-1.jpg" />}
                        primaryText="Brunch this weekend?"
                        secondaryText={
                            <p>
                                <span style={{ color: darkBlack }}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dunn_Official_Headshot.jpg/220px-Dunn_Official_Headshot.jpg" />}
                        primaryText={
                            <p>Summer BBQ&nbsp;&nbsp;<span style={{ color: lightBlack }}>4</span></p>
                        }
                        secondaryText={
                            <p>
                                <span style={{ color: darkBlack }}>to me, Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="http://www.alstoncomputerservices.com/wp-content/uploads/2013/10/smiling-woman.jpg" />}
                        primaryText="Oui oui"
                        secondaryText={
                            <p>
                                <span style={{ color: darkBlack }}>Grace Ng</span> --
                  Do you have Paris recommendations? Have you ever been?
                </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="https://i.pinimg.com/originals/28/29/94/2829941260500a1cd3bdd5127876c271.jpg" />}
                        primaryText="Birdthday gift"
                        secondaryText={
                            <p>
                                <span style={{ color: darkBlack }}>Kerem Suer</span> --
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
                        }
                        secondaryTextLines={2}
                    />
                </List>
                <RaisedButton label="Primary" primary={true} style={style} />
            </div>
        );
    }
}

