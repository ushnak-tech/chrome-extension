
let myLeads = []
//localStorage.clear()

const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn=document.getElementById("del-btn")
const tabBtn=document.getElementById("tab-btn")







const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
    

}


inputbtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)
    

})



deletebtn.addEventListener("dblclick",function(){
    myLeads=[]
    localStorage.clear()
    render(myLeads)
    
})

tabBtn.addEventListener("click",function () {

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    })
    
 
    
})




function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        //ulEl.innerHTML+= "<li>"+ myLeads[i] + "</li>"

        //below is the yet another method for doing inner html:

        //     const li=document.createElement("li")
        //     li.textContent+=myLeads[i]
        //     ulEl.append(li)



        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // another method for doing this is below::::: which i found is more readable and looks exactly to almost same as HTML and easy human parsable

        listItems += `<li>
                            <a target='_blank' href='${leads[i]}' >
                            ${leads[i]}
                            </a>
                    </li>`              //these are known as template stringhs/literals


    }


    ulEl.innerHTML = listItems
}








