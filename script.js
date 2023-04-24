function getFormvalue() {
    //Write your code here
const f = document.getElementById("form1");
  const firstName = f.elements["fname"].value;
  const lastName = f.elements["lname"].value;
  alert(firstName+" "+lastName);
}
