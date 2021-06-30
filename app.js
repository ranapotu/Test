// ICON SECTION
const showContent = (id) => {
  //  console.log(`Button with id ${id} clicked`)
  for (let i = 1; i <= 5; i++) {
    checkId = `icon-${i}`
    //   console.log(checkId)
    if (checkId === id) {
      document.getElementById(i).style.display = 'block'
      document.getElementById(`icon-head-${i}`).style.backgroundColor =
        '#f9e5ea'
    } else {
      document.getElementById(i).style.display = 'none'
      document.getElementById(`icon-head-${i}`).style.backgroundColor = 'white'
    }
  }
}

// PACKAGE SECTION

const includeClicked = (clickedID) => {
  console.log(clickedID)

  for (let i = 1; i <= 3; i++) {
    listId = `include-${i}`
    // console.log(listId)
    if (clickedID === listId) {
      console.log(listId)
      list = document.getElementById(`list-${i}`)
      if (list.style.display === 'none') {
        list.style.display = 'block'
      } else {
        list.style.display = 'none'
      }
    }
  }
}

//Accordian Section

const toggle = (id) => {
  //  console.log(id)
  for (let i = 1; i <= 5; i++) {
    matchId = `a-${i}`
    if (matchId === id) {
      //      console.log(id)
      paraId = `p-${i}`
      plusId = `plus-${i}`
      minusId = `minus-${i}`
      //      console.log(paraID)
      para = document.getElementById(paraId)
      plus = document.getElementById(plusId)
      minus = document.getElementById(minusId)
      //     console.log(para)
      if (para.style.display === 'none') {
        para.style.display = 'block'
        plus.style.display = 'none'
        minus.style.display = 'block'
      } else {
        para.style.display = 'none'
        plus.style.display = 'block'
        minus.style.display = 'none'
      }
    }
  }
}
