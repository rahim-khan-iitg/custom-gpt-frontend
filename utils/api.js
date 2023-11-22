import axios from 'axios';
import config from '../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getChat = async (args) => {
  let question=args.join(" ");
  const {data}=await axios.post(config.CHAT_API_ENDPOINT,{"question":question})
  return "Question: "+question+"\nAnswer: "+data;
};

export const getQuery=async(args)=>{
  let question=args.join(" ");
  const {data}=await axios.post(config.QUERY_API_ENDPOINT,{"question":question})
  let x="Question: "+data['query']+"\nAnswer: "+data["result"];
  return x;
}
