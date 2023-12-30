let btn = document.querySelector("button");

btn.addEventListener("click" , async () => {
    let text1 = await getdata();
    
    let p = document.querySelector("p");
    p.innerText = text1;
    
});




    
let url = "https://catfact.ninja/fact";

async function getdata(){
    try {
        let resp = await axios.get(url);
        return resp.data.fact;
        
    } 
    catch (e) {
        console.log("err",e);
        return "NO FACT RETURN";
    }
};

















// async function getdata(){
// try{
//     let resp = await fetch(url);//fetch method does not convert data into the readable format but axios method is the advance version of the fetch  
//     let data = await resp.json();
//     console.log(data.code);

//     let resp2 = await fetch(url);
//     let data2 = await resp2.json();
//     console.log(data2.code);

// }catch(e){
//     console.log("err",e);
// }
// }
   