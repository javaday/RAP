var Layout= {
    settings: {
        autoScrollWhenMenuIsActive: !1, improvePerformance: !0, rtl: !1, themeClass: ""
    }
    ,
    handleRtlLayout:function() {
        $body=$("body"), this.settings.rtl?$body.addClass("layout-rtl"): $body.removeClass("layout-rtl")
    }
    ,
    handleThemeColor:function() {
        $body=$("body"), $body.removeClass(function(e, a) {
            return(a.match(/(^|\s)theme-\S+/g)||[]).join(" ")
        }
        ).addClass("theme-"+this.settings.themeClass)
    }
    ,
    initLayer:function() {
        var e=$(window).height(), a=$(window).width(), s=$(".starting-point"), t=2*Math.sqrt(Math.pow(e, 2)+Math.pow(a, 2));
        s.children("span").velocity( {
            scaleX: 0, scaleY: 0, translateZ: 0
        }
        ,
        50).velocity( {
            height: t+"px", width: t+"px", top: -(t/2)+"px", left: -(t/2)+"px"
        }
        ,
        0)
    }
    ,
    layerResponsive:function() {
        var e=$(window).height(), a=$(window).width(), s=$(".starting-point"), t=2*Math.sqrt(Math.pow(e, 2)+Math.pow(a, 2));
        s.children("span").css( {
            height: t+"px", width: t+"px", top: -(t/2)+"px", left: -(t/2)+"px"
        }
        )
    }
    ,
    listenForMenuLayer:function() {
        $(".nav-menu").on("click", function() {
            var e=$(this), a=$(".starting-point"), s=$(".overlay"), t=$(".menu-layer"), n=$(".overlay-secondary"), i=$(".content"), l=$("body"), o=$(".scrollable-tabs");
            t.find('[data-open-after="true"]').addClass("open"), e.hasClass("active")?(e.addClass("rotating"), n.removeClass("fade-in"), i.removeClass("scaled"), setTimeout(function() {
                t.removeClass("active"), $.Velocity.animate(a.children("span"), {
                    translateZ: 0, scaleX: 0, scaleY: 0
                }
                ,
                {
                    duration: 500, easing: [.42, 0, .58, 1], complete: function() {
                        s.removeClass("active overlay-nav"), e.removeClass("active rotating"), t.removeClass("activating"), l.removeClass("disable-scroll"), t.find(".open").removeClass("open animate"), o.removeClass("disabled")
                    }
                }
                )
            }
            ,
            200)):(Pleasure.checkTouchScreen()||Layout.settings.improvePerformance||i.addClass("scaled"),
            t.addClass("activating"),
            o.addClass("disabled"),
            setTimeout(function() {
                l.addClass("disable-scroll"), s.addClass("overlay-nav active"), e.addClass("active"), t.addClass("active"), n.addClass("fade-in"), t.find('[data-open-after="true"]').parents("li").addClass("open animate"), $.Velocity.animate(a.children("span"), {
                    translateZ: 0, scaleX: 1, scaleY: 1
                }
                ,
                {
                    duration: 500, easing: [.42, 0, .58, 1]
                }
                ),
                Layout.settings.autoScrollWhenMenuIsActive&&setTimeout(function() {
                    t.animate( {
                        scrollTop: t.find('[data-open-after="true"]').position().top+200
                    }
                    ,
                    300)
                }
                ,
                600)
            }
            ,
            50))
        }
        ),
        $(".overlay-secondary").on("click",
        function() {
            $(".nav-menu").trigger("click")
        }
        )
    }
    ,
    //listenForSearchLayer:function() {
    //    $(".nav-search").on("click", function() {
    //        var e=$(this), a=$(".starting-point"), s=$(".overlay"), t=$("body"), n=$(".content"), i=$(".search-layer"), l=$(".scrollable-tabs");
    //        e.hasClass("active")?(i.find("input").blur(), i.removeClass("active"), e.addClass("rotating"), n.removeClass("scaled"), setTimeout(function() {
    //            $.Velocity.animate(a.children("span"), {
    //                translateZ: 0, scaleX: 0, scaleY: 0
    //            }
    //            ,
    //            {
    //                duration: 500, easing: [.42, 0, .58, 1], complete: function() {
    //                    e.removeClass("active rotating"), s.removeClass("active overlay-search"), i.removeClass("activating"), t.removeClass("disable-scroll"), l.removeClass("disabled")
    //                }
    //            }
    //            )
    //        }
    //        ,
    //        200)):(Pleasure.checkTouchScreen()||Layout.settings.improvePerformance||n.addClass("scaled"),
    //        i.addClass("activating"),
    //        l.addClass("disabled"),
    //        setTimeout(function() {
    //            t.addClass("disable-scroll"), s.addClass("overlay-search active"), e.addClass("active"), i.addClass("active"), $.Velocity.animate(a.children("span"), {
    //                translateZ: 0, scaleX: 1, scaleY: 1
    //            }
    //            ,
    //            {
    //                duration: 500, easing: [.42, 0, .58, 1], complete: function() {
    //                    Pleasure.checkTouchScreen()||i.find("input").focus()
    //                }
    //            }
    //            )
    //        }
    //        ,
    //        50))
    //    }
    //    )
    //},
    listenForEditSite:function() {
        $(".edit-site").on("click", function() {
            var e=$(this), a=$(".starting-point"), s=$(".overlay"), t=$("body"), n=$(".content"), i=$(".edit-layer"), l=$(".scrollable-tabs");
            e.hasClass("active")?(i.find("input").blur(), i.removeClass("active"), e.addClass("rotating"), n.removeClass("scaled"), setTimeout(function() {
                $.Velocity.animate(a.children("span"), {
                    translateZ: 0, scaleX: 0, scaleY: 0
                }
                ,
                {
                    duration: 500, easing: [.42, 0, .58, 1], complete: function() {
                        e.removeClass("active rotating"), s.removeClass("active overlay-editsite"), i.removeClass("activating"), t.removeClass("disable-scroll"), l.removeClass("disabled")
                    }
                }
                )
            }
            ,
            200)):(Pleasure.checkTouchScreen()||Layout.settings.improvePerformance||n.addClass("scaled"),
            i.addClass("activating"),
            l.addClass("disabled"),
            setTimeout(function() {
                t.addClass("disable-scroll"), s.addClass("overlay-editsite active"), e.addClass("active"), i.addClass("active"), $.Velocity.animate(a.children("span"), {
                    translateZ: 0, scaleX: 1, scaleY: 1
                }
                ,
                {
                    duration: 500, easing: [.42, 0, .58, 1], complete: function() {
                        Pleasure.checkTouchScreen()||i.find("input").focus()
                    }
                }
                )
            }
            ,
            50))
        }
        )
    }

    ,
    listenForUserLayer:function() {
        $(".nav-user").on("click", function() {
            var e=$(this), a=$(".starting-point"), s=$(".overlay"), t=$("body"), n=$(".content"), i=$(".user-layer"), l=$(".messages"), o=$(".scrollable-tabs");
            $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
                var a=$(e.target).attr("href");
                "#messages"==a&&l.scrollTop(l.prop("scrollHeight"))
            }
            ),
            e.hasClass("active")?(i.removeClass("active"),
            e.addClass("rotating"),
            n.removeClass("scaled"),
            setTimeout(function() {
                $.Velocity.animate(a.children("span"), {
                    translateZ: 0, scaleX: 0, scaleY: 0
                }
                ,
                {
                    duration: 500, easing: [.42, 0, .58, 1], complete: function() {
                        e.removeClass("active rotating"), s.removeClass("active overlay-user"), i.removeClass("activating"), t.removeClass("disable-scroll"), o.removeClass("disabled")
                    }
                }
                )
            }
            ,
            200)):(Pleasure.checkTouchScreen()||Layout.settings.improvePerformance||n.addClass("scaled"),
            i.addClass("activating"),
            o.addClass("disabled"),
            setTimeout(function() {
                $("#send-message-input").val("").trigger("input"), t.addClass("disable-scroll"), s.addClass("overlay-user active"), e.addClass("active"), i.addClass("active"), l.scrollTop(l.prop("scrollHeight")), $.Velocity.animate(a.children("span"), {
                    translateZ: 0, scaleX: 1, scaleY: 1
                }
                ,
                {
                    duration: 500, easing: [.42, 0, .58, 1]
                }
                )
            }
            ,
            50))
        }
        )
    }
    ,
    listenKeyboardEvents:function() {
        $(document).keyup(function(e) {
            var a=$(".nav-user"), s=$(".nav-search"), t=$(".nav-menu");
            27==e.keyCode&&t.hasClass("active")&&t.trigger("click"), 27==e.keyCode&&s.hasClass("active")&&s.trigger("click"), 27==e.keyCode&&a.hasClass("active")&&a.trigger("click")
        }
        )
    }
    ,
    listenMenu:function() {
        $(".menu-layer a").on("click", function() {
            var e=$(this), a=$(this).parents(".menu-layer");
            e.parents("ul").hasClass("child-menu")?e.parent().hasClass("open")?e.parent().removeClass("open animate"): (e.parent().siblings(".has-child").removeClass("open animate"), e.parent().addClass("open"), setTimeout(function() {
                e.parent().addClass("animate")
            }
            ,
            100)):e.parents("li").hasClass("open")?e.parents("li").removeClass("animate open"):(a.find(".open").removeClass("animate open"),
            e.parents("li").addClass("open"),
            setTimeout(function() {
                e.parents("li").addClass("animate")
            }
            ,
            10))
        }
        ),
        $(".menu-layer").find('li:has("ul")').each(function() {
            $(this).addClass("has-child")
        }
        ),
        $(".menu-layer").find("li").each(function() {
            $(this).append('<span class="hover-bg"></span>')
        }
        )
    }
    ,
    handleSidebar:function() {
        var e=$(window), a=$("body");
        e.width()<=767?a.addClass("layout-device layout-tablet"): e.width()>767&&e.width()<990?(a.addClass("layout-tablet"), a.removeClass("layout-device")): e.width()>990&&a.removeClass("layout-device layout-tablet"), Layout.resetSendMessage()
    }
    ,
    listenMessageEvents:function() {
        $(".message-list>li").on("click", function() {
            $(this).parent().find(".selected").removeClass("selected"), $(this).addClass("selected"), $("#messages").addClass("open"), Layout.getMessageById($(this).find("a").data("message-id"))
        }
        ),
        $(".message-list-overlay").on("click",
        function() {
            $("#messages").removeClass("open"), $(".message-list").find(".selected").removeClass("selected")
        }
        ),
        $(".mobile-back-button").on("click",
        function() {
            $(".message-list-overlay").trigger("click"), $(this).parent().removeClass("active")
        }
        )
    }
    ,
    getMessageById:function(e) {
        var a=$("#messages").find(".messages"), s=$(".message-send-container"), t=$(".mobile-back");
        s.addClass("loading").prepend('<div class="loading-bar indeterminate"></div>'), setTimeout(function() {
            var t=$.ajax( {
                url: "demo/messages/"+e+".html", beforeSend: function() {
                    a.html(""), Layout.resetSendMessage()
                }
            }
            ).done(function(e) {
                a.html(e), a.scrollTop(a.prop("scrollHeight")), s.removeClass("loading").find(".loading-bar").remove()
            }
            ).fail(function(e,
            a) {
                s.removeClass("loading").find(".loading-bar").remove()
            }
            )
        }
        ,
        1e3),
        $("body").hasClass("layout-device")&&t.addClass("active")
    }
    ,
    resetSendMessage:function() {
        var e=$("#send-message-input");
        e.val("").trigger("input"), e.trigger("change")
    }
    ,
    listenSendButtonOnMessages:function() {
        var e=$("#send-message-input"), a=$("#send-message-button"), s=$("#messages").find(".messages");
        e.on("change keyup paste", function() {
            s.height("calc(100% - "+(e.height()+60)+"px"), $("body").hasClass("layout-device")&&s.height("calc(100% - "+(e.height()+30)+"px"), a.height(e.height()+5)
        }
        ),
        a.on("click",
        function() {
            var a=e.val().trim();
            0==a.length&&(a="Take an angled photo of your screen. All the cool kids do it.");
            var t='<div class="message animate right"><div class="message-text">'+a+'</div><img src="'+Pleasure.settings.paths.images+'/faces/tolga-ergin.jpg" class="user-picture" alt=""></div>';
            s.append(t), Layout.resetSendMessage(), s.scrollTop(s.prop("scrollHeight"))
        }
        )
    }
    ,
    parallaxHeader:function() {
        var e=$(".page-header");
        e.hasClass("parallax")&&$(window).scroll(function() {
            var a=$(document).scrollTop(), s=e.height(), t=$(".parallax-bg");
            t.css("top", .5*a), t.css("opacity", 1-a/s*1)
        }
        )
    }
    ,
    init:function() {
        this.initLayer(), Pleasure.callOnResize.push(this.layerResponsive), this.listenForMenuLayer(), this.listenForEditSite(), this.listenForUserLayer(), this.listenKeyboardEvents(), this.listenMenu(), this.handleSidebar(), Pleasure.callOnResize.push(this.handleSidebar), this.listenMessageEvents(), this.listenSendButtonOnMessages(), this.parallaxHeader()
    }
}
;
