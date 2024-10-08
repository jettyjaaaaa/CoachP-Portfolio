document.addEventListener('DOMContentLoaded', function() {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        document.querySelector(`.tab-links[data-tabname="${tabname}"]`).classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    for (let tablink of tablinks) {
        tablink.addEventListener('click', function() {
            opentab(this.getAttribute('data-tabname'));
        });
    }

    // For the 'ผลงาน' section
    const tablinks1 = document.getElementsByClassName("tab-links1");
    const tabcontents1 = document.getElementsByClassName("tab-contents1");

    function opentab1(tabname) {
        for (let tablink of tablinks1) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents1) {
            tabcontent.classList.remove("active-tab");
        }
        document.querySelector(`.tab-links1[data-tabname="${tabname}"]`).classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    for (let tablink of tablinks1) {
        tablink.addEventListener('click', function() {
            opentab1(this.getAttribute('data-tabname'));
        });
    }

    const sidemenu = document.getElementById("sidemenu");
    document.querySelector('.fa-bars').addEventListener('click', function() {
        sidemenu.classList.add("active");
    });
    document.querySelector('.fa-xmark').addEventListener('click', function() {
        sidemenu.classList.remove("active");
    });
});
