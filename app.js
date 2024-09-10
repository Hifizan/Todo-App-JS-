let task = [];

let req = prompt ('Enter the request');

while(true){
    if (req == 'quit'){
        alert('You have quited the app');
        break;
    }

    if(req == 'add'){
        let newTask = prompt('Enter the task you want to add');
        task.push(newTask);
        alert('Task added Successfully');
    }

    if(req == 'list'){

        // for( i of task){
        //     console.log(i);
        // }
        for(i=0; i<= task.length; i++){
            console.log(i, task[i]);
        }
    }

    if (req == 'delete'){
        let idx =+ prompt('Enter the index of the task you want to delete');
        task.splice(idx,1);
        alert('Task deleted');

    }

    


    req = prompt('Enter the request');
}