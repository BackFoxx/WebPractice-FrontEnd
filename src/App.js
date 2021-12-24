import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo.js";
import { List , Paper, Container, Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import "./App.css";
import { call, signout } from "./service/ApiService";


//Todo 리스트 구현하기
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [ ],
      loading: true,
    };
  }

  componentDidMount() {
      call("/todo", "get", null).then((response) =>
        this.setState({ items: response.data.data, loading: false })
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
    
    var navigationbar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant="h6">오늘의 할일</Typography>
            </Grid>
            <Grid>
              <Button color="inherit" onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    var todoListPage = (
      <div>
        {navigationbar}
        <Container maxWidth="md">
          <AddTodo add={this.add}>
            <div className="TodoList">{todoItems}</div>
          </AddTodo>
        </Container>
      </div>
    )

    var loadingPage = <h1> 로딩중 ... </h1>
    var content = loadingPage;
    if(!this.state.loading) {
      content = todoListPage;
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }

  }

export default App;
