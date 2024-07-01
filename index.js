#!/usr/bin/env node

import {program} from "commander";
import {list} from "./commands/list.js";
import {markDone} from "./commands/markDone.js";
import {add} from "./commands/add.js";
import {remove} from "./commands/remove.js";

program.version("0.0.1").description("Manage your Todos in the CLI.");

program
    .command('list')
    .description('list all todos')
    .action(list);

program
    .command('add <task>')
    .description('add a new task')
    .action(add);

program
    .command('remove')
    .description("remove a task")
    .option("-t, --tasks <tasks...>", "tasks to remove")
    .action(remove);

program
    .command('mark-done')
    .description("tasks to mark as done. All if none is specified")
    .option("-t, --tasks <tasks...>", "tasks to mark as done")
    .action(markDone);

program.parse(process.argv);
