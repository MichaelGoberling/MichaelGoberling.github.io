import React from 'react';

export default class References extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state =
        {
            refToggle: false
        };
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                refToggle: !prevState.refToggle
            };
        });
    }

    render()
    {
        
        return (

            <div>
                <button onClick = {this.handleToggle}>{this.state.refToggle ? 'Hide References' : 'Show References'}</button>
                <p>{this.state.refToggle ? this.props.info : false}</p>
            </div>
            
        );
    }
}