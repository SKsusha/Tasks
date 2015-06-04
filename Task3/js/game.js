function getRandomArbitary(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}
var q = 0;
var w = 0;
var e = 0;
var r = 0;
var ct = 0;
var ct1 = 0;
var ct2 = 0;
var ct3 = 0;
var ct4 = 0;
var q1 = 1;
var q2 = 1;
var q3 = 1;
var q4 = 1;
var Lol = true;
var fix = false;



function game() {
    if (!fix) {
        Lol = true;
        Next();
        play();
        fix = true;
    }
    else
        return;
}


function Next() {
    q = 0;
    w = 0;
    e = 0;
    r = 0;
    ct = 0;
    ct1 = 0;
    ct2 = 0;
    ct3 = 0;
    ct4 = 0;
    q1 = 1;
    q2 = 1;
    q3 = 1;
    q4 = 1;
}





function play() {

    var i = getRandomArbitary(-3, 6) * 5;
    if (q > 750) {
        i = 0;
        q = 950;
    }
    var j = getRandomArbitary(-3, 6) * 5;
    if (w > 750) {
        j = 0;
        w = 950;
    }
    var p = getRandomArbitary(-3, 6) * 5;
    if (e > 750) {
        p = 0;
        e = 950;
    }
    var k = getRandomArbitary(-3, 6) * 5;
    if (r > 750) {
        k = 0;
        r = 950
    }
    
    var start = performance.now();
    var canvas = document.getElementById("map");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5.5;

    ctx.beginPath();
    ctx.lineCap = 'butt';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(750, 100);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(750, 200);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(750, 300);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(750, 400);
    ctx.strokeStyle = "black";
    ctx.stroke();

    if (Lol) {
        var img = document.getElementById('bug');
        ctx.drawImage(img, q, 20);
        q = q + i;
        var img1 = document.getElementById('bug');
        ctx.drawImage(img, w, 120);
        w = w + j
        var img2 = document.getElementById('bug');
        ctx.drawImage(img, e, 220);
        e = e + p;
        var img3 = document.getElementById('bug');
        ctx.drawImage(img, r, 320);
        r = r + k;
        setTimeout("play()", 200);
    }



    if ((q > 750) && (q1 != 0)) {
        ct++;
        q1 = 0;
        ct1 = ct;
    }


    if ((w > 750) && (q2 != 0)) {
        ct++;
        ct2 = ct;
        q2 = 0;
    }


    if ((e > 750) && (q3 != 0)) {
        ct++;
        ct3 = ct;
        q3 = 0;
    }


    if ((r > 750) && (q4 != 0)) {
        ct++;
        ct4 = ct;
        q4 = 0;
    }




    ctx.fillText(ct1, 100, 30);
    ctx.fillText(ct2, 100, 130);
    ctx.fillText(ct3, 100, 230);
    ctx.fillText(ct4, 100, 330);

    if ((q > 780) && (w > 780) && (e > 780) && (r > 780)) {
        Lol = false;
        fix = false;
    };




}
//ставка
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

b11 = 0;
b12 = 0;
b13 = 0;
b14 = 0;
b21 = 0;
b22 = 0;
b23 = 0;
b24 = 0;
b31 = 0;
b32 = 0;
b33 = 0;
b34 = 0;
//банк тараканов
tr1 = 0;
tr2 = 0;
tr3 = 0;
tr4 = 0;
//выборка
n11 = 0;
n12 = 0;
n13 = 0;
n14 = 0;
n21 = 0;
n22 = 0;
n23 = 0;
n24 = 0;
n31 = 0;
n32 = 0;
n33 = 0;
n34 = 0;
p1 = 0;
p2 = 0;
p3 = 0;
banks = 0;


function get1() {
    var canvas = document.getElementById("map1");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x1 = 10;
    y1 = 10;
    if (document.getElementById("checkbox11").checked) {
        n11 = 1;
        b11 = document.forms["task1"].elements["b11"].value - 0;
        ctx.fillText(document.getElementById("user1").value + ' - bug  ' + n11 + '  stavka = ' + b11, x1, y1);
        y1 = y1 + 10;
        p1 = p1 + 1;
        c1++;
    }
    if (document.getElementById("checkbox12").checked) {
        n12 = 1;

        b12 = document.forms["task1"].elements["b12"].value - 0;
        ctx.fillText(document.getElementById("user1").value + '- bug ' + n12 + ' stavka = ' + b12, x1, y1);
        y1 = y1 + 10;
        p1 = p1 + 1;
        c2++;
    }
    if (document.getElementById("checkbox13").checked) {
        n13 = 1;

        b13 = document.forms["task1"].elements["b13"].value - 0;
        ctx.fillText(document.getElementById("user1").value + ' - bug ' + n13 + '  stavka = ' + b13, x1, y1);
        y1 = y1 + 10;
        p1 = p1 + 1;
        c3++;

    }
    if (document.getElementById("checkbox14").checked) {
        n14 = 1;
        p1 = p1 + 1;
        b14 = document.forms["task1"].elements["b14"].value - 0;
        ctx.fillText(document.getElementById("user1").value + '  bug  ' + n14 + '  stavka = ' + b14, x1, y1);
        c4++;

    }
    banks = b11 + b12 + b13 + b14 + b21 + b22 + b23 + b24 + b33 + b32 + b31 + b34;
    document.getElementById("bank").value = banks;
}



function result() {
    vp1 = 0;
    vp2 = 0;
    vp3 = 0;


    var coef1 = 0;
    var coef2 = 0;
    var coef3 = 0;
    var coef4 = 0;


    if (ct1 == 1) {
        coef1 = 2;

    }
    else if (ct2 == 1) {
        coef2 = 2;

    }
    else if (ct3 == 1) {
        coef3 = 2;

    }
    else if (ct4 == 1) {
        coef4 = 2;

    }





    vp1 = Math.round((b11 * coef1) + (b12 * coef2) + (b13 * coef3) + (b14 * coef4));


    newbanks = banks - vp1;
    document.getElementById("pvin1").value = vp1;
    document.getElementById("bank").value = newbanks;
    SubmitStats();


}


