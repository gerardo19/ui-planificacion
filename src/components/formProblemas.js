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

export default class FormProblemas extends Component {

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
          <label>Problema número: 10 </label>
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
          <div id="divEstado">
            <SelectField
                floatingLabelText="Estado del problema"
                value={this.state.tipo}
                onChange={this.handleChangeT}
              >
                <MenuItem value={1} primaryText="Abierto" />
                <MenuItem value={2} primaryText="En proceso" />
                <MenuItem value={3} primaryText="Cerrado" />
                <MenuItem value={4} primaryText="Cancelado" />
              </SelectField>
          </div>
          <div id="divIncidenteAsociado">
            <TextField
              hintText="Incidente Asociado"
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
          <div id="divWorkaround">
            <TextField
              hintText="Workaround"
              fullWidth={true}
            />
          </div>  
          <div id="divAsignacion">
            <TextField
              hintText="Asignado a:"
            />
          </div>
        </form> 
        <RaisedButton label="Guardar" primary={true} style={styleButton} />
      </div>
    )
  }
}
