const resultTable = document.querySelector('#results tbody')
const counter = document.querySelector('.counter')
const counterValue = parseInt(counter.innerText)
let countStart = 0

const displayResults = (hcp, i) => {
  let html = `
    <tr>
    <td>${i}</td>
    <td>${hcp.title}</td>
    <td>${hcp.name}</td>
    <td>${hcp.specialty}</td>
    <td>${hcp.hospital}</td>
    <td>${hcp.city}</td>
    <td>${hcp.message}</td>
    </tr>
    `
    resultTable.innerHTML += html
}

db.collection('hcps').get().then(snapshot => {
  snapshot.docs.forEach((item, i) => {
    displayResults(item.data(), i+1)
  })
}).catch(err => {
  console.log(err)
  })

const counting = () => {
  if(countStart<= counterValue) {
    countStart += 1
    counter.innerText = countStart
  } else {
    counter.innerText = counterValue
  }
}

setInterval(counting, 4)
