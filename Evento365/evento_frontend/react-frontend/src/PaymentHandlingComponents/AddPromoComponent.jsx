import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';

class AddPromoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: '',
            amount: '',
            count: ''
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.AddPromo = this.AddPromo.bind(this);
    }


    AddPromo = (e) => {
        e.preventDefault();
        let Promo_Code = {code: this.state.code, amount: this.state.amount, count: this.state.count};
        console.log('Promo_Code => ' + JSON.stringify(Promo_Code));

        PromoService.AddPromocodes(Promo_Code).then(res =>{

            this.props.history.push('/promomanage');

        });
        
    }
    
    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changeCountHandler= (event) => {
        this.setState({count: event.target.value});
    }

    cancel(){
        this.props.history.push('/promomanage');
    }

    render() {
        return (
            <div  style={{marginTop: 100, marginBottom:120}}>
                <br></br>
                   <div className = "form">
                        <div className = "row">
                        <div className = "formDiv">
                                <h3 className="text-center">Add Promo Code</h3>
                                <div className = "card-body">
                                    <form id="form1" onSubmit = {this.AddPromo}><br />

                                    
                                        <div className = "form-group">
                                            <label> Promo Code: </label>
                                            <input placeholder="Code Name" name="code" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler} required/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Reduced Amount: </label>
                                            <input placeholder="500" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler} required/>
                                        </div>
                                        <br />
                                        <div className = "form-group">
                                            <label> Count: </label>
                                            <input placeholder="10" name="count" className="form-control" 
                                                value={this.state.count}  onChange={this.changeCountHandler} required/>
                                        </div>
                                        <br />
                                       
                                        <button type="submit" style={{marginLeft: "1px"}} className="edidelbtn" >Add</button>
                                        <button className="edidelbtn" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <br /> <br /><br /> <br />
            </div>
        )
    }
}

export default AddPromoComponent;