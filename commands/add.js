import chalk from "chalk";
import conf from "conf";

const config = new conf({projectName: "todos"});

export function add(task){
    const taskList = config.get('todo-list') ?? [];

    taskList.push({text:task, done:false});

    config.set('todo-list', taskList);
    console.log(chalk.greenBright("task added!"));
}
