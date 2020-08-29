import React from 'react';
import logo from '../logo.svg';
import Link from './Link';
import Search from './Search';
import AddForm from './AddForm';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class LinkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stuff: [
                {
                    url: "https://google.com",
                    title: "Google",
                    tags: ["Search","Apps","Map","News"]
                },
                {
                    url: "https://hk.yahoo.com/",
                    title: "Yahoo HK",
                    tags: ["Index","News","Search","HK"]
                },
                {
                    url: "https://www.biglobe.ne.jp/",
                    title: "ビッグローブ",
                    tags: ["Index","Japan"]
                },
                {
                    url: "https://www.bouncingscout.com",
                    title: "My Project",
                    tags: ["Swearing","Explicit","Offensive","Indecency"]
                }
            ],
            hidden: [],
            modal: false
        };
    };

    componentDidMount(){
        let json = localStorage.getItem('json');
        let obj = JSON.parse(json);
        this.setState(obj);
        if (obj) {
            let newArray = [];
            for (let i = 0; i < obj.stuff.length; i++) {newArray.push(false);}
            this.setState({hidden: newArray});
        }
    };

    componentDidUpdate(){
        let obj = {stuff: [...this.state.stuff]};
        let json = JSON.stringify(obj);
        localStorage.setItem('json',json);
    };

    toggle = () => {
        let modal = !(this.state.modal);
        this.setState({modal: modal});
    }

    deleteLink(i) {
        let newArray = [...this.state.stuff];
        let newArray2 = [...this.state.hidden];
        newArray.splice(i,1);
        newArray2.splice(i,1);
        let obj = {stuff: newArray, hidden: newArray2};
        this.setState(obj);
    }

    handleChange = (event) => {
        let str = event.target.value.toUpperCase();
        let newArray = [];
        for (let i = 0; i < this.state.stuff.length; i++) {
            if (str) {
                let flag = true;
                if (this.state.stuff[i].url.toUpperCase().includes(str)) {flag = false};
                if (this.state.stuff[i].title.toUpperCase().includes(str)) {flag = false};
                for (let j = 0; j < this.state.stuff[i].tags.length; j++) {
                    if (this.state.stuff[i].tags[j].toUpperCase().includes(str)) {flag = false};
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
            tags: tags
        };
        let newArray = [...this.state.stuff, obj];
        this.setState({
            stuff: newArray
        });
    }

    render() {
        return (
        <div className="row">
        <div className="col-4 App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>King of JS{this.props.name ? " - " + this.props.name : ""}</h2>
        <p>{this.state.stuff.length} favourite {this.state.stuff.length > 1 ? "links" : "link"}</p>
        <button onClick={this.toggle}>Add Link</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add Link</ModalHeader>
        <ModalBody>
        <AddForm insertLink={this.insertLink}/>
        <br/>
        </ModalBody>
        <ModalFooter/>
        </Modal>
        </div>
        <div className="col-8 App-body">
        <Search handleChange={this.handleChange}/>
        <p/>
        {this.state.stuff.map((thing, index)=>
        (<Link hidden={this.state.hidden[index]} url={thing.url} title={thing.title} tags={thing.tags} key={index}
            removeLink={() => this.deleteLink(index)}/>)
        )}
        <br/>
        </div>
        </div>);
    };
};

// example usage: <LinkList name="Alex" />