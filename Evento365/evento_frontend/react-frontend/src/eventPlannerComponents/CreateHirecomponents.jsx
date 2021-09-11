import React, { Component } from 'react';
import HireService from '../eventPlannerServices/HireService';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';

class CreateHirecomponents extends Component {

    constructor(props) {
        super(props)

        this.state = {

            events: [],
            hire:[],

            cus_address: '',
            cus_id: '',
            event_date: '',
            event_planner: ''


        }
        this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this);
        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changeEventDateHandler = this.changeEventDateHandler.bind(this);
        this.changeEventPlannerHandler = this.changeEventPlannerHandler.bind(this);

        this.savehiring = this.savehiring.bind(this);

    }


    savehiring = (e) => {

        e.preventDefault();


        let hire = { cus_address: this.state.cus_address, cus_id: this.state.cus_id, event_date: this.state.event_date, event_planner: this.state.event_planner };
        console.log('hire=>' + JSON.stringify(hire));

        HireService.createHire(hire).then(res => {
            this.props.history.push('/hiring');
        });
    }



    changeCustomerAddressHandler = (event) => {

        this.setState({ cus_address: event.target.value });

    }



    changeCustomerIdHandler = (event) => {

        this.setState({ cus_id: event.target.value });

    }



    changeEventDateHandler = (event) => {

        this.setState({ event_date: event.target.value });

        

        EventPlannerService.getEventPlannerByDate(event.target.value).then((res) => {
            
            this.setState({  events: res.data })     
            
        });

        
    }


    changeEventPlannerHandler = (event) => {

        this.setState({ event_planner: event.target.value });
        
    }

    cancel() {

        this.props.history.push('/hiring');

    }



    componentDidMount() {

        // EventPlannerService.getEvevent_planner().then((res) => {
        //     let events = res.data;
        //     this.setState({ events: res.data })

        //     console.log('events =>' + JSON.stringify(events));

        // });


    }


    dateGen() {

        return (
            <div>
                <div className="from-group">

                    <label> Event planner name:</label>
                    <select onChange={this.changeEventPlannerHandler} className="form-control">
                        <option value={0}>--------select-------</option>
                        {
                            this.state.events.map(
                                events =>

                                    <option value={events.name}>{events.name}</option>

                            )

                        }
                    </select>
                </div>


            </div>
        )
    }


    render() {
        return (
            <div>
                <div className="background"></div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 form-background-color">
                            <h3 className="text-center"> ADD NEW HIRE </h3>
                            <div className="card-body">
                                <form onSubmit={this.savehiring}>

                                    <div className="from-group">
                                        <label> Customer Address:</label>
                                        <input placeholder="customer Address" name=" cus_address" className="form-control"
                                            value={this.state.cus_address} onChange={this.changeCustomerAddressHandler} required = {true}/>

                                    </div>
                                    <div className="from-group">
                                        <label> customer Name:</label>
                                        <input placeholder="customer Name" name="cus_id" className="form-control"
                                            value={this.state.cus_id} onChange={this.changeCustomerIdHandler} />
                                    </div>
                                    <tbody>
                            

                                    <div className="from-group">
                                        <label> Event Date:</label>
                                        <input type="date" placeholder="Event Date" name="event_date" className="form-control"
                                            value={this.state.event_date} onChange={this.changeEventDateHandler}required = {true} />
                                    </div>
                                    </tbody>
                                        

                                    {this.dateGen()}

                                    {/* <button type="submit" className="btn btn-success" onClick={this.savehiring.bind(this)}>Save </button> */}
                                      
                                    <input type="submit" className = "btn btn-success"  value="Apply" />
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel </button>

                                </form>
                                

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateHirecomponents;