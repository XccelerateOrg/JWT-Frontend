import * as React from "react";
import { withRouter } from "react-router-dom";

function GoBack(props) {
  const goBack = () => {
    // the history object of `props` here can do goBack(), push()
    //   or replace() to change the route programmatically
    props.history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default withRouter(GoBack);
