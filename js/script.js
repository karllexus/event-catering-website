// CUSTOMIZE THESE SETTINGS BEFORE PUBLISHING:
const SETTINGS = {
    brandName: "YOUR BRAND",
    email: "hello@yourbrand.com",
    whatsappNumber: "", // Example: 639171234567 (digits only, include country code)
    messengerPageUrl: "", // Paste your Facebook page / Messenger link
    instagramUrl: "",
    facebookUrl: ""
};
document.title = SETTINGS.brandName + " — Gather beautifully";
document.querySelectorAll(".logo").forEach(el => { el.childNodes[0].textContent = SETTINGS.brandName + " "; });
document.getElementById("year").textContent = new Date().getFullYear();
const wa = SETTINGS.whatsappNumber ? "https://wa.me/" + SETTINGS.whatsappNumber : "#booking";
const fb = SETTINGS.messengerPageUrl || "#booking";
document.getElementById("waLink").href = wa; document.getElementById("floatWa").href = wa;
document.getElementById("fbLink").href = fb; document.getElementById("fbFooter").href = SETTINGS.facebookUrl || "#booking";
document.getElementById("igLink").href = SETTINGS.instagramUrl || "#booking";
document.getElementById("inquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const d = new FormData(this);
    const subject = encodeURIComponent("Event inquiry — " + d.get("name"));
    const body = encodeURIComponent(
        "Name: " + d.get("name") + "\nEmail: " + d.get("email") + "\nContact: " + d.get("phone") +
        "\nEvent: " + d.get("event") + "\nDate: " + d.get("date") + "\nGuests: " + d.get("guests") +
        "\nPackage: " + d.get("package") + "\n\nDetails:\n" + d.get("message")
    );
    document.getElementById("notice").classList.add("show");
    window.location.href = "mailto:" + SETTINGS.email + "?subject=" + subject + "&body=" + body;
});
