import React from 'react'
import {observer} from "mobx-react"
import "../style/form.css";
import {CustomDropDown} from "./CustomDropDown"
import {ListGroup, ListGroupItem} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
const sideBarStyle = {
    width: "6%",
    fontSize: "1.5em"
}

const paletteStyle = {
    width: "25px",
    height: "25px"
}

export const SideBar = observer(class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.erase = this
            .erase
            .bind(this);
    }
    render() {
        return (
            <ListGroup className="list-group-flush" style={sideBarStyle}>
                <CustomDropDown iconType="pen">
                    <i className="fa fa-pencil"></i>
                </CustomDropDown>
                <CustomDropDown iconType="color">
                    <img
                        src="https://image.flaticon.com/icons/svg/61/61092.svg"
                        style={paletteStyle}></img>
                </CustomDropDown>
                <ListGroupItem
                    action
                    style={{
                    border: "0 none",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center"
                }}>
                    <i className="fa fa-eraser"></i>
                </ListGroupItem>
            </ListGroup>
        );
    }
    erase() {
        console.log(this.props.store)
        this
            .props
            .store
            .setCurColor("white");
        this
            .props
            .store
            .setWidth(60);
        console.log(this.props.store.getColor)
    }
    paint() {}

})