import React from 'react';

export default class Education extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = 
        {
            eduToggle: false
        };
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                eduToggle: !prevState.eduToggle
            };
        })
    }

    render()
    {
        return (

            <div>
                <button onClick = {this.handleToggle}>{this.state.eduToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{this.state.eduToggle ? this.props.info : false}</p>
            </div>
            
        );
    }
}