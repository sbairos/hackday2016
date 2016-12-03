import React from 'react';

class ReadQueue extends React.Component {
    constructor() {
        super();
        this.rq = ['Hello', 'goodbye'];
    }

    render() {
        return (
            // <div className='hi'> hello
            // </div>
            <ol>
                {this.rq.map(function(article){
                    return <li>{article}</li>;
                })}
            </ol>
            );
    }
}
export default ReadQueue