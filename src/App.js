import React from "react";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import "./App.css";


//Todo 리스트 구현하기
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: "0", title: "Hello World1", done: true },
        { id: "1", title: "Hello World23", done: false },
      ],
    };
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}  
        </List>
      </Paper>
    );

    return <div className="App">{todoItems}</div>;
  }
}

export default App;
