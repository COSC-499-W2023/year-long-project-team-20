import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

import { Mission } from "../ui-components";
import LearnMore from "../components/LearnMore.js";

const About = () => {
  return (
    <div>
      <Mission width={"100"} />
      <LearnMore />
    </div>
  );
};

export default withAuthenticator(About);
