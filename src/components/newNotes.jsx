import React, { Component } from "react";

class NewNotes extends Component {
    state = {
        body: "",
        title: "",
    };

    handleTitleChange = (event) => {
        this.setState({ ...this.state, title: event.target.value });
    };

    handleBodyChange = (event) => {
        this.setState({ ...this.state, body: event.target.value });
    };

    handleSaveNotes = (event) => {
        this.props.saveNotes(this.state);
        this.setState({ body: "", title: "" });
        event.preventDefault();
    };

    handleCancel = (event) => {
        this.setState({ body: "", title: "" });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form>
                    <div className="row mt-4">
                        <input
                            type="text"
                            className="col-8"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />

                        <textarea
                            name="body"
                            value={this.state.body}
                            onChange={this.handleBodyChange}
                            className="col-8 mt-3"
                            placeholder="Write down your notes here....."
                        />
                    </div>
                    <div className="row mt-4">
                        <button
                            type="submit"
                            className="btn btn-success col-2"
                            onClick={this.handleSaveNotes}
                        >
                            Save notes
                        </button>
                        <button
                            onClick={this.handleCancel}
                            className="btn btn-danger col-2 ms-3"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewNotes;
