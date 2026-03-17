// // export default function ToDo({task, isDone}) {
// //     return (
// //         <li>Task: {task}</li>
// //     )
// // }

// export default function ToDo({task, isDone, time}) {
//     if(isDone === true) {
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     // else {
//     //     return <li>Pending: {task}</li>
//     // } 
//     return <li>To be done: {task} Duration: {time}</li>
// }

// conditional rendering: 3 - ternary 

// export default function ToDO({task, isDone, time = 0}) {
//     return isDone ? 
//     <li>Done: {task} time 
//     : {time}</li> : <li>Not Done: {task}</li>
// }

// conditional rendering : 4 &&
// export default function ToDO({task, isDone, time = 0}) {
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone || <li>Not Done Tasks: {task} time: {time}</li>
// }

// Conditional rendering: 6 using variable 
export default function ToDo({task, isDone, time}) {
    const displayTime = time ? time : 100; 

    let listItem ; 

    if (isDone === true) {
        listItem = <li>Done: {task} time: {time ? 'I am done' : 'not done yet'}</li>
    } else {
        listItem = <li>Pending: {task}</li>
    }
    return listItem
}