import { connect } from "react-redux"
import { MenuItems } from "../components/MenuItems";

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

// returns a function that takes a react component
export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);