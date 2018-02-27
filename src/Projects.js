import React from 'react';

export default class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state =
        {
            projToggle: false
        };
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                projToggle: !prevState.projToggle
            };
        })
    }

    render()
    {
        return (
            <div>
                <button onClick = {this.handleToggle}>{this.state.projToggle ? 'Hide Projects' : 'Show Projects'}</button>
                <p>{this.state.projToggle ? this.props.info : false}</p>
            </div>
        );
    }

}