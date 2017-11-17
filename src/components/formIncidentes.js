import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    customWidth: {
        width: 200,
    },
};

const styleButton = {
    margin: 12,
};

export default class FormIncidentes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prioridad: 1,
            tipo: 1
        };
    }

    handleChangeP = (event, index, value) => this.setState({ prioridad: value });

    handleChangeT = (event, index, value) => this.setState({ tipo: value });

    render() {
        return (
            <div>
                <form>
                    <div id="divPrioridad">
                        <SelectField
                            floatingLabelText="Prioridad"
                            value={this.state.prioridad}
                            onChange={this.handleChangeP}
                        >
                            <MenuItem value={1} primaryText="Alta" />
                            <MenuItem value={2} primaryText="Media" />
                            <MenuItem value={3} primaryText="Baja" />
                        </SelectField>
                    </div>
                    <div id="divTipo">
                        <SelectField
                            floatingLabelText="Tipo"
                            value={this.state.tipo}
                            onChange={this.handleChangeT}
                        >
                            <MenuItem value={1} primaryText="Tipo 1" />
                            <MenuItem value={2} primaryText="Tipo 2" />
                            <MenuItem value={3} primaryText="Tipo 3" />
                            <MenuItem value={4} primaryText="Tipo 4" />
                        </SelectField>
                    </div>
                    <div id="divRemitente">
                        <TextField
                            hintText="Remitente"
                        />
                    </div>
                    <div id="divDescripcion">
                        <TextField
                            hintText="Descripcion"
                            fullWidth={true}
                        />
                    </div>
                    <div id="divFechaEnviado">
                        <DatePicker hintText="Fecha enviado" mode="landscape" />
                    </div>
                    <div id="divFechaResuelto">
                        <DatePicker hintText="Fecha resuelto" mode="landscape" />
                    </div>
                    <div id="divAsignacion">
                        <TextField
                            hintText="Asignado"
                        />
                    </div>
                </form>
                <RaisedButton label="Primary" primary={true} style={styleButton} />
            </div>
        )
    }
}
