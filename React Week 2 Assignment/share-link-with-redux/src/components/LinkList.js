import React from 'react';
import logo from '../logo.svg';
import Link2 from './Link';
import Search from './Search';
import AddForm from './AddForm';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addLinkThunk,
    loadLinkThunk,
clearLinkThunk } from '../redux/actions';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class LinkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: [],
            modal: false
        };
    };

    componentDidMount(){
        this.props.apiLinkMDP();
        if (this.props.stuff) {
            let newArray = [];
            for (let i = 0; i < this.props.stuff.length; i++) {newArray.push(false);}
            this.setState({hidden: newArray});
        }
    };

    // componentDidUpdate(){
    //     let obj = {stuff: [...this.props.stuff]};
    //     let json = JSON.stringify(obj);
    //     localStorage.setItem('json',json);
    // };

    toggle = () => {
        let modal = !(this.state.modal);
        this.setState({modal: modal});
    }

    deleteLink(i) {
        this.props.clearLinkMDP(i);
        let newArray2 = [...this.state.hidden];
        newArray2.splice(i,1);
        let obj = {hidden: newArray2};
        this.setState(obj);
    }

    handleChange = (event) => {
        let str = event.target.value.toUpperCase();
        let newArray = [];
        for (let i = 0; i < this.props.stuff.length; i++) {
            if (str) {
                let flag = true;
                if (this.props.stuff[i].url.toUpperCase().includes(str)) {flag = false};
                if (this.props.stuff[i].title.toUpperCase().includes(str)) {flag = false};
                for (let j = 0; j < this.props.stuff[i].tags.length; j++) {
                    if (this.props.stuff[i].tags[j].toUpperCase().includes(str)) {flag = false};
                }
                newArray.push(flag);
            } else {
                newArray.push(false);
            };
        }
        this.setState({hidden: newArray});
    }

    insertLink = (event) => {
        event.preventDefault();
        let tags = [];
        for (let i = 0; i < event.target.tag.length; i++) {
            tags.push(event.target.tag[i].value);
        }
        let obj = {
            title: event.target.title.value,
            url: event.target.url.value,
            tags: JSON.stringify(tags)
        };
        this.props.addLinkMDP(obj);
    }

    render() {
        return (
        <div className="row">
        <div className="col-4 App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>King of JS{this.props.name ? " - " + this.props.name : ""}</h2>
        <p>{this.props.stuff.length} favourite {this.props.stuff.length > 1 ? "links" : "link"}</p>
        </div>
        <div className="col-8 App-body">
        <BrowserRouter>
            <Link to="/show">Show Links</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/add">Add Link</Link>
            <br/><br/>
            <Switch>
                <Route exact path="/show">
                    <Search handleChange={this.handleChange}/>
                    <p/>
                    {this.props.stuff.map((thing, index)=>
                    (<Link2 hidden={this.state.hidden[index]} url={thing.url} title={thing.title} tags={thing.tags} key={index}
                        removeLink={() => this.deleteLink(index)}/>)
                    )}
                    <br/>
                </Route>
                <Route exact path="/add">
                    <button onClick={this.toggle}>Add Link</button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Link</ModalHeader>
                    <ModalBody>
                    <AddForm insertLink={this.insertLink}/>
                    <br/>
                    </ModalBody>
                    <ModalFooter/>
                    </Modal>
                </Route>
            </Switch>
        </BrowserRouter>
        </div>
        </div>);
    };
};

// example usage: <LinkList name="Alex" />

const mapStateToProps = (state) => {
    return {
        stuff: state.stuff,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addLinkMDP: (obj) => dispatch(addLinkThunk(obj)),
      clearLinkMDP: (index) => dispatch(clearLinkThunk(index)),
      apiLinkMDP: () => dispatch(loadLinkThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);