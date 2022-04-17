
        $(function() {
            var w = 1600,
            amount = 0;

                $(".left").click(function(e) {
                    e.preventDefault();
                    amount -= w;
                    $(".slide-list").css({"left":"amount"});
                    $(".slide-list").prepend($(".slide-list li").last());

                    amount += w;
                    $(".slide-list").animate({"left":"amount"},500)
                });

                $(".right").click(function(e) {
                    e.preventDefault();
                    amount += w;
                    $(".slide-list").css({"left":"amount"});
                    $(".slide-list").prepend($(".slide-list li").last());

                    amount -= w;
                    $(".slide-list").animate({"left":"amount"},500)


                });
        });

        $(".ev-btn").click(function() {
            $(".ev-btn").removeClass("ev-active");
            $(this).addClass("ev-active");
        })
        
        $(".ev-btn-1").click(function() {
            $(".event-list").css({"margin-left":"0px"});
        });

        $(".ev-btn-2").click(function() {
            $(".event-list").css({"margin-left":"-1200px"})
        });

        $(".ev-btn-3").click(function() {
            $(".event-list").css({"margin-left":"-2400px"})
        });

        
        $(".family-site").click(function() {
            $(".ab").toggleClass("on");
            $(".fa-angle-up").toggleClass("fa-angle-down");
        });



        window.addEventListener("scroll", function(){
            let scrollHeight = document.documentElement.scrollTop;
            let adImg = document.getElementById("slideup-ad-img");

            if(scrollHeight > 200) {
                adImg.style.height = "0";
            }
        });


        $("#search-icon").click(function() {
            $(".search-area").toggleClass("on");
        });