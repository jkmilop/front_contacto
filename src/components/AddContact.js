import React from "react";

class AddContact extends React.Component {
  state = {
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    celular: "",
    direccion: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.nombres === "" ||
      this.state.apellidos === "" ||
      this.state.correo === "" ||
      this.state.telefono === "" ||
      this.state.celular === "" ||
      this.state.direccion === ""
    ) {
      alert("Debes llenar todos los campos");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({
      nombres: "",
      apellidos: "",
      correo: "",
      telefono: "",
      celular: "",
      direccion: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Agregar Contacto</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nombre</label>
            <input
              type="text"
              name="nombres"
              value={this.state.nombres}
              onChange={(e) => this.setState({ nombres: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={this.state.apellidos}
              onChange={(e) => this.setState({ apellidos: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Correo</label>
            <input
              type="text"
              name="correo"
              value={this.state.correo}
              onChange={(e) => this.setState({ correo: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Telefono</label>
            <input
              type="text"
              name="telefono"
              value={this.state.telefono}
              onChange={(e) => this.setState({ telefono: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Celular</label>
            <input
              type="text"
              name="celular"
              value={this.state.celular}
              onChange={(e) => this.setState({ celular: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Direccion</label>
            <input
              type="text"
              name="direccion"
              value={this.state.direccion}
              onChange={(e) => this.setState({ direccion: e.target.value })}
            />
          </div>
          <button className="ui button blue">Agregar</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
