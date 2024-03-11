import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, TextField } from "@aws-amplify/ui-react";

import Recorder from "../components/RecordVideo";

const Record = () => {
  return (

    <div>
      <Recorder />
    </div>
  );
};

export default withAuthenticator(Record);
