$("#resultado").hide();
$(document).ready(function() {
    var a_s, a_m, a_c;
    var c_s, c_m, c_c;
    var uucw, uaw, uucp, tcf, ecf, ucp, cf, horas = 0,
        aux = 0,
        suma_val = 0,
        e = 0;
    var v1 = 0,
        v2 = 0,
        v3 = 0,
        v4 = 0,
        v5 = 0,
        v6 = 0,
        v7 = 0,
        v8 = 0;
    var total_tecnico, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce
    var total_ambiente, uno_, dos_, tres_, cuatro_, cinco_, seis_, siete_, ocho_;
    var analisis = 0,
        diseno = 0,
        programacion = 0,
        pruebas = 0,
        gestion_proyecto = 0;

    $("#range_15").ionRangeSlider({ min: 1, max: 100, from: 1, skin: "round" })



    $("#imprimir").click(function() {
        print();
    });
    $("#limpiar").click(function() {
        // location.reload();
        //$('html, body').load('index.html');

        $('#a_s').val('0');
        $('#a_m').val('0');
        $('#a_c').val('0');

        $('#c_s').val('0');
        $('#c_m').val('0');
        $('#c_c').val('0');

        $("#uno").val('0').change();
        $("#dos").val('0').change();
        $("#tres").val('0').change();
        $("#cuatro").val('0').change();
        $("#cinco").val('0').change();
        $("#seis").val('0').change();
        $("#siete").val('0').change();
        $("#ocho").val('0').change();
        $("#nueve").val('0').change();
        $("#diez").val('0').change();
        $("#once").val('0').change();
        $("#doce").val('0').change();
        $("#trece").val('0').change();

        $("#uno_").val('0').change();
        $("#dos_").val('0').change();
        $("#tres_").val('0').change();
        $("#cuatro_").val('0').change();
        $("#cinco_").val('0').change();
        $("#seis_").val('0').change();
        $("#siete_").val('0').change();
        $("#ocho_").val('0').change();
        $("#resultado").hide();


    });


    $("#ejemplo").click(function() {
        /* $('html, body').animate({
            scrollTop: $("#llegar").offset().top
        }, 21000); */
        hopscotch.startTour({
            id: "my-intro",
            steps: [{ target: "titulo", title: "Logo Here", content: "You can find here status of user who's currently online.", placement: "bottom", yOffset: 10 },
                { target: "display-title-tour", title: "Display Text", content: "Click on the button and make sidebar navigation small.", placement: "top", zindex: 999 },
                { target: "unox", title: "User settings", content: "You can edit you profile info here.", placement: "bottom", zindex: 999 },
                { target: "uno_s", title: "pruebas", content: "You can edit you profile info here.", placement: "bottom", zindex: 999 },
                { target: "thankyou-tour", title: "Thank you !", content: "Here you can change theme skins and other features.", placement: "top", zindex: 999 }
            ],
            showPrevButton: !0
        })



        $('#a_s').val('1');
        $('#a_m').val('2');
        $('#a_c').val('5');

        $('#c_s').val('1');
        $('#c_m').val('7');
        $('#c_c').val('11');

        $("#uno").val('1').change();
        $("#dos").val('5').change();
        $("#tres").val('5').change();
        $("#cuatro").val('1').change();
        $("#cinco").val('0').change();
        $("#seis").val('5').change();
        $("#siete").val('5').change();
        $("#ocho").val('0').change();
        $("#nueve").val('3').change();
        $("#diez").val('0').change();
        $("#once").val('5').change();
        $("#doce").val('0').change();
        $("#trece").val('4').change();

        $("#uno_").val('0').change();
        $("#dos_").val('4').change();
        $("#tres_").val('5').change();
        $("#cuatro_").val('0').change();
        $("#cinco_").val('5').change();
        $("#seis_").val('4').change();
        $("#siete_").val('0').change();
        $("#ocho_").val('3').change();

        // e = ucp * cf;
        e = 5831.2799999999;
        ///////////////
        console.log("uucp: " + uucp);
        console.log("total_ambiete: " + total_ambiente);
        console.log("tcf: " + tcf);
        console.log("ecf: " + ecf);
        console.log("total_tecnico: " + total_tecnico);
        console.log("ucp: " + ucp);
        console.log("e: " + e);
        //////////////
        //calculo de esfuerzo total de horas hombre////
        analisis = e / 4;
        diseno = e / 2;
        programacion = e;
        pruebas = e / 3;
        gestion_proyecto = e / 5;
        /////////////////////////

        $("#analisis").text(Math.round(analisis) + " Horas");
        $("#diseno").text(Math.round(diseno) + " Horas");
        $("#programacion").text(Math.round(programacion) + " Horas");
        $("#pruebas").text(Math.round(pruebas) + " Horas");
        $("#proyecto").text(Math.round(gestion_proyecto) + " Horas");
        $("#resultado").show();
        /*  $('html, body').animate({
             scrollTop: $("#llegar").offset().top
         }, 2000); */
        $("#slider").text("Estimación con un equipo de  " + " 1 " + " Personas " + Math.round(e) + " horas/persona");


    });

    $("#calcular").click(function() {
        //peso de actor///
        a_s = parseInt($('#a_s').val());
        a_m = parseInt($('#a_m').val());
        a_c = parseInt($('#a_c').val());
        ////total/////
        uaw = a_s * 1 + a_m * 2 + a_c * 3;

        //peso de los casos de uso///
        c_s = parseInt($('#c_s').val());
        c_m = parseInt($('#c_m').val());
        c_c = parseInt($('#c_c').val());
        ///suma////////
        uucw = c_s * 5 + c_m * 10 + c_c * 15;

        //factor tecnico////
        uno = parseInt($("#uno option:selected").val());
        dos = parseInt($("#dos option:selected").val());
        tres = parseInt($("#tres option:selected").val());
        cuatro = parseInt($("#cuatro option:selected").val());
        cinco = parseInt($("#cinco option:selected").val());
        seis = parseInt($("#seis option:selected").val());
        siete = parseInt($("#siete option:selected").val());
        ocho = parseInt($("#ocho option:selected").val());
        nueve = parseInt($("#nueve option:selected").val());
        diez = parseInt($("#diez option:selected").val());
        once = parseInt($("#once option:selected").val());
        doce = parseInt($("#doce option:selected").val());
        trece = parseInt($("#trece option:selected").val());
        total_tecnico = uno * 2 + dos * 1 + tres * 1 + cuatro * 1 + cinco * 1 + seis * 0.5 + siete * 0.5 + ocho * 2 + nueve * 1 + diez * 1 + once * 1 + doce * 1 + trece * 1;



        //valor de ambiental////
        uno_ = parseInt($("#uno_ option:selected").val());
        dos_ = parseInt($("#dos_ option:selected").val());
        tres_ = parseInt($("#tres_ option:selected").val());
        cuatro_ = parseInt($("#cuatro_ option:selected").val());
        cinco_ = parseInt($("#cinco_ option:selected").val());
        seis_ = parseInt($("#seis_ option:selected").val());
        siete_ = parseInt($("#siete_ option:selected").val());
        ocho_ = parseInt($("#ocho_ option:selected").val());
        total_ambiente = uno_ * 1.5 + dos_ * 0.5 + tres_ * 1 + cuatro_ * 0.5 + cinco_ * 1 + seis_ * 2 + siete_ * (-1) + ocho_ * (-1);

        if (uno_ < 3) {
            v1 = 1;
        }
        if (dos_ < 3) {
            v2 = 1;
        }
        if (tres_ < 3) {
            v3 = 1;
        }
        if (cuatro_ < 3) {
            v4 = 1;
        }
        if (cinco_ < 3) {
            v5 = 1;
        }
        if (seis_ < 3) {
            v6 = 1;
        }

        if (siete_ > 3) {
            v7 = 1;
        }
        if (ocho_ > 3) {
            v8 = 1;
        }

        suma_val = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8;

        ///calculo para determinar las horas hombre

        if (suma_val <= 2) {
            cf = 20;
        }
        if (suma_val <= 4) {
            cf = 28;
        }
        if (suma_val >= 5) {
            cf = 36;
        }


        ///calculo formulas///
        //calculo de los casos de uso sin ajustar////
        uucp = uucw + uaw;
        ///calculo factor de complejidad tecnico
        tcf = 0.6 + (0.01 * total_tecnico);
        //calculo de factor complejidad ambiental////
        ecf = 1.4 + (-0.03 * total_ambiente);
        ///calculando los ucp///
        ucp = uucp * tcf * ecf;
        //calculando esfuerzo en horas-persona viene dado por/////
        e = ucp * cf;
        // e = 1000;
        ///////////////
        console.log("uucp: " + uucp);
        console.log("total_ambiete: " + total_ambiente);
        console.log("tcf: " + tcf);
        console.log("ecf: " + ecf);
        console.log("total_tecnico: " + total_tecnico);
        console.log("ucp: " + ucp);
        console.log("e: " + e);
        //////////////
        //calculo de esfuerzo total de horas hombre////
        analisis = e / 4;
        diseno = e / 2;
        programacion = e;
        pruebas = e / 3;
        gestion_proyecto = e / 5;
        /////////////////////////
        if (uaw == 0 || uucw == 0 || total_tecnico == 0 || total_ambiente == 0) {
            //alert("ingresa los datos");
            Swal.fire({ title: "Por favor revisa los datos!", html: "", timer: 1000, onBeforeOpen: function() { Swal.showLoading(), t = setInterval(function() { Swal.getContent().querySelector("strong").textContent = Swal.getTimerLeft() }, 100) }, onClose: function() { clearInterval(t) } }).then(function(t) { t.dismiss === Swal.DismissReason.timer && console.log("I was closed by the timer") });
        } else {
            $("#analisis").text(Math.round(analisis) + " Horas");
            $("#diseno").text(Math.round(diseno) + " Horas");
            $("#programacion").text(Math.round(programacion) + " Horas");
            $("#pruebas").text(Math.round(pruebas) + " Horas");
            $("#proyecto").text(Math.round(gestion_proyecto) + " Horas");
            $("#resultado").show();
            $('html, body').animate({
                scrollTop: $("#llegar").offset().top
            }, 2000);
            $("#slider").text("Estimación con un equipo de  " + " 1 " + " Personas " + Math.round(e) + " horas/persona");
        }

    });

    $("#range_15").change(function() {
        horas = parseInt($("#range_15").val());
        aux = e / horas;
        $("#slider").text("Estimación con un equipo de  " + " " + horas + " Personas " + Math.round(aux) + " horas/persona");
        // alert("HORA: " + horas);
    });



});