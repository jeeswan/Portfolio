// about section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    } 
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

// save contact info in a google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyN9TpNWiazHBNj4ifjkq-osvej5RajD51LOQJjjopX1nNjZ5oiRiUYm1CEgeUj0brr/exec'
  const form = document.forms['submit-to-google-sheet']
  constmsg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })