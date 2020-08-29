import * as React from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';

class PureGoBack extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.goBack}>Go Back</Button>
      </div>
    );
  }
}

// By wrapping the component with `withRouter()`, this component will be able to get the history object
export const GoBack = withRouter(PureGoBack); 

//example usage: <GoBack/>