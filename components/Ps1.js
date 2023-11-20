import config from "../config.json"
import {Camera} from "lucide-react"
export const Ps1 = (pageProps) => {
    return (
      <div>
        <span className="text-light-yellow dark:text-dark-yellow">
          {config.ps1_username}
        </span>
        <span className="text-light-gray dark:text-dark-gray">@</span>
        <span className="text-light-green dark:text-dark-green">
          {config.ps1_hostname}
        </span>
        <span className="text-light-green dark:text-dark-green">
          /{pageProps.custom}
        </span>
        <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
      </div>
    );
  };
  
  export default Ps1;