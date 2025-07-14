try {
  // Chart.js dashboard
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Tasks Done', 'Hours Studied', 'Budget Used'],
      datasets: [{
        label: 'Mission Metrics',
        data: [12, 8, 200],
        backgroundColor: ['#ff3e81', '#3e8fff', '#00e676']
      }]
    },
    options: { responsive: true }
  });

  // To-Do List
  function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (input.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input.value;
      taskList.appendChild(li);
      input.value = "";
    }
  }
  window.addTask = addTask;

  // Study Timer
  let timer;
  let timeLeft = 25 * 60;
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (timeLeft <= 0) clearInterval(timer);
      else {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("countdown").textContent = 
          `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    }, 1000);
  }
  function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    document.getElementById("countdown").textContent = "25:00";
  }
  window.startTimer = startTimer;
  window.resetTimer = resetTimer;

  // Budget Tracker
  let total = 0;
  function addExpense() {
    const expense = parseFloat(document.getElementById("expense").value);
    if (!isNaN(expense)) {
      total += expense;
      document.getElementById("budgetTotal").textContent = `Total: $${total}`;
      document.getElementById("expense").value = "";
    }
  }
  window.addExpense = addExpense;

} catch (err) {
  alert("😹 Oops! Sorry fellow explorer! AstroLytics isn’t interacting with its backend. It’s like a cat trying to play fetch with a dog. Try again wearing your lucky socks & cap. If it STILL breaks, email digilingo.hackerstr@gmail.com 🚀");
}
