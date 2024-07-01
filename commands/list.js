import conf from "conf";
import chalk from "chalk";

const config = new conf({projectName: "todos"});

export function list(){
    const taskList = config.get('todo-list') ?? [];
    
    if (taskList.length){
        console.log(chalk.blue.bold("Pending tasks are yellow and done tasks are green in color"));
        taskList.forEach((task, index)=>{
            if (task.done){
                console.log(chalk.greenBright(`${index}. ${task.text}`));
            }else{
                console.log(chalk.yellowBright(`${index}. ${task.text}`));
            }
        });

    }else{
        console.log(chalk.red.bold("No tasks!"));
    }
}
