
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";

import Recorder from "../components/RecordVideo";

const Record = () => {
   
  return (
    <div style={{ paddingLeft: '35px' }}>
      <h1>Record a Video</h1>
      <Recorder />
    </div>
  );
};

export default withAuthenticator(Record);