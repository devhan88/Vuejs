export default function (value) {
  return value.reduce((total, val) => total + val, 0);
}