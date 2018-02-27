import React from 'react';

export default class Work extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state =
        {
            workToggle: false
        };
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                workToggle: !prevState.workToggle
            };
        })
    }        

    render()
    {

        return (

            <div>
                <button onClick = {this.handleToggle}>{this.state.workToggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
                <p>{this.state.workToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}