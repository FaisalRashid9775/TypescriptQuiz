#!/usr/bin/env node
import inquirer from "inquirer"

console.log(`***********  JavaScript Quiz  *************`)
async function Quiz(){
  let marks = 0
  let Que = await inquirer.prompt([{
    name : 'Que',
    type:'list',
    message : 'Do you want to start an quiz',
    choices : ['Yes', 'No']
  }])
  if(Que.Que==='No'){
    console.log(`You did'nt attempt the quiz`)
  }
  else{
    let Question = await inquirer.prompt([
      {
      name : 'Q1',
      type:'list',
      message :'Where JS was invented ',
      choices : ['NetScape','Microsoft','Yahoo','Mozilla']
    },
    {
      name : 'Q2',
      type:'list',
      message :'Currently which browser support JS ',
      choices : ['NetScape','Microsoft','Yahoo','Mozilla','All']
    },
    {
      name : 'Q3',
      type:'list',
      message :'Type of [True] is ',
      choices : ['Boolean','String','Number','Null','Undefine']
    },
    {
      name : 'Q4',
      type:'list',
      message :'Type of [5] is ',
      choices : ['Boolean','String','Number','Null','Undefine']
    },{
      name : 'Q5',
      type:'list',
      message :'Which language do not support the concepts of OPPS ',
      choices : ['Typescript','Javascript','Solidity','Java','PHP']
    }
  ])
  if(Question.Q1==='NetScape'){
    marks+=10
  }
  if(Question.Q2==='All'){
    marks+=10
  }
  if(Question.Q3==='Boolean'){
    marks+=10
  }
  if(Question.Q4==='Number'){
    marks+=10
  }
  if(Question.Q5==='Javascript'){
    marks+=10
  }
  console.log(marks)
  }
}
Quiz()