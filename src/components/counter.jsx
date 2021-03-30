import React, { Component } from 'react';
class Counter extends Component {
    state= {
        count:1,
        tags: []
    };
    handleIncrement=()=>{
        console.log("incremented", this);
    }
    render() { 
        return(
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary">Increment</button>
            {this.renderTags()}
        </React.Fragment>
        );
    }
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }
    formatCount(){
        const {count}=this.state;
        return count===0 ? "Zero" : count;
    }
    getBadgeClasses(){
        let classes= "badge m-2 badge-";
        classes+= this.state.count===0 ? "warning" : "primary";
        return classes
    }
}
 
export default Counter;