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

    handleChangeT = (event, index, value) => {
        this.setState({ tipo: value })
    };

    handleChangeSubCat = (event, index, value) => {
        alert(event.toString());
    }

    render() {
        return (
            <div>
                <form>
                    <div id="divRemitente">
                        <TextField
                            hintText="Número de incidente"
                        />
                    </div>
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
                            floatingLabelText="Categoría"
                            value={this.state.tipo}
                            onChange={this.handleChangeT}
                        >
                            <MenuItem value={1} primaryText="Seguridad" />
                            <MenuItem value={2} primaryText="Ayuda" />
                            <MenuItem value={3} primaryText="Software" />
                            <MenuItem value={4} primaryText="Hardware" />
                            <MenuItem value={5} primaryText="Redes" />
                            <MenuItem value={6} primaryText="Bases de Datos" />
                        </SelectField>
                    </div>
                    <div id="divTipo">
                        <SelectField
                            floatingLabelText="Subcategoría"
                            value={this.state.tipo}
                            onChange={this.handleChangeSubCat}
                        >
                            <MenuItem value={1} primaryText="sub Seguridad" />
                            <MenuItem value={2} primaryText="sub Ayuda" />
                            <MenuItem value={3} primaryText="sub Software" />
                        </SelectField>
                    </div>
                    <div id="divRemitente">
                        <TextField
                            hintText="Remitente"
                        />
                    </div>
                    <div id="divEstado">
                        <SelectField
                            floatingLabelText="Estado del incidente"
                            value={this.state.prioridad}
                            onChange={this.handleChangeP}
                        >
                            <MenuItem value={1} primaryText="Abierto" />
                            <MenuItem value={2} primaryText="En proceso" />
                            <MenuItem value={3} primaryText="Resuelto" />
                            <MenuItem value={2} primaryText="Cerrado" />
                            <MenuItem value={3} primaryText="Cancelado" />
                        </SelectField>
                    </div>
                    <div id="divDescripcion">
                        <TextField
                            hintText="Descripcion"
                        />
                    </div>
                    <div id="divMsjRespuesta">
                        <TextField
                            hintText="Mensaje de respuesta"
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
                            hintText="Asignado a: "
                        />
                    </div>
                </form>
                <RaisedButton label="Guardar" primary={true} style={styleButton} />
            </div>
        )
    }
}
