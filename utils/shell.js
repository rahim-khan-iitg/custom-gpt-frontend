import React from 'react';
import * as bin from './bin';
import { chat } from './bin';
import { query } from './bin';

export const shell = async (
  command,
  setHistory,
  clearHistory,
  setCommand,
  chatOptions
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();
  if (chatOptions == "chat") {
    const output = await chat(args);
    setHistory(output);
  }
  else if (chatOptions == "query") {
    const output = await query(args);
    setHistory(output);
  }
  else {
    if (args[0] === 'clear') {
      clearHistory();
    } else if (command === '') {
      setHistory('');
    } else if (Object.keys(bin).indexOf(args[0]) === -1) {
      setHistory(
        `shell: command not found: ${args[0]}. Try 'help' to get started.`,
      );
    }else if(args[0]=="chat"){
      setHistory("chat mode is active now");
    } 
    else if(args[0]=="query"){
      setHistory("query mode is active now");
    }
    else if(args[0]=="exit"){
      setHistory("closing chat or query mode");
    }
    else {
      const output = await bin[args[0]](args.slice(1));
      setHistory(output);
    }
  }

  setCommand('');
};