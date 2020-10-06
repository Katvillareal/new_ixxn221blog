            // nav bar javascript

            const navSlide = () => {
                const burger = document.querySelector('.burger');
                const nav = document.querySelector('.nav-links');
                const navLinks = nav.querySelectorAll('li');

                // Toggle the navbar
                burger.addEventListener('click', () => {
                    nav.classList.toggle('nav-active');
                    // Add KeyFrame to the lists
                    navLinks.forEach((list, index) => {
                            if (list.style.animation) {
                                list.style.animation = '';
                            } else {
                                list.style.animation = `navLinkFade .6s ease-in-out forwards ${index / 6 + .4}s`;
                            }
                        })
                        // Add Toggle Class
                    burger.classList.toggle('toggle');
                });
            }
            navSlide();


            //slideshow javascrip
            var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {
                    slideIndex = 1
                }
                if (n < 1) {
                    slideIndex = slides.length
                };
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
            }