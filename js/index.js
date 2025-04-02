document.addEventListener("DOMContentLoaded", function () {
    var click_checker = document.querySelector("input")
    console.log(click_checker)

    var value = " "
    var answer = ""

    function get_0() {
        value += "0"
    }
    function get_1() {
        value += "1"
    }
    function get_2() {
        value += "2"
    }
    function get_3() {
        value += "3"
    }
    function get_4() {
        value += "4"
    }
    function get_5() {
        value += "5"
    }
    function get_6() {
        value += "6"
    }
    function get_7() {
        value += "7"
    }
    function get_8() {
        value += "8"
    }
    function get_9() {
        value += "9"
    }
    function clear_button() {
        value = " "
    }
    function plus_button() {
        value += "+"
    }
    function minus_button() {
        value += "-"
    }
    function devide_button() {
        value += "÷"
    }
    function x_button() {
        value += "x"
    }

    function equal_button() {
        value += "="
    }


    /* クリックイベントの為の変数 */
    const button0 = document.getElementById("0")
    const button1 = document.getElementById("1")
    const button2 = document.getElementById("2")
    const button3 = document.getElementById("3")
    const button4 = document.getElementById("4")
    const button5 = document.getElementById("5")
    const button6 = document.getElementById("6")
    const button7 = document.getElementById("7")
    const button8 = document.getElementById("8")
    const button9 = document.getElementById("9")
    const button_clear = document.getElementById("C")
    const button_plus = document.getElementById("+")
    const button_minus = document.getElementById("-")
    const button_divide = document.getElementById("÷")
    const button_x = document.getElementById("x")
    const equal = document.getElementById("=")


    /* クリックイベント　のイベント実装 */
    button0.addEventListener("click", function () {
        get_0();
        console.log(value)
    })
    button1.addEventListener("click", function () {
        get_1();
        console.log(value)
    })
    button2.addEventListener("click", function () {
        get_2();
        console.log(value)
    })
    button3.addEventListener("click", function () {
        get_3();
        console.log(value)
    })
    button4.addEventListener("click", function () {
        get_4();
        console.log(value)
    })
    button5.addEventListener("click", function () {
        get_5();
        console.log(value)
    })
    button6.addEventListener("click", function () {
        get_6();
        console.log(value)
    })
    button7.addEventListener("click", function () {
        get_7();
        console.log(value)
    })
    button8.addEventListener("click", function () {
        get_8();
        console.log(value)
    })
    button9.addEventListener("click", function () {
        get_9();
        console.log(value)
    })
    /* Clearボタンで、データリセット */
    button_clear.addEventListener("click", function () {
        clear_button();
        console.log(value)
    })
    /* +ボタンで、+計算 */
    button_plus.addEventListener("click", function () {
        plus_button();
        console.log(value)
    })
    /* -ボタンで、-計算 */
    button_minus.addEventListener("click", function () {
        minus_button();
        console.log(value)
    })

    /* ÷ボタンで ÷計算 */
    button_divide.addEventListener("click", function () {
        devide_button();
        console.log(value)
    })

    /* xボタンで x計算 */
    button_x.addEventListener("click", function () {
        x_button();
        console.log(value)
    })
    /* =ボタンで =計算 */
    equal.addEventListener("click",function(){
        equal_button() 
        console.log(value)
    })
})