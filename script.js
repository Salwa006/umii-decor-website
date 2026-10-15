const bookingForm=document.getElementById("booking-form");
bookingForm.addEventListener("submit",function(event){
    const name= document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    const eventType=document.getElementById("event").value;
    const date=document.getElementById("date").value;
    const message=document.getElementById("message").value;
    const whatsapp Number="254722805580";
    const whatsappMessage='Hello Umii's Decor!♡
    My name is ${name}.
    My phone number is ${phone}.
    Event type: ${eventType}.
    Event date: ${date}.
    Additional details: ${message}
    I would like to make an enquiry. Thank you!';
    const whatsappURL=
    "https://wa.me/" + 254722805580 +
    "?text=" + encodeURIComponent(bookingMessage);
    window.open(whatsappURL,"_blank");
});