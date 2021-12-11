import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from "@material-ui/core/InputBase";
import Checkbox from "@material-ui/core/Checkbox";


// Todo 리스트
class Todo extends Component {
    // super를 이용해 props 오브젝트를 초기화한다.
    constructor(props) {
        super(props);
        this.state = { item: props.item };
        //state는 리액트가 관리하는 프로젝트다. 추후에 변경할 수 있는 변수를 관리한다.
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
            </ListItem>
        );
    }
}

export default Todo;