
let quiz = [
    {
        head: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        head: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        head: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        head: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
]
let content=document.getElementById('container')
let score = 0
let number = 0
let progress=document.getElementById('progress-bar')
let sub = document.getElementById('sub')
let head = document.getElementById('question')
let textQ0 = document.getElementById('textQ0')
let textQ1 = document.getElementById('textQ1')
let textQ2 = document.getElementById('textQ2')
let textQ3 = document.getElementById('textQ3')
let x = document.querySelectorAll('.answer')
let prog=document.getElementById('prog')
let prog_bar=`<div class="progress bg-white rounded-0" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0"
aria-valuemax="100" style="height: 20px">
<div id="progress-bar" class="progres bg-info rounded-0"></div>
</div>`


function load(n) {
    prog.innerHTML=prog_bar
    head.innerHTML=quiz[n].head
    textQ0.innerHTML = quiz[n].a
    textQ1.innerHTML = quiz[n].b
    textQ2.innerHTML = quiz[n].c
    textQ3.innerHTML = quiz[n].d
    console.log(quiz[n].a);
}

load(0)

function unSelect()
{
    for(let i=0;i<4;i++)
    {
        x[i].checked=false
    }
}

sub.addEventListener('click',()=>{
    let checkedV
    $('#progress-bar').css({"width":0})
    for(let i=0;i<4;i++)
    {
        if(x[i].checked)
        {
            checkedV=x[i].value
            if(checkedV==quiz[number].correct){
                score++
            }
        }
    }
    number++
    clearInterval(set)
    time()
    if(number<4)
    {
        load(number)
        unSelect()
    }
    if(number==4)
    {
        end()
    }

})

function end()
{
    
    let item=`
    <div id="end" class="p-5 bg-white rounded-top-4 text-center">
    <h3>You answered <span id="scoreEnd">0</span>/4 questions correctly</h3>
</div>
<button id="reload" class="btn btn-info text-white w-100 rounded-bottom-4 p-3 fs-5 rounded-top-0">reload</button>
    `
    content.innerHTML=item
    let sc=document.getElementById('scoreEnd')
    sc.innerHTML=score
    $("#reload").click(function(){
        
        location.reload()
    })
}
var set=setInterval(() => {
    let checkedV
    prog.innerHTML=prog_bar
    $('#progress-bar').css({"width":0})
    for(let i=0;i<4;i++)
    {
        if(x[i].checked)
        {
            checkedV=x[i].value
            if(checkedV==quiz[number].correct){
                score++
            }
        }
    }
    number++
    
    if(number<4)
    {
        load(number)
        unSelect()
    }
    if(number==4)
    {
        end()
    }
}, 10000);


function time()
{
     set=setInterval(() => {
        let checkedV
        prog.innerHTML=prog_bar
        $('#progress-bar').css({"width":0})
        for(let i=0;i<4;i++)
        {
            if(x[i].checked)
            {
                checkedV=x[i].value
                if(checkedV==quiz[number].correct){
                    score++
                }
            }
        }
        number++
        
        if(number<4)
        {
            load(number)
            unSelect()
        }
        if(number==4)
        {
            end()
        }
    }, 10000);
    
}
