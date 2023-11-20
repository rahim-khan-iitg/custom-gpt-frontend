// List of commands that do not require API calls

import * as bin from './index';
import config from '../../config.json';

// Help
export const help = async (args) => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args) => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args) => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args) => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};



// Contact
export const email = async (args) => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args) => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};
export const documentation = async (args) => {
  window.open(`https://github.com/${config.readmeUrl}/`);

  return 'Opening github...';
};

export const linkedin = async (args) => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};


export const whoami = async (args) => {
  return `${config.ps1_username}`;
};

export const cd = async (args) => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args) => {
  return new Date().toString();
};

// Banner
export const banner = (args)=> {
  return `
  ██████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ███╗    ██╗     ██╗     ███╗   ███╗
  ██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔═══██╗████╗ ████║    ██║     ██║     ████╗ ████║
  ██║     ██║   ██║███████╗   ██║   ██║   ██║██╔████╔██║    ██║     ██║     ██╔████╔██║
  ██║     ██║   ██║╚════██║   ██║   ██║   ██║██║╚██╔╝██║    ██║     ██║     ██║╚██╔╝██║
  ╚██████╗╚██████╔╝███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║    ███████╗███████╗██║ ╚═╝ ██║
   ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝    ╚══════╝╚══════╝╚═╝     ╚═╝
  

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

export const chat = async (args) => {
  return "you are now using LLM";
};

export const query=async(args)=>{
  return "now db is connected"
}
export const exit=async(args)=>{
  return;
}