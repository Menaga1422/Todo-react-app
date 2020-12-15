import React,{Component} from 'react'
class Addform extends Component{
    state={
        content:""
    }
    handlechange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:""
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
             <label>Add new Todo</label>   
             <input type="text" onChange={this.handlechange} value={this.state.content}></input>
            </form>
            </div>
        )
    }
}
export default Addform