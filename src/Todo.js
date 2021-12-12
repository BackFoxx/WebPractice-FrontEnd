import React, { Component } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined/";


// Todo 리스트
class Todo extends Component {
    // super를 이용해 props 오브젝트를 초기화한다.
    constructor(props) {
        super(props);
        this.state = { item: props.item };
        //state는 리액트가 관리하는 프로젝트다. 추후에 변경할 수 있는 변수를 관리한다.
        this.delete = props.delete;
      }
    
    deleteEventHandler = () => {
      this.delete(this.state.item)
    }
    
    render() {
        const item = this.state.item;
        return (
            <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
              <InputBase
                inputProps={{
                  "aria-label": "naked"
                }}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                fullWidth={true}
                multiline={true}
              />
            </ListItemText>

            <ListItemSecondaryAction>
              <IconButton 
                aria-label="Delete Todo"
                onClick={this.deleteEventHandler}>
                <DeleteOutlined />
              </IconButton>
            </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;