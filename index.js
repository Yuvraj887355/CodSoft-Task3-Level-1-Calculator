
function add()
{
    var act=0; b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1);
        f.ddd.value+='+';
    }else{
        f.ddd.value+='+';
    }
}

function sub()
{
    var act=0; b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1);
        f.ddd.value+='-';
    }else{
        f.ddd.value+='-';
    }
}

function div()
{
    var act=0; b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1);
        f.ddd.value+='/';
    }else{
        f.ddd.value+='/';
    }
}

function mul()
{
    var act=0; b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        f.ddd.value=act.substring(0,act.length-1);
        f.ddd.value+='*';
    }else{
        f.ddd.value+='*';
    }
}