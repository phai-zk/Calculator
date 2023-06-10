$(document).ready(function () {
            
    var anw = "";
    
    // row1 --------------------------------
    $("#OB").click(function () {
        anw += $("#OB").text();
        $("#info").text(anw);
    })

    $("#CB").click(function () {
        anw += $("#CB").text();
        $("#info").text(anw);
    })
    
    $("#DE").click(function () {
        let len = anw.length;
        anw = anw.slice(0,len-1);
        $("#info").text(anw);
    })

    $("#AC").click(function () {
        anw = ""
        $("#info").text(anw);
    })

    // row2 --------------------------------
    $("#num7").click(function () {
        anw += $("#num7").text();
        $("#info").text(anw);
    })

    $("#num8").click(function () {
        anw += $("#num8").text();
        $("#info").text(anw);
    })

    $("#num9").click(function () {
        anw += $("#num9").text();
        $("#info").text(anw);
    })

    $("#plus").click(function () {
        anw += $("#plus").text();
        $("#info").text(anw);
    })

    // row3 --------------------------------
    $("#num4").click(function () {
        anw += $("#num4").text();
        $("#info").text(anw);
    })

    $("#num5").click(function () {
        anw += $("#num5").text();
        $("#info").text(anw);
    })

    $("#num6").click(function () {
        anw += $("#num6").text();
        $("#info").text(anw);
    })

    $("#minus").click(function () {
        anw += $("#minus").text();
        $("#info").text(anw);
    })

    // row4 --------------------------------
    $("#num1").click(function () {
        anw += $("#num1").text();
        $("#info").text(anw);
    })

    $("#num2").click(function () {
        anw += $("#num2").text();
        $("#info").text(anw);
    })

    $("#num3").click(function () {
        anw += $("#num3").text();
        $("#info").text(anw);
    })

    $("#times").click(function () {
        anw += $("#times").text();
        $("#info").text(anw);
    })

    // row5 --------------------------------
    $("#num0").click(function () {
        anw += $("#num0").text();
        $("#info").text(anw);
    })

    $("#dot").click(function () {
        anw += $("#dot").text();
        $("#info").text(anw);
    })

    $("#eq").click(function () {
        anw = eval(anw);
        $("#info").text(anw);
    })

    $("#divide").click(function () {
        anw += $("#divide").text();
        $("#info").text(anw);
    })

    // theme
    $("#Theme").click(function () {
        $("body").toggleClass("Dark");
    })
    
})