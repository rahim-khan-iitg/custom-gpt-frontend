import config from "../config.json"
import { ClockLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#48bb78",
};
export const Ps1 = (pageProps) => {
    return (
      <div className="flex">
        <span className="text-light-yellow dark:text-dark-yellow">
          {config.ps1_username}
        </span>
        <span className="text-light-gray dark:text-dark-gray">@</span>
        <span className="text-light-green dark:text-dark-green">
          {config.ps1_hostname}
        </span>
        <span className="text-light-green dark:text-dark-green flex">
          /{pageProps.custom} {pageProps.load?<span className="mt-1"><ClockLoader color="#48bb78" cssOverride={override} size={15} aria-label="Loading Spinner" data-testid="loader"/></span>:<span></span>}
        </span>
        <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
      </div>
    );
  };
  
  export default Ps1;