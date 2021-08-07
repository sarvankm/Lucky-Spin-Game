const spin = document.getElementById("spin");
const container = document.querySelector(".container");
const input=document.getElementById("inp");
document.getElementById("inp").value = -10;
container.style.transform = "rotateZ(-10deg)";
spin.addEventListener("click", () => {
    
    const RandomNum = Math.abs(Math.floor((Math.random() * 10) - 3));
    if (RandomNum === 0) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm1"
            input.value = "-260"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm3"
            input.value = "-260"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm4"
            input.value = "-260"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm5"
            input.value = "-260"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm6"
            input.value = "-260"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm2"
            input.value = "-260"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm7"
            input.value = "-260"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(-260deg)";
            container.style.animation = "4s anm8"
            input.value = "-260"
        }
    }
    if (RandomNum === 1) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm1"
            input.value = "-210"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm3"
            input.value = "-210"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm4"
            input.value = "-210"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm5"
            input.value = "-210"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm6"
            input.value = "-210"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm2"
            input.value = "-210"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm7"
            input.value = "-210"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(-210deg)";
            container.style.animation = "4s Slice2Anm8"
            input.value = "-210"
        }
    }
    if (RandomNum === 2) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm1"
            input.value = "-160"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm3"
            input.value = "-160"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm4"
            input.value = "-160"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm5"
            input.value = "-160"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm6"
            input.value = "-160"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm2"
            input.value = "-160"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm7"
            input.value = "-160"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(-160deg)";
            container.style.animation = "4s Slice3Anm8"
            input.value = "-160"
        }
    }
    if (RandomNum === 3) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm1"
            input.value = "-110"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm3"
            input.value = "-110"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm4"
            input.value = "-110"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm5"
            input.value = "-110"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm6"
            input.value = "-110"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm2"
            input.value = "-110"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm7"
            input.value = "-110"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(-110deg)";
            container.style.animation = "4s Slice4Anm8"
            input.value = "-110"
        }
    }
    if (RandomNum === 4) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm1"
            input.value = "-60"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm3"
            input.value = "-60"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm4"
            input.value = "-60"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm5"
            input.value = "-60"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm6"
            input.value = "-60"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm2"
            input.value = "-60"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm7"
            input.value = "-60"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(-60deg)";
            container.style.animation = "4s Slice5Anm8"
            input.value = "-60"
        }
    }
    if (RandomNum === 5) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm1"
            input.value = "-10"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm3"
            input.value = "-10"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm4"
            input.value = "-10"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm5"
            input.value = "-10"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm6"
            input.value = "-10"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm2"
            input.value = "-10"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm7"
            input.value = "-10"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(-10deg)";
            container.style.animation = "4s Slice6Anm8"
            input.value = "-10"
        }
    }
    if (RandomNum === 6) {
        if (input.value === "-10") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm1"
            input.value = "40"
        }
        else if (input.value === "-60") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm3"
            input.value = "40"
        }
        else if (input.value === "-110") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm4"
            input.value = "40"
        }
        else if (input.value === "-160") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm5"
            input.value = "40"
        }
        else if (input.value === "-210") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm6"
            input.value = "40"
        }
        else if (input.value === "-260") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm2"
            input.value = "40"
        }
        else if (input.value === "-310") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm7"
            input.value = "40"
        }
        else if (input.value === "-360") {
            container.style.transform = "rotateZ(40deg)";
            container.style.animation = "4s Slice7Anm8"
            input.value = "40"
        }
    }
    setTimeout(() => {
        container.style.animation = ""
    }, 4000);
})
