import React,{Component} from 'react';
import Todos from './Todos';
import Addform from './Addform'

class App extends Component{
  state={
    todos:[
      {id:1,content:"Get crafty"},
      {id:2,content:"Sing a song"}
    ]
  }
  deletetodo=(id)=>{
    console.log(id);
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:todos
    })
  }
  addtodo=(todo)=>{
      todo.id=Math.random();
      let todos=[...this.state.todos,todo];
      this.setState({
        todos:todos
      })
  }
  render(){
    return(
      <div className="Todo-app container">
       <h1 className="center black-text">Todo</h1> 
       <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
       <Addform addtodo={this.addtodo}/>
      </div>
    )
  }
}

export default App;
