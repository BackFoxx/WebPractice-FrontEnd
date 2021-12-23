import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo.js";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import "./App.css";
import { call } from "./service/ApiService";


//Todo 리스트 구현하기
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [ ],
    };
  }

  componentDidMount() {
      call("/todo", "get", null).then((response) =>
        this.setState({ items: response.data.data })
      )
    }

  //1. Add 함수 추가
  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.data.data })
      );
  };

  //1. delete 함수 추가
  delete = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.data.data })
      );
  };

  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({ items: response.data.data })
      );
  };

  render() {
    

    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete}
              update={this.update} />
          ))}  
        </List>
      </Paper>
    );
    
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }

  }

export default App;
