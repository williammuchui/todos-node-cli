import chalk from "chalk";
import conf from "conf";

const config = new conf({projectName: "todos"});

export function markDone({tasks}){
    let taskList = config.get('todo-list') ?? [];

    if (taskList.length){
        taskList = taskList.map((task, index)=>{
            if(tasks){
                if (tasks.includes(index.toString())){
                    task.done = true;    
                }
            }
            else{
                task.done = true;
            }
            return task;
            });
        config.set('todo-list', taskList);
    }
    console.log(chalk.greenBright("Tasks marked as done!"));
}
