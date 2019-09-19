/*
    Using map(), to extract the purchasing agent object
    from each business and store it in a new array
*/
const agentList = document.querySelector("#purchasingAgent-container")
agentList.innerHTML +="<h1>Purchasing Agents</h1>"

const agents = businesses.map(business => {
    const agentInfo ={
        agentName : business.purchasingAgent,
        companyName : business.companyName,
        phone:  business.phoneWork
    }
  return agentInfo
})

agents.forEach(agent => {
    agentList.innerHTML += `<h2>${agent.agentName.nameFirst} ${agent.agentName.nameLast}</h2>
    <p>${agent.companyName}</p>
    <p>${agent.phone}</p>`
})