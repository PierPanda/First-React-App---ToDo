function Title() {
  return React.createElement("h1",
  {className: 'title'},"Hello React")
};
console.log(Title());

ReactDOM.createRoot(
  document.getElementById("root")
).render(Title());
