import React, { Component } from "react";
import NewNotes from "./newNotes";
import SavedNotes from "./savedNotes";

class Notes extends Component {
    state = {
        notesCount: 0,
        notes: [],
    };

    saveNotes = (note) => {
        let nextState = {
            notesCount: this.state.notesCount + 1,
            notes: [
                ...this.state.notes,
                {
                    id: this.state.notesCount,
                    title: note.title,
                    data: note.body,
                },
            ],
        };

        this.setState(nextState);
    };

    deleteNotes = (id) => {
        let notes = [...this.state.notes.filter((note) => note.id != id)];
        this.setState({ ...this.state, notes });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <h1 className="m-3">My Notes</h1>
                        <SavedNotes
                            notes={this.state.notes}
                            deleteNotes={this.deleteNotes}
                        />
                    </div>
                    <div className="col-6 mt-3">
                        <h1>Add notes</h1>
                        <NewNotes saveNotes={this.saveNotes} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Notes;
