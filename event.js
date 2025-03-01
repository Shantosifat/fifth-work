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
        You have completed the task at ${timeString}`;
        container.appendChild(p)
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


// back button

document.getElementById('back-btn').addEventListener('click', function(){
    
    console.log('hi')
})