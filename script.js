function addItem() {
  const input = document.getElementById("inputField");
  const value = input.value;

  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;

  document.getElementById("list").appendChild(li);

  input.value = "";
}
