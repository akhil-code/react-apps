import React, { Component } from "react";
class SavedNotes extends Component {
    render() {
        return (
            <div className="row m-1 col-10">
                {this.props.notes.map((note) => (
                    <div key={note.id}>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id={"heading-" + note.id}
                                >
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={"#collapse-" + note.id}
                                        aria-expanded="false"
                                        aria-controls={"collapse-" + note.id}
                                    >
                                        {note.title}
                                    </button>
                                </h2>
                                <div
                                    id={"collapse-" + note.id}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={"heading-" + note.id}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>{note.data}</p>
                                        <div className="row">
                                            <button
                                                className="btn btn-danger col-6"
                                                onClick={() =>
                                                    this.props.deleteNotes(
                                                        note.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SavedNotes;
