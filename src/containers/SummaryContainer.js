import { connect } from "react-redux";
import { Summary } from '../components/Summary'

const mapStateToProps = ({ items, tipPercentage }) => {
    const subtotal = items.reduce((accumulator, { price, quantity }) => accumulator + (price * quantity), 0);
    const tipAmount = (subtotal * tipPercentage) / 100;
    const total = subtotal + tipAmount;
    return {
        subtotal,
        tipAmount, 
        total
    }
}

export const SummaryContainer = connect(mapStateToProps)(Summary);