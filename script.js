const url =
"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";
let tableBody = document.getElementById("table-body");
let infoContent = document.getElementById("info-content");
function personTable (items) {
items.forEach((item) => { 
const element1 =
document.createElement("tr");
element1.classList.add("data-row");
element1.setAttribute("id", item.id);
element1.appendChild(createColumn (item.id, 1)); element1.appendChild(createColumn(item.customerName, 2));
element1.appendChild( createColumn (item.orderDate +" " + item.orderTime, 3));
element1.appendChild(createColumn(item.amount,4)
); element1.appendChild(createColumn(item.orderstatus, 5));
tableBody.appendChild(element1);
});
}
function initializeTable() {
$.get(url, (response) =>{
  personTable(response);
});
}
initializeTable();
const url2 =  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products";
let tableBody2 = document.getElementById("table2-body");
let infoContent2 = document.getElementById("info-content");
function SecpersonTable(items) {
items.forEach((item) => {
const element2 = document.createElement("tr"); element2.classList.add("data-row");
 element2.setAttribute("id", item.id); element2.appendChild(createColumn (item.id, 1));
element2.appendChild(createColumn(item.medicineName, 2)); 
element2.appendChild(createColumn (item.medicineBrand, 3));
element2.appendChild(createColumn(item.expiryDate, 4)); element2.appendChild(createColumn(item.unitPrice, 5));
element2.appendChild(createColumn (item.stock, 6));
tableBody2.appendChild(element2);
});
}
function  SecinitializeTable(){
$.get(url2, (response) => { SecpersonTable(response);
});
}
SecinitializeTable();
const url3 = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"; 
let tableBody3 = document.getElementById("table3-body");
let infoContent3 = document.getElementById("info-content");
// console.log(response)
function ThirdpersonTable(items) {
//console.log(items);
items.forEach((item) => {
const element3 = document.createElement("tr"); element3.classList.add("data-row");
element3.setAttribute("id", item.id);
element3.appendChild(createColumn (item.id, 1));
var img = document.createElement("img"); img.setAttribute("src", item.profilePic);
  console.log(img);
element3.appendChild(createwithImg (img, 2));
// var column = document.getElementsByClassName("column2");
// var img1 = column.append(img)
//console.log(column);
element3.appendChild(createColumn(item.fullName, 3));
element3.appendChild(createColumn (item.dob, 4));
element3.appendChild(createColumn(item.gender, 5));
element3.appendChild(
createColumn (item.currentCity + " " + item.currentCountry, 6)
);
tableBody3.appendChild(element3);
});
}
function ThirdinitializeTable() {
$.get(url3, (response) => { ThirdpersonTable(response);
});
}
ThirdinitializeTable();
function createColumn(data, index) {
const column = document.createElement("td"); column.classList.add('column${index}');
column.innerText = data;
return column;
} 
function createwithImg (data, index) {
 const column = document.createElement("td"); column.classList.add('column${index}');
column.appendChild(data);
return column;
}

$(document).ready(function () {
$(".option").on("click", function () {
  console.log(this);
 $("#table-body tr").hide(); 
 var flag = 1; $("input:checkbox[name=name]:checked").each(function () { 
flag = 0;
var value = $(this).val().toLowerCase();
$("#table-body tr").filter(function () {
if ($(this).text().toLowerCase().indexOf(value) > -1) $(this).show();
});
});
if (flag == 1) $("#table-body tr").hide();
});
});
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("btnId");
loginButton.addEventListener("click", (e) => {
e.preventDefault();
const username = loginForm.username.value;
const password = loginForm.password.value;
  if (username === "user" && password == "login") { 
 alert("You have successfully logged in.");
// location.reload();
window.addEventListener("click", loginClick);
}
 else {
alert("Please enter valid credentials!");
}
}); 
function loginClick() {
table1.style.display = "block"; form.style.display = "none";
}
const searchFun = () => {
let filter = document.getElementById("my Input").value.toUpperCase(); 
let myTable = document.getElementById("table3-body"); 
let tr = myTable.getElementsByTagName("tr");
for (var i = 0; i < tr.length; i++) {
let td = tr[i].getElementsByTagName("td") [2];
console.log(td);
if (td) {
let textValue = td.textContent || td.innerHTML; if (textValue.toUpperCase().indexOf(filter) > -1) {
tr[i].style.display = "";
}else{
tr[i].style.display = "none";
}
}
}
};
$(document).ready(function () {
$(".option1").on("click", function () {
console.log(this);
$("#table2-body tr").hide();
  var flag = 1;
$("input:checkbox[name=name1]:checked").each(function () {
flag = 0;
var value1 = $(this).val().toLowerCase();
console.log(value1);
let myTable = document.getElementById("table2-body");
let tr = myTable.getElementsByTagName("tr"); 
  for (var i = 0; i < tr.length; i++) {
let td = tr[i].getElementsByTagName("td")[3]; 
let td2 = tr[i].getElementsByTagName("td") [5];
if (td && td2) {
let textValue = td.textContent || td.innerHTML;
let textValue2 = td2.textContent || td.innerHTML; let subText = textValue.substring(7, 11);
if (subText > 2022 && textValue2 > 100) {
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}
}
});
});
});
let table1 = document.querySelector(".table1-name"); 
let table2 = document.querySelector(".table2-name"); 
let table3 = document.querySelector(".table3-name");
let form = document.querySelector(".form"); function orderTable() {
table1.style.display = "block";
form.style.display = "none";
table2.style.display = "none";
table3.style.display = "none";
}
function orderTable1() {
table1.style.display = "none"; 
form.style.display = "none";
table2.style.display = "block";
table3.style.display = "none";
}
function orderTable2() {
table1.style.display = "none"; 
form.style.display = "none";
table2.style.display = "none";
table3.style.display = "block";
}
document.querySelector(".order-page").addEventListener("click", orderTable); document.querySelector(".products-page").addEventListener("click", orderTable1); document.querySelector(".users-page").addEventListener("click", orderTable2);