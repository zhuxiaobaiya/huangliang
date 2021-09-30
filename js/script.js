var Cusername = document.getElementById("un");
var Cpassword1 = document.getElementById("p1");
var Cpassword2 = document.getElementById("p2");
var Cphone = document.getElementById("ph");
var Cvalidate = document.getElementById("vd");
var Cmail = document.getElementById("ma");
window.onload = function() {
    username();
    password1();
    password2();
    phone();
    valimg();
    clickvalimg();
    validate();
    mail();
    submit();
    reset()
};

function username() {
    var a = document.getElementById("username");
    a.onchange = function() {
        var c = /^[\u4E00-\u9FA5a-zA-Z0-9_-]{2,16}$/;
        var b = c.test(a.value);
        if (b) {
            Cusername.innerHTML = "正确";
            Cusername.style.color = "green";
            Cusername.style.padding = "5px"
        } else {
            Cusername.innerHTML = "输入用户名必须为字母、数字、汉字，且必须是4-16位";
            Cusername.style.color = "red";
            Cusername.style.padding = "5px"
        }
    };
    a.onblur = function() {
        if (a.value == "") {
            Cusername.innerHTML = "用户名不能为空";
            Cusername.style.color = "red";
            Cusername.style.padding = "5px"
        }
    }
}

function password1() {
    var a = document.getElementById("password1");
    a.onchange = function() {
        var e = /^[a-zA-Z0-9_-]{6,16}$/;
        var f = /^\d{0,}$/;
        var b = e.test(a.value);
        var c = f.test(a.value);
        if (!b) {
            Cpassword1.innerHTML = "输入密码必须为字母、数字，且必须是6-16位";
            Cpassword1.style.color = "red";
            Cpassword1.style.padding = "5px"
        } else {
            if (c) {
                Cpassword1.innerHTML = "密码过于简单";
                Cpassword1.style.color = "orange";
                Cpassword1.style.padding = "5px"
            } else {
                Cpassword1.innerHTML = "正确";
                Cpassword1.style.color = "green";
                Cpassword1.style.padding = "5px"
            }
        }
        var d = document.getElementById("password2");
        if (d.value == a.value) {
            Cpassword2.innerHTML = "正确";
            Cpassword2.style.color = "green";
            Cpassword2.style.padding = "5px"
        } else {
            Cpassword2.innerHTML = "两次输入的密码不正确";
            Cpassword2.style.color = "red";
            Cpassword2.style.padding = "5px"
        }
    };
    a.onblur = function() {
        if (a.value == "") {
            Cpassword1.innerHTML = "密码不能为空";
            Cpassword1.style.color = "red";
            Cpassword1.style.padding = "5px"
        }
    }
}

function password2() {
    var a = document.getElementById("password1");
    var b = document.getElementById("password2");
    b.onchange = function() {
        if (b.value == a.value) {
            Cpassword2.innerHTML = "正确";
            Cpassword2.style.color = "green";
            Cpassword2.style.padding = "5px"
        } else {
            Cpassword2.innerHTML = "两次输入的密码不正确";
            Cpassword2.style.color = "red";
            Cpassword2.style.padding = "5px"
        }
    };
    b.onblur = function() {
        if (b.value == "") {
            Cpassword2.innerHTML = "确认密码不能为空";
            Cpassword2.style.color = "red";
            Cpassword2.style.padding = "5px"
        }
    }
}

function phone() {
    var a = document.getElementById("phone");
    a.onchange = function() {
        var c = /^[^0][13|14|15|18]\d{9}$/;
        var b = c.test(a.value);
        if (!b) {
            Cphone.innerHTML = "请输入正确的手机号";
            Cphone.style.color = "red";
            Cphone.style.padding = "5px"
        } else {
            Cphone.innerHTML = "正确";
            Cphone.style.color = "green";
            Cphone.style.padding = "5px"
        }
    };
    a.onblur = function() {
        if (a.value == "") {
            Cphone.innerHTML = "手机号不能为空";
            Cphone.style.color = "red";
            Cphone.style.padding = "5px"
        }
    }
}

function valimg() {
    var c = "";
    var k = document.getElementById("valimg");
    var h = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var f = Math.floor(Math.random() * 255);
    var d = Math.floor(Math.random() * 255);
    var a = Math.floor(Math.random() * 255);
    for (var e = 0; e < 4; e++) {
        var j = Math.floor(Math.random() * 62);
        c += h[j]
    }
    k.firstChild.nodeValue = c;
    k.style.color = "rgb(" + f + "," + d + "," + a + ")";
    k.style.backgroundColor = "rgb(" + a + "," + f + "," + d + ")"
}

