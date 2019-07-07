import React, { Component } from "react";
import Modal from './components/Modal'
import './modal.css';
import {modals, paragraph} from "./data/mockData"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      infoModalIsOpened: false,
      successModalIsOpened: false,
      alertModalIsOpened: false,
      dangerModalIsOpened: false,

    };
    this.toggleModal = this.toggleModal.bind(this);

  }
  render() {
    const showHideClassName = this.state.isOpened ? " modal-is-open" : " modal-is-close";

    return (
      <>
        <div className={"app" + showHideClassName}>
          <header className="app-header">
            <h3>
              Bienvenue dans cette démo de modals !
            </h3>
          </header>
          <div className="button-group">
            {this.createButton(modals["info"])}
            {this.createButton(modals["success"])}
            {this.createButton(modals["alert"])}
            {this.createButton(modals["danger"])}
          </div>
        </div>
        {this.renderModals()}
    </>
    );
  }

  createModal(modal) {
    const openedAttribute = modal.state + "IsOpened"

    return(
      <Modal modalState={modal.state}
             name={modal.name}
             title={modal.title}
             show={this.state[openedAttribute]}
             handleClose={() => this.toggleModal(modal.state)}
             closeable={modal.closeable} 
             closeOnOutsideClick={modal.closeOnOutsideClick} 
      >
        <p>{paragraph}</p>
        <></>
      </Modal>
    ); 
  }

  renderModals() {
    return (
      <>
        {this.createModal(modals["info"])}
        {this.createModal(modals["success"])}
        {this.createModal(modals["alert"])}
        {this.createModal(modals["danger"])}
      </>
    );
  }

  createButton(modal) {
    return (
      <button type="button" onClick={() => this.toggleModal(modal.state)}>
        open {modal.state}
      </button>
    );
  }

  toggleModal(modalType) {
    const openedAttribute = modalType + "IsOpened"
    this.setState({
       [openedAttribute]: !this.state[openedAttribute],
       isOpened: !this.state.isOpened,
    });
  }
}

export default App;
