import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";

export class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    return (
      <div className="Cart container">
        <h3 className="mt-3" align="center">
          You have Ordered
        </h3>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover mt-3">
              <thead>
                <tr align="center">
                  <th>Image</th>
                  <th>Title</th>
                  <th>Descripton</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {this.props.items.length > 0 ? (
                this.props.items.map((item) => (
                  <tbody>
                    <tr align="center">
                      <td>
                        <img src={item.img} className='img-thumbnail' alt="" width="100px" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Link
                          to="/cart"
                          className="btn btn-primary"
                          onClick={() => {
                            this.handleAddQuantity(item.id);
                          }}
                        >
                          <i class="fas fa-plus"></i>
                        </Link>
                        <Link
                          to="/cart"
                          className="btn btn-primary ml-1 mr-1"
                          onClick={() => {
                            this.handleSubtractQuantity(item.id);
                          }}
                        >
                          <i class="fas fa-minus"></i>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.handleRemove(item.id);
                          }}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tr>
                  <td colSpan={6} align="center">
                    Oops! You cart is empty!
                  </td>
                </tr>
              )}
              <tr align="center">
                <td colSpan={5}></td>
                <th>Total : ${this.props.total}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};

const mapDispatchTopros = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopros)(Cart);
