var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn){
    item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;
            if(btntext=='×'){
                btntext='*';
            }
            if(btntext=='÷'){
                btntext='/';
            }
            screen.value += btntext;
        }
    )
}

function sin(){
    screen.value=Math.sin(screen.value);
}

function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}

function pow(){
    screen.value=Math.pow(screen.value, 2);
}

function sqrt(){
    screen.value=Math.sqrt(screen.value);
}

function log(){
    screen.value=Math.log(screen.value);
}

function pi(){
    screen.value=3.14159265359;
}

function e(){
    screen.value=2.71828182846;
}

function fact(){
    var i, num, f;
    f=1;
    num=screen.value;
    for(i=1;i<=num; i++){
        f=f*i;
    }

    i=i-1;

    screen.value=f;
}

function backspc(){
    screen.value = screen.value.substr(0, screen.value.length-1);
}

function arcsin(){
    screen.value = Math.asin(screen.value);
}

function arccos(){
    screen.value = Math.acos(screen.value);
}

function arctan(){
    screen.value = Math.atan(screen.value);
}

function sinh(){
    screen.value = Math.sinh(screen.value);
}

function cosh(){
    screen.value = Math.cosh(screen.value);
}

function tanh(){
    screen.value = Math.tanh(screen.value);
}

function arcsinh(){
    screen.value = Math.asinh(screen.value);
}

function arccosh(){
    screen.value = Math.acosh(screen.value);
}

function arctanh(){
    screen.value = Math.atanh(screen.value);
}

function percent(){
    screen.value = screen.value/100;
}

function log10(){
    screen.value = Math.log10(screen.value);
}