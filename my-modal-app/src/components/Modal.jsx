import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {modalIcon} from "../data/mockData"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../modal.css';

  class Modal extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.icon = props.icon;
        this.name = props.name;
        this.modalState = props.state ? props.state : "normal";
        this.closeOnOutsideClick = props.closeOnOutsideClick ? props.closeOnOutsideClick : false;
        this.closeable  = props.closeable ? props.closeable : false;

        
    }

    render() {
    const showHideClassName = this.props.show ? "modal open " : "modal close ";
    const closeable = this.props.closeable ? "" : "not-closeable ";

        if (this.props.children && this.props.children.length > 1){
            return (
                <div className={showHideClassName + this.modalState}>
                  <section className={"modal-main " + this.name}>
                      <div className="header-section">
                        <span className={"close-icon " + closeable}><FontAwesomeIcon icon={faTimes} onClick={this.props.handleClose}/></span>
                      </div>
                      <div className="content-section">
                        <div className="title-section">
                            <span className={"state-icon " + this.name} ><FontAwesomeIcon icon={modalIcon[this.name]} /> </span>
                            <h3>{this.title}</h3>
                        </div>
                        <div className="content-body">
                            {this.props.children[0]}
                        </div>
                      </div>
                      <div className="footer-section">
                          <hr/>
                          <div className="button-group">
                            <button className="cancel-button" disabled={!this.props.closeable} onClick={this.props.handleClose}>Annuler</button>
                            <button className={"confirm-button " + this.name} onClick={this.props.handleClose}>Confirmer</button>
                          </div>
                          {this.props.children[1]}
                      </div>
                  </section>
                </div>
              );
        }
    }
  }

  
  
  export default Modal;