let completedTasks = 0;

const buttons = document.querySelectorAll('.complete-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Board Updated Successfully');

        
        const increaseP = document.getElementById("increase-p").innerText;
        const convertedIncrease = parseInt(increaseP);
        const decreaseP = document.getElementById("decrease-p").innerText;
        const convertedDecrease = parseInt(decreaseP);

        const sum1 = convertedIncrease + 1;
        const sum2 = convertedDecrease - 1;
        document.getElementById('increase-p').innerText = sum1
        document.getElementById('decrease-p').innerText = sum2;
        button.disabled = true;
        button.style.backgroundColor = '#94a3b8';
        

        const container = document.getElementById('activity-container')
        const p = document.createElement("p");
        const currentTime = new Date();
        const timeString = currentTime.toLocaleTimeString();
        p.innerText = `
        You have completed the task  at ${timeString}`;
        container.appendChild(p);
    
    });
});


// clear history
document.getElementById('clear-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('activity-container').innerText= '';
    
})

// question part

document.getElementById('qs-part').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = './second.html'
})



// challange part-1

function randomColor(){
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}


const button = document.getElementById('theme-button');
button.addEventListener('click', randomColor)



// challange-2

document.addEventListener('DOMContentLoaded', function() {
    
    const today = new Date();
    const dateString = today.toDateString(); 

    document.getElementById('todays-date').textContent = dateString;
  });


//   challange-4

// let completedTasks = 0;

// // Function to handle task completion
// function completeTask(taskNumber) {
//   // Increment completed tasks counter
//   completedTasks++;

//   // Update the task status message
// //   document.getElementById('taskStatus').textContent = `You have completed ${completedTasks} out of 6 tasks.`;

//   // Check if all tasks are completed
//   if (completedTasks === 6) {
//     alert("Congratulations! You have completed all tasks!");
//   }
// }

// if(convertedDecrease === 0 && convertedIncrease === 30){
//     console.log('noooo')
//  }
//  else{
     
//  }



// challange-3






















