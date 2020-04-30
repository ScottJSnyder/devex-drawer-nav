import React from "react";
import List from "devextreme-react/list";
import history from "./history";
 
const navigation = [
    { id: 1, text: "Home", icon: "message", filePath: "home" },
    { id: 2, text: "About", icon: "check", filePath: "about" }
];
 
class NavigationList extends React.PureComponent {
    loadView = (e) => {
        history.push(e.addedItems[0].filePath);
        this.props.stateHandler({ isDrawerOpen: false });
    }
    render() {
        return (
            <React.Fragment>
                <List
                    items={navigation}
                    width={200} 
                    selectionMode="single"
                    onSelectionChanged={this.loadView} />
            </React.Fragment>
        );
    }
}
export default NavigationList;