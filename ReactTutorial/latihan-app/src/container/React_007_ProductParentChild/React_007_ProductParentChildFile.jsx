import React, {Component, Fragment} from 'react';
import './React_007_ProductParentChild.css'

class React_007_ProductParentChild extends Component {
    state = {
        order: 4
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }
    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://i7.pngguru.com/preview/748/439/584/chanel-logo-brand-silhouette-chanel.jpg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-panggang-bumbu-spesial.jpg" alt="product_image"/>
                    </div>
                    <p className="product-title">Ayam goreng bakar rebus</p>
                    <p className="product-price">Rp. 25,000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default React_007_ProductParentChild;