import React from "react";

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    addTagButton = (event) => {
        event.preventDefault();
        let container = document.getElementsByClassName("tag")[0];
        let input = document.createElement("input");
        input.type = "text";
        input.name = "tag";
        container.append(input);
    }

    render() {
        return (<>
        <form onSubmit={this.props.insertLink}>
            <div>
                Title:&nbsp;<input type="text" name="title"></input>
            </div>
            <div>
                URL:&nbsp;<input type="text" name="url"></input>
            </div>
            <div>
            <span className="tag">
                Tag:&nbsp;
                <button onClick={this.addTagButton}>Add Tag</button>
                <input type="text" name="tag"></input>
            </span>
            </div>
            <input type="submit" value="Submit"/>
        </form>
        </>);
    }
}

// example usage: <AddForm insertLink={() => this.} />