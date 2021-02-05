const { performance, PerformanceObserver } = require("perf_hooks");

const add = (a, b) => a + b;

const numa = 1;
const numb = 2;

performance.mark();

for (let i = 0; i < 100000; i++) {
  add(numa, numb);
}

add(numa, "6");

for (let i = 0; i < 100000; i++) {
  add(numa, numb);
}

performance.mark("end");

const observable = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0]);
});

observable.observe({
  entryTypes: ["measure"],
});

performance.measure("测量1", "start", "end");