function validate() {
    var a = document.getElementById("validate");
    var b = document.getElementById("valimg");
    a.onblur = function() {
        if (a.value == "") {
            Cvalidate.innerHTML = "验证码不能为空";
            Cvalidate.style.color = "red";
            Cvalidate.style.padding = "5px"
        }
    };
    a.onchange = function() {
        var c = b.firstChild.nodeValue;
        if (a.value == c) {
            Cvalidate.innerHTML = "正确";
            Cvalidate.style.color = "green";
            Cvalidate.style.padding = "5px"
        } else {
            Cvalidate.innerHTML = "验证码错误";
            Cvalidate.style.color = "red";
            Cvalidate.style.padding = "5px"
        }
    }
}

function mail() {
    var a = document.getElementById("mail");
    a.onchange = function() {
        var c = /^\d{5,10}@qq|163.com$/;
        var b = c.test(a.value);
        if (!b) {
            Cmail.innerHTML = "请输入正确的邮箱号";
            Cmail.style.color = "red";
            Cmail.style.padding = "5px"
        } else {
            Cmail.innerHTML = "正确";
            Cmail.style.color = "green";
            Cmail.style.padding = "5px"
        }
    };
    a.onblur = function() {
        if (a.value == "") {
            Cmail.innerHTML = "邮箱不能为空";
            Cmail.style.color = "red";
            Cmail.style.padding = "5px"
        }
    }
}

function submit() {
    var a = document.getElementById("submit");
    a.onclick = function() {
        var f = Cusername.firstChild.nodeValue;
        var c = Cpassword1.firstChild.nodeValue;
        var d = Cpassword2.firstChild.nodeValue;
        var e = Cphone.firstChild.nodeValue;
        var g = Cvalidate.firstChild.nodeValue;
        var b = Cmail.firstChild.nodeValue;
        if (f == "正确" && c == "正确" && d == "正确" && e == "正确" && g == "正确" && b == "正确") {
            alert("注册成功");
            Cusername.innerHTML = "";
            Cpassword1.innerHTML = "";
            Cpassword2.innerHTML = "";
            Cphone.innerHTML = "";
            Cvalidate.innerHTML = "";
            Cmail.innerHTML = "";
            Cusername.style.padding = "0px";
            Cpassword1.style.padding = "0px";
            Cpassword2.style.padding = "0px";
            Cphone.style.padding = "0px";
            Cvalidate.style.padding = "0px";
            Cmail.style.padding = "0px"
        } else {
            if (f == " " | c == " " | d == " " | e == " " | g == " " | b == " ") {
                Cusername.innerHTML = "用户名不能为空";
                Cusername.style.color = "red";
                Cusername.style.padding = "5px";
                Cpassword1.innerHTML = "密码不能为空";
                Cpassword1.style.color = "red";
                Cpassword1.style.padding = "5px";
                Cpassword2.innerHTML = "确认密码不能为空";
                Cpassword2.style.color = "red";
                Cpassword2.style.padding = "5px";
                Cphone.innerHTML = "电话号码不能为空";
                Cphone.style.color = "red";
                Cphone.style.padding = "5px";
                Cvalidate.innerHTML = "验证码不能为空";
                Cvalidate.style.color = "red";
                Cvalidate.style.padding = "5px";
                Cmail.innerHTML = "邮箱不能为空";
                Cmail.style.color = "red";
                Cmail.style.padding = "5px"
            }
        }
    }
}

function reset() {
    var a = document.getElementById("reset");
    a.onclick = function() {
        Cusername.innerHTML = " ";
        Cpassword1.innerHTML = " ";
        Cpassword2.innerHTML = " ";
        Cphone.innerHTML = " ";
        Cvalidate.innerHTML = " ";
        Cmail.innerHTML = " ";
        Cusername.style.padding = "0px";
        Cpassword1.style.padding = "0px";
        Cpassword2.style.padding = "0px";
        Cphone.style.padding = "0px";
        Cvalidate.style.padding = "0px";
        Cmail.style.padding = "0px"
    }
}

function clickvalimg() {
    var a = document.getElementById("valimg");
    a.onclick = function() {
        var d = "";
        var l = document.getElementById("valimg");
        var j = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
        var h = Math.floor(Math.random() * 255);
        var e = Math.floor(Math.random() * 255);
        var c = Math.floor(Math.random() * 255);
        for (var f = 0; f < 4; f++) {
            var k = Math.floor(Math.random() * 62);
            d += j[k]
        }
        l.firstChild.nodeValue = d;
        l.style.color = "rgb(" + h + "," + e + "," + c + ")";
        l.style.backgroundColor = "rgb(" + c + "," + h + "," + e + ")"
    }
};