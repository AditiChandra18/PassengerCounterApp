//document.getElementById("counter").innerText = 5
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count2=document.getElementById("counter");
let saveEl=document.getElementById("save-el");

let count=0;

function increment(){
    count=count+1;
    count2.textContent=count;
    //console.log("clicked");
   
}

function save(){

    let countStr = count + " - "//spaces were not coming in a good manner since they are human readable
    //Hence replace innertext with textContent

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    //saveEl.innerText += countStr innertext replaced with text content
    saveEl.textContent += countStr;
    count2.textContent=0;
    count=0;
    //console.log(count);
}