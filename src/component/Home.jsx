import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from './actions/cartActions'

export class Home extends Component {
    handleClick = (id) => {
        this.props.addToCart(id)
    }

  render() {
    return (
      <div className="Home container">
        <h3 align="center" className='mt-3'>Our items</h3>
        <div className="row">
          {this.props.itmes.map((item) => (
            <div className="col-md-4">
              <div className="card mt-3" key={item.id}>
                <img src={item.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h3 className='card-title'>{item.title}</h3>
                  <p className="card-text text-muted">{item.desc}</p>
                  <p className="card-text text-danger">${item.price}</p>
                  <button 
                    to='' 
                    className='btn btn-primary float-right' 
                    onClick={()=>{this.handleClick(item.id)}}
                  >
                    Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itmes: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
