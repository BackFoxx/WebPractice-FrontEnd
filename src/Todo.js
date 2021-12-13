import React, { Component } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined/";


// Todo 리스트
class Todo extends Component {
    // super를 이용해 props 오브젝트를 초기화한다.
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        //state는 리액트가 관리하는 프로젝트다. 추후에 변경할 수 있는 변수를 관리한다.
        this.delete = props.delete;
        this.update = props.update;
      }
    
    //App.js에서 delete 함수 가져오기
    deleteEventHandler = () => {
      this.delete(this.state.item)
    }
    
    //offReadOnly 함수
    offReadOnlyMode = () => {
      console.log("Event!", this.state.readOnly)
      this.setState({ readOnly: false }, () => {
        console.log("ReadOnly?", this.state.readOnly)
      });
    }

    //엔터키 누르면 ReadOnly설정
    enterKeyEventHandler = (e) => {
      if (e.key === 'Enter') {
          this.setState({ readOnly: true });
          this.update(this.state.item);
      }
    };

    //키보드로 입력할 때마다 item을 새 값으로 변경
    editEventHandler = (e) => {
      const thisItem = this.state.item;
      thisItem.title = e.target.value;
      this.setState({ item: thisItem });
    }

    //checkbox 업데이트
    checkboxEventHandler = (e) => {
      const thisItem = this.state.item;
      thisItem.done = !thisItem.done;
      this.setState({ item: thisItem });
      this.update(this.state.item);
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
            <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
            <ListItemText>
              <InputBase
                inputProps={{
                  "aria-label": "naked",
                  readOnly: this.state.readOnly,
                }}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                fullWidth={true}
                onClick={this.offReadOnlyMode}
                onChange={this.editEventHandler}
                onKeyPress={this.enterKeyEventHandler}
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