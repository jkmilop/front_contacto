import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, nombres, apellidos, correo, telefono, celular, direccion } =
      props.location.state.contact;
    this.state = {
      id,
      nombres,
      apellidos,
      correo,
      telefono,
      celular,
      direccion,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({
      nombres: "",
      apellidos: "",
      correo: "",
      telefono: "",
      celular: "",
      direccion: ""
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Nombre</label>
            <input
              type="text"
              name="nombres"
              placeholder="nombres"
              value={this.state.nombres}
              onChange={(e) => this.setState({ nombres: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              placeholder="apellidos"
              value={this.state.apellidos}
              onChange={(e) => this.setState({ apellidos: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Correo</label>
            <input
              type="text"
              name="correo"
              placeholder="correo"
              value={this.state.correo}
              onChange={(e) => this.setState({ correo: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Telefono</label>
            <input
              type="text"
              name="telefono"
              placeholder="telefono"
              value={this.state.telefono}
              onChange={(e) => this.setState({ telefono: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Celular</label>
            <input
              type="text"
              name="celular"
              placeholder="celular"
              value={this.state.celular}
              onChange={(e) => this.setState({ celular: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Direccion</label>
            <input
              type="text"
              name="direccion"
              placeholder="direccion"
              value={this.state.direccion}
              onChange={(e) => this.setState({ direccion: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
