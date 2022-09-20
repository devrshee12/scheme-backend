const submitButton = document.getElementById("submit");
const schemeTitle = document.getElementById("schemetitle");
const desc = document.getElementById("desc");
const income = document.getElementById("income");
const category = document.getElementById("category");
const criteria = document.getElementById("criteria");
const docs = document.getElementById("docs");
const link = document.getElementById("link");
const result = document.getElementById("result");




var obj;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    obj = {
        title: schemeTitle.value,
        desc: desc.value,
        income: income.value,
        category: category.value.split(";"),
        criteria: criteria.value.split(";"),
        docs: docs.value.split(";"),
        link: link.value
    
    };
    console.log(obj);
    const url = "http://localhost:3030/api/v1/schemes"
    sendReq(url);
})




const sendReq = async(url) => {
    try{
        const res = await fetch(url,{
            method:"POST",
            body: JSON.stringify(obj),
             
            // // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        });
        const data = await res.json();
        console.log(data);
        result.innerHTML = data.result;

    }
    catch(err){
        console.log(err);
    }
}