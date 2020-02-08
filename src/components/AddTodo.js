import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    kegiatan: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.kegiatan);
    this.setState({
      kegiatan: ""
    });
  };

  onChange = e =>
    this.setState({
      kegiatan: e.target.value
    });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: "flex"
        }}
      >
        <input
          type="text"
          name="kegiatan"
          onChange={this.onChange}
          value={this.state.kegiatan}
          placeholder="Tambahkan kegiatan!"
          style={{
            flex: "10",
            padding: "5px"
          }}
        />
        <input
          type="Submit"
          name="Submit"
          value="Submit"
          className="btn"
          style={{
            flex: "1"
          }}
        />{" "}
      </form>
    );
  }
}

export default AddTodo;