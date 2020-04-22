module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function succeed(item) {
  if(item.enhancement < 20) {
    item.enhancement = item.enhancement + 1
    return {...item}
  } else {
    return {...item}
  }
  
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability -5
    return {...item}

  } if (item.enhancement >= 15) {
    item.durability = item.durability - 10
    if(item.enhancement > 16) {
      item.enhancement = item.enhancement -1

      return {...item}
    }

  } 
}

function repair(item) {
  item.durability = 100
  return {...item};
}

function get(item) {
 
}
