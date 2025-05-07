const section2_2 = document.getElementById("section2-2");
const section2_2Content = document.getElementsByClassName("section2-2-content");
let isSection2_2Expanded = false;



function goToCalc() {
    window.location.href = "./sites/calc.html";
}

function expandCalcSection() {
    if (isSection2_2Expanded) {
        console.log(1);
        
        section2_2.style.animation = "expandSection 0.5s reverse 1";
        section2_2.style.height = "0vh";
        

        for (let i = 0; i < section2_2Content.length; i++) {
            section2_2Content[i].style.animation = "fade 0.5s reverse 1";
            section2_2Content[i].style.opacity = "0";
            section2_2Content[i].style.display = "none";
        }

        setTimeout(() => {
            section2_2.style.animation = "none";

            for (let i = 0; i < section2_2Content.length; i++) {
                section2_2Content[i].style.animation = "none";
            }

            console.log("yooooo");
            
        }, 500); 

        isSection2_2Expanded = false;
    } else {
        console.log(2);
        section2_2.style.animation = "expandSection 0.5s normal 1";
        section2_2.style.height = "100vh";

        for (let i = 0; i < section2_2Content.length; i++) {
            section2_2Content[i].style.animation = "fade 0.5s normal 1";
            section2_2Content[i].style.opacity = "1";
            section2_2Content[i].style.display = "block";
        }

        setTimeout(() => {
            section2_2.style.animation = "none";

            for (let i = 0; i < section2_2Content.length; i++) {
                section2_2Content[i].style.animation = "none";
            }
            
            console.log("yooooo");
        }, 500);

        isSection2_2Expanded = true;
    }
}