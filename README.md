# Custom GPT Frontend 
This Repository contains the code for custom gpt . Which can generate the answers from the given context. Here we have used a CSV file as source for context. which can be found [here](https://github.com/rahim-khan-iitg/custom-gpt-backend/tree/master/data). 

<b>This Project is divided into 2 section <i>Backend</i> and <i>Frontend</i> . This Repo contains the frontend part and Backend can be found [here](https://github.com/rahim-khan-iitg/custom-gpt-backend) 

<b>Deployed version of the repo can be accessed [here](https://custom-gpt-five.vercel.app/)</b>


## Setup
This app is made using Next js so latest version of Node js should be installed on the machine. 
- step 1
```
# clone the repo
git clone https://github.com/rahim-khan-iitg/custom-gpt-frontend.git
# change directory
cd custom-gpt-frontend
# install the required libraries
npm install
```
- step 2 \
all the necessary settings are defined in the ```config.json``` file make necessary changes if required .
- step 3 
```
# run the app
npm run dev
```
this command will run the app at ``` http://localhost:3000/ ``` now you can access the app. which is a command line interface .

## Available Commands
- <b>help</b> : This command provides the list of all the commands and shortcut keys  available for use .
- <b>about</b> : it shows the about section of the app.
- <b>clear</b> : it will clear the command window.
- <b>documentation/readme</b> : These both commands does the same work. it will open this readme in the new tab of the browser.
- <b>github</b>: it will open my github profile page .
- <b>chat</b>: this command can be used for simple question answers to the large language model without any context.
- <b>query</b>: this the command which can be used to ask question from the given data set which was given in the assignment.
- <b>exit</b> : when you will write the command chat or query you will be entered in the query or chat mode in this mode other commands will not work only we can ask question to LLM with or without context . the exit command is used to exit from this mode.
- <b>resume</b>: this command will open my resume in new tab. \
and some other commands are also available. these commands are not relevant to the assignment.
## some shortcut keys
- <b> ctrl+l(L)</b>: this is the shortcut key for clear command.
- <b>up/down Arrow</b>: these buttons can be used to navigate the previous commands and questions.

### result of some queries with context
<i>while running chat and query commands it can take some time because it is running on free resources on azure container service</i>
```

Question: what is the description of the veggies cutter?
Answer: Rithu Multi Purpose Vegetable Cutter facilitates in cutting vegetables with the precise thickness of your choice. It is a must have kitchen tool which is easy to use and clean
Question: what is the sale price of Garlic Oil - Vegetarian Capsule 500 mg?
Answer: 220
Question: what is the rating of Flaxseed - Pesticide Free ?
Answer: 4
Question: tell me some products from beverages category
Answer: Non-Alcoholic Beer Bottle - Malt Beverage, Strawberry Flavour
Question: what is the market price of Cake Gel?
Answer: 90

```
for the backend implementation please [click here](https://github.com/rahim-khan-iitg/custom-gpt-backend)
