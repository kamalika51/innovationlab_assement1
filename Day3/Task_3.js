function completeTask() {
  console.log("Task completed!");
}

function startTask() {
  console.log("Starting task...");
  setTimeout(completeTask, 1000);
}

function checkScopes() {
  var globalVar = "Global using var";
  let blockLet = "Block using let";
  const blockConst = "Block using const";

  if (true) {
    var insideVar = "Inside if-block (var)";
    let insideLet = "Inside if-block (let)";
    const insideConst = "Inside if-block (const)";
    console.log("Inside block (let):", insideLet);
    console.log("Inside block (const):", insideConst);
  }

  console.log("Outside block (var):", insideVar);
}
