// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getQuery } from '../api';
import { getChat } from '../api';

export const projects = async (args) => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args) => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args) => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const query=async(args)=>{
  const q=await getQuery(args);
  return q;
}
export const chat=async(args)=>{
  const q=await getChat(args);
  return q;
}