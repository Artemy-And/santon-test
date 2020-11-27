import React from "react";
import { withStore } from "../../state/withStore";
import {Registry} from "../../state/common/store/registry";
import Modal from "react-modal";
import {Form} from "./Form";

const customStyles = {
  content: {
    width:'450px',
    height:'450px'
  }
};


class Login extends React.Component {
  state={
    modalIsOpen:true,
  }
  // activateModal = ()=>{
  //   this.setState({
  //     modalIsOpen:true
  //   })
  // }
  // diActivateModal = ()=>{
  //   this.setState({
  //     modalIsOpen:false
  //   })
  // }
  render() {
    const store = Registry.getStore('login');
    const { autorizeFormOpen } = store.data



    return (
        <div>

          {autorizeFormOpen ?
              <Modal
                  isOpen={this.state.modalIsOpen}
                  style={customStyles}
                  contentLabel="Example Modal"
              >
                <Form isLoggedIn={autorizeFormOpen}/>


              </Modal> : ""
          }

        </div>
    );
  }
}

export default withStore("login", (data) => data)(Login);
