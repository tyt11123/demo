import React, {Component} from "react";
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem } from 'reactstrap';


export class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src={logo} alt="logo" />&nbsp;
              reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/element">Simple Website Element</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/questioner">Questioner</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">Counter with Leaderboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/timer">Timer</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  




