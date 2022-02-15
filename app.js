
    let button = document.getElementById('button'); // brings the button in with DOM

    button.addEventListener('click', function () { // event listener triggers the below block of code when the button is pressed.


        const friends = ['Jake', 'Winnie', 'Cebastian', 'Caleb', 'Tyler'] // array of names for reference in lines.


        for (let i = 0; i < friends.length; i++) { // for loop iterates over friends array.
            const div = document.createElement('div'); 
            const header = document.createElement('h3');
            div.className = "friend";
            header.textContent = friends[i]; // for every iteration of the outer for loop, a div with a header is created. the header contains text that matches the current array index. 

            div.appendChild(header); // these attach the header to the div, and then the div to the doc. 
            document.body.appendChild(div);

            for (let l = 99; l > 0; l--) { // inner loop increments 99 times every time the outer loop increments. 
                if (l == 1) {
                    const lastLine = document.createElement('p');
                    lastLine.textContent = l + " line of code in the file " + l + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
                    div.appendChild(lastLine); // procs if inner loop is on last iteration.
                }
                else {
                    if (l == 2) {
                        const penultimateLine = document.createElement('p');
                        penultimateLine.textContent = l + " lines of code in the file " + l + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (l - 1) + " more line of code in the file";
                        div.appendChild(penultimateLine); // procs if inner loop is on penultimate iteration.
                    }
                    else {
                        const otherLines = document.createElement('p'); 
                        otherLines.textContent = l + " lines of code in the file " + l + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (l - 1) + " more lines of code in the file";
                        div.appendChild(otherLines); // procs on all other iterations of inner loop. 
                    }
                }
            }
        }
    })

