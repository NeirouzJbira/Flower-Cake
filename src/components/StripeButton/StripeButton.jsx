import React from "react";
import StripeCheckout from "react-stripe-checkout";

class StripeButton extends React.Component {
  handleToken(token, address) {
    alert("Payment Successful");
  }

  render() {
    return (
      <StripeCheckout
        stripeKey="use your stripe key"
        token={this.handleToken}
        panelLabel="Pay Now"
        name="Flower Cake"
        description={`Your total is ${this.props.price}$`}
        billingAddress
        shippingAddress
        amount={
          this.props.price * 100
        } 
      />
    );
  }
}

export default StripeButton;
