let button = document.getElementById("button").addEventListener("click", () => {
    let aboutMe = document.getElementById("me");
    if (aboutMe.style.display === "none") aboutMe.style.display = "inline";
   
    else aboutMe.style.display = "none"
 
})

let h2 = document.getElementById("name");
const myfunc = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("I'm Odinukwe Anthony")
        }, 10000)
    })
}

async function asyncFunc2(){
    const result = await myfunc();
    h2.innerHTML = result;
}
asyncFunc2()