// export default function ToDo({task, isDone}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

export default function ToDo({task, isDone, time}) {
    if(isDone === true) {
        return <li>Done: {task} Duration: {time}</li>
    }
    // else {
    //     return <li>Pending: {task}</li>
    // } 
    return <li>To be done: {task} Duration: {time}</li>
}