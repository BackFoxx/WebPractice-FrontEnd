import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

//사용자의 입력을 저장할 오브젝트
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } }; 
        this.add = props.add;
    }

    //1. State 연결 함수 작성
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    //1. 버튼 함수 작성
    onButttonClick = () => {
        this.add(this.state.item); // add 함수 사용
        this.setState({ item: {title: ""} });
    }

    //1. 엔터키 함수 작성
    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButttonClick();
        }
    }

    render() {
        //2. 함수 연결
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField 
                        placeholder="Add Todo here" 
                        fullwidth
                        onChange={this.onInputChange}
                        //이벤트 핸들러 함수로 onInputChange를 연결한다.
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                            fullwidth 
                            color="secondary" 
                            variant="outlined"
                            onClick={this.onButttonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;