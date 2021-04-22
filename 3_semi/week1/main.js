const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  // count を更新
  count += 1
  // count を秒単位にして表示
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
    if (id === null) {
        // start
        id = setInterval(countUp, 10)
        button.textContent = "stop"
    } else {
        // stop
        clearInterval(id)
        id = null
        button.textContent = "start"
    }
}