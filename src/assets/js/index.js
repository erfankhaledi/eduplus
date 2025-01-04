!function(a) {
    "use strict";
    gsap.config({
        nullTargetWarn: !1
    }),
    a.fn.mobilemenu = function(e) {
        var t = a.extend({
            menuToggleBtn: ".menu-toggle",
            bodyToggleClass: "body-visible",
            subMenuClass: "submenu-class",
            subMenuParent: "submenu-item-has-children",
            subMenuParentToggle: "active-class",
            meanExpandClass: "mean-expand-class",
            appendElement: '<span class="mean-expand-class"></span>',
            subMenuToggleClass: "menu-open",
            toggleSpeed: 400
        }, e);
        return this.each(function() {
            var n = a(this);
            function s() {
                n.toggleClass(t.bodyToggleClass);
                var e = "." + t.subMenuClass;
                a(e).each(function() {
                    a(this).hasClass(t.subMenuToggleClass) && (a(this).removeClass(t.subMenuToggleClass),
                    a(this).css("display", "none"),
                    a(this).parent().removeClass(t.subMenuParentToggle))
                })
            }
            n.find("li").each(function() {
                var e = a(this).find("ul");
                e.addClass(t.subMenuClass),
                e.css("display", "none"),
                e.parent().addClass(t.subMenuParent),
                e.prev("a").append(t.appendElement),
                e.next("a").append(t.appendElement)
            });
            var e = "." + t.meanExpandClass;
            a(e).each(function() {
                a(this).on("click", function(e) {
                    e.preventDefault(),
                    e = a(this).parent(),
                    0 < a(e).next("ul").length ? (a(e).parent().toggleClass(t.subMenuParentToggle),
                    a(e).next("ul").slideToggle(t.toggleSpeed),
                    a(e).next("ul").toggleClass(t.subMenuToggleClass)) : 0 < a(e).prev("ul").length && (a(e).parent().toggleClass(t.subMenuParentToggle),
                    a(e).prev("ul").slideToggle(t.toggleSpeed),
                    a(e).prev("ul").toggleClass(t.subMenuToggleClass))
                })
            }),
            a(t.menuToggleBtn).each(function() {
                a(this).on("click", function() {
                    s()
                })
            }),
            n.on("click", function(e) {
                e.stopPropagation(),
                s()
            }),
            n.find("div").on("click", function(e) {
                e.stopPropagation()
            })
        })
    }
    ,
    a(".mobile-menu-wrapper").mobilemenu(),
    a.fn.sidebarmenu = function(e) {
        var t = a.extend({
            menuToggleBtn: ".sidemenu-toggle",
            bodyToggleClass: "body-visible",
            subMenuClass: "submenu-class",
            subMenuParent: "submenu-item-has-children",
            subMenuParentToggle: "active-class",
            meanExpandClass: "mean-expand-class",
            appendElement: '<span class="mean-expand-class"></span>',
            subMenuToggleClass: "menu-open",
            toggleSpeed: 400
        }, e);
        return this.each(function() {
            var n = a(this);
            function s() {
                n.toggleClass(t.bodyToggleClass);
                var e = "." + t.subMenuClass;
                a(e).each(function() {
                    a(this).hasClass(t.subMenuToggleClass) && (a(this).removeClass(t.subMenuToggleClass),
                    a(this).css("display", "none"),
                    a(this).parent().removeClass(t.subMenuParentToggle))
                })
            }
            n.find("li").each(function() {
                var e = a(this).find("ul");
                e.addClass(t.subMenuClass),
                e.css("display", "none"),
                e.parent().addClass(t.subMenuParent),
                e.prev("a").append(t.appendElement),
                e.next("a").append(t.appendElement)
            });
            var e = "." + t.meanExpandClass;
            a(e).each(function() {
                a(this).on("click", function(e) {
                    e.preventDefault(),
                    e = a(this).parent(),
                    0 < a(e).next("ul").length ? (a(e).parent().toggleClass(t.subMenuParentToggle),
                    a(e).next("ul").slideToggle(t.toggleSpeed),
                    a(e).next("ul").toggleClass(t.subMenuToggleClass)) : 0 < a(e).prev("ul").length && (a(e).parent().toggleClass(t.subMenuParentToggle),
                    a(e).prev("ul").slideToggle(t.toggleSpeed),
                    a(e).prev("ul").toggleClass(t.subMenuToggleClass))
                })
            }),
            a(t.menuToggleBtn).each(function() {
                a(this).on("click", function() {
                    s()
                })
            }),
            n.on("click", function(e) {
                e.stopPropagation(),
                s()
            }),
            n.find("div").on("click", function(e) {
                e.stopPropagation()
            })
        })
    }
    ,
    a(".sidebar-menu-wrapper").sidebarmenu(),
    a(window).scroll(function() {
        500 < a(this).scrollTop() ? a(".sticky-wrapper").addClass("sticky") : a(".sticky-wrapper").removeClass("sticky")
    }),
    a(window).scroll(function() {
        920 < a(this).scrollTop() ? a(".sticky-wrapper2").addClass("sticky") : a(".sticky-wrapper2").removeClass("sticky")
    }),
    a(document).ready(function() {
        new Swiper(".my-swiper-student-slider",{
            loop: !0,
            grabCursor: !0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: !1
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }),
    a(document).ready(function() {
        !function e() {
            gsap.to("#banner-img-bg-circle, .middle-img-circle", {
                rotation: 360,
                ease: "none",
                duration: 20,
                repeat: -1,
                onComplete: e
            })
        }()
    }),
    a(document).ready(function() {
        new Swiper(".swiper-banner",{
            effect: "fade",
            loop: !0,
            freeMode: !0,
            watchSlidesProgress: !0,
            speed: 800,
            autoplay: {
                delay: 6e3,
                disableOnInteraction: !1
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }),
    a(document).ready(function() {
        new Swiper(".mySwiper-Student-feedback",{
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: {
                delay: 8e3,
                disableOnInteraction: !1
            },
            speed: 1500,
            pagination: {
                clickable: !0
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                520: {
                    slidesPerView: 1
                },
                950: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 2
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }),
    a(document).ready(function() {
        new Swiper(".mySwiper-courses",{
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: {
                delay: 5e3,
                disableOnInteraction: !1
            },
            speed: 1500,
            pagination: {
                clickable: !0
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                520: {
                    slidesPerView: 1
                },
                950: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 2
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }),
    a(".item").click(function() {
        a(this).toggleClass("active")
    }),
    a(".getting-started").countdown("2024/07/01", function(e) {
        a(this).html(e.strftime('<div class="single-countdown"><h2 class="count-title">%D</h2><span class="count-para">Days</span></div><div class="single-countdown"><h2 class="count-title">%H</h2><span class="count-para">hour</span></div><div class="single-countdown"><h2 class="count-title">%M</h2><span class="count-para">min</span></div><div class="single-countdown"><h2 class="count-title">%S</h2><span class="count-para">second</span></div>'))
    }),
    a(document).ready(function() {
        a(".counter").counterUp({
            delay: 10,
            time: 1500,
            offset: 100
        })
    }),
    a(document).ready(function() {
        new Swiper(".mySwiper-logo",{
            slidesPerView: 4,
            spaceBetween: 30,
            loop: !0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: !1
            },
            speed: 2e3,
            breakpoints: {
                0: {
                    slidesPerView: 2
                },
                520: {
                    slidesPerView: 3
                },
                950: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                }
            }
        })
    });
    const e = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        100 < window.pageYOffset ? e.classList.add("active") : e.classList.remove("active")
    }
    ),
    a(document).ready(function() {
        a(".youtube").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    }),
    a(document).ready(function() {
        !function() {
            let e = a(".search-option-box")
              , n = a(".search")
              , s = a(".close-icon");
            n.on("click", function() {
                e.addClass("open")
            }),
            s.on("click", function() {
                e.removeClass("open")
            })
        }()
    }),
    a(document).ready(function() {
        const s = a(".my-progress-bar .progress-vale");
        a(window).on("scroll", function n() {
            s.each(function() {
                var e;
                0 <= (e = (e = this).getBoundingClientRect()).top && 0 <= e.left && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth) && (s.each(function() {
                    anime({
                        targets: this,
                        width: [`${parseInt(this.dataset.progressMinWidth)}%`, `${parseInt(this.dataset.progressMaxWidth)}%`],
                        easing: "linear",
                        duration: parseInt(this.dataset.progressDuration) || 1e3,
                        delay: parseInt(this.dataset.progressDelay) || 500
                    })
                }),
                a(window).off("scroll", n))
            })
        })
    }),
    a(document).ready(function() {
        new Swiper(".events-slider",{
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        })
    }),
    a(document).ready(function() {
        var e = new Swiper(".mySwiper-client",{
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: !0,
            watchSlidesProgress: !0
        });
        new Swiper(".mySwiper2-client",{
            spaceBetween: 10,
            grabCursor: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            thumbs: {
                swiper: e
            }
        })
    }),
    a(document).ready(function() {
        AOS.init()
    })
}(jQuery);
