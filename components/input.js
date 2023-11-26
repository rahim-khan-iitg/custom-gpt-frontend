import Ps1 from "./Ps1";
import React from 'react';
import { commandExists } from '../utils/commandExists';
import { shell } from '../utils/shell';
import { handleTabCompletion } from '../utils/tabCompletion';
import { useState } from "react";

export const Input = ({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
}) => {
  const [chatOptions,setChatOptions]=useState(" ");
  const [loading,setLoading]=useState(false);
  const onSubmit = async (event) => {
    const commands = history
      .map(({ command }) => command)
      .filter((command) => command);
    
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setCommand('');
      setHistory('');
      setLastCommandIndex(0);
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      setLastCommandIndex(0);
      if(command=="chat")
      {
        setChatOptions("chat");
        
      }
      else if(command=="query")
      {
        setChatOptions("query");
      }
      else if(command=="exit")
      {
        setChatOptions("")
      }
        setLoading(true);
        await shell(command, setHistory, clearHistory, setCommand,chatOptions);
        setLoading(false);
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
        
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand('');
      }
    }
  };

  const onChange = ({
    target: { value },
  }) => {
    setCommand(value);
  };

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 custom={chatOptions} load={loading}/>
        
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-black focus:outline-none flex-grow ${commandExists(command) || command === ''
            ? 'text-dark-green'
            : 'text-dark-red'
          }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;