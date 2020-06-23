import React, {Component} from 'react';

class React_007_ProductParentChild_CardProduct extends Component {
    state = {
        order: 0,
        name: 'wilden'
    }

    handleCounterBerubah = (newValueNih) => {
        this.props.onCounterBerubah(newValueNih);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterBerubah(this.state.order);
        })

        this.handleCounterBerubah();
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            },() => {
                this.handleCounterBerubah(this.state.order);
            })
        }
    }
    render() {
        return (
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
        );
    }
}

export default React_007_ProductParentChild_CardProduct;