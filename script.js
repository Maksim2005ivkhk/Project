$(document).ready(function () {
    // Clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        $('#clockDisplay').text(formattedTime);
    }

    setInterval(updateClock, 1000);

    // Form Validation
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();

        if (name && email) {
            alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Image Slider
    const slider = $('#slider');
    const images = slider.find('img');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100;
        slider.css('transform', `translateX(${translateValue}%)`);
    }

    setInterval(nextSlide, 3000);
});

/* Add this script inside your existing JavaScript file or create a new one */

document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".main-image img");
    const sideImages = document.querySelectorAll(".side-images img");

    sideImages.forEach(function (image, index) {
        image.addEventListener("click", function () {
            mainImage.src = this.src;
            resetSideImages();
            this.style.transform = "scale(1.2)";
        });
    });

    function resetSideImages() {
        sideImages.forEach(function (image) {
            image.style.transform = "scale(1)";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Set the countdown time in seconds
    const countdownTime = 450000000;// Change this value to the desired countdown time

    let countdown = countdownTime;

    function updateCountdown() {
        const countdownElement = document.getElementById("countdown");

        const days = Math.floor(countdown / (24 * 60 * 60));
        const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdown % (60 * 60)) / 60);
        const seconds = countdown % 60;

        countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        if (countdown === 0) {
            // Redirect back to the site or update the URL accordingly
            window.location.href = ""; // Replace with your actual website URL
        } else {
            countdown--;
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
	});
/* Add this script inside your existing JavaScript file or create a new one */

$(document).ready(function () {
    // Initial rating value
    let selectedRating = 0;

    // Highlight selected rating and handle click events
    $('.dot').click(function () {
        selectedRating = parseInt($(this).attr('data-rating'));
        updateRating();
    });

    function updateRating() {
        $('.dot').removeClass('active');
        for (let i = 1; i <= selectedRating; i++) {
            $(`.dot[data-rating="${i}"]`).addClass('active');
        }

        // Display the selected rating
        $('#selected-rating').text(selectedRating);

        // You can use the 'selectedRating' value as needed, e.g., send it to the server for analysis
    }
});
