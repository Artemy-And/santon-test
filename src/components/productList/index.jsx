import React from "react";
import {withStore} from "../../state/withStore";
import {Product} from "../product";
import "./product-list.scss";
import {Registry} from "../../state/common/store/registry";
import Modal from "react-modal";
import {ProductInCart} from "../product/indexInCart";
import Button from "@material-ui/core/Button";

const customStyles = {
  content: {
    width: '750px',
    height: '750px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ProductList extends React.Component {
  state = {
    modalIsOpen: false,
    modalIsOpen2: false
  }

  activateModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }
  diActivateModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    const store = Registry.getStore('products');
    const {products} = this.props
    const {productsNewArray} = store.data


    return (
        <div><Button onClick={this.activateModal}>CART</Button>
          <div className="product-list">

            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}

            <Modal
                isOpen={this.state.modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
              {productsNewArray.map(el =>
                  <ProductInCart key={el.id} product={el}/>
              )}

              <div>
                <Button onClick={this.diActivateModal}>Close cart</Button>
              </div>

            </Modal>
          </div>
        </div>

    );
  }
}

export default withStore("products", (data) => data)(ProductList);
