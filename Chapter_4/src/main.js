import Vue from 'vue'
import App from './App.vue';
import { addition, multiply, subtract, asyncAdd, mean } from './maths';

Vue.config.productionTip = false;
//example 1
let product = [
  { name: 'Hat', price: 24.5, stock: 10 },
  { name: 'Kayak', price: 289.99, stock: 1 },
  { name: 'Soccer Ball', price: 10, stock: 0 },
  { name: 'Running Choes', price: 116.50, stock: 20 }
];

let totalValue = product
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);

let values = [10, 20, 30, 40, 50];
//example 2
console.log(`Sum: ${addition(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
console.log(`Mean: ${mean(values)}`);
//cach 1
asyncAdd(values).then(total => console.log(`Main total: ${total}`));

//cách 2
async function doTask() {
  let tota = await asyncAdd(values);
  console.log(`Main total async: ${tota}`);
}
doTask();

new Vue({
  render: h => h(App),
}).$mount('#app')
