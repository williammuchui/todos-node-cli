import conf from "conf";
import chalk from "chalk";

const config = new conf({projectName:"todos"});

export function remove({tasks}){
    let taskList = config.get('todo-list') ?? [];

    if (taskList.length){
            taskList = taskList.filter((task, index)=>{
            if (tasks){
                if (tasks.includes(index.toString())){
                    return false;
                }else{
                    return true;
            }
            }else{
                return true;
            }
           
        });
        config.set('todo-list', taskList);
        if (tasks){
        console.log(chalk.greenBright('task removed'));
        }else{
            console.log(chalk.red("No task removed!"));
        }
    }else{
        console.log(chalk.red.bold("No tasks!"));
    }


}
