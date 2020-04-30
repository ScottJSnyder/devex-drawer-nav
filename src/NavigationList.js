import React from "react";
import List from "devextreme-react/list";
import history from "./history";
 
const navigation = [
    { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
    { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
    { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
    { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
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