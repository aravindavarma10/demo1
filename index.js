function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm}:${ss} ${am_pm}`
    document.getElementById("Time").innerHTML=fullTime
    if(mo==0)
    {
        mo="january"
    }
    else if(mo==1)
    {
        mo="february"
    }
    else if(mo==2)
    {
        mo="march"
    }
    else if(mo==3)
    {
        mo="april"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="june"
    }
    else if(mo==6)
    {
        mo="july"
    }

    else if(mo==7)
    {
        mo="august"
    }
    else if(mo==8)
    {
        mo="september"
    }
    else if(mo==9)
    {
        mo="october"
    }
    else if(mo==10)
    {
        mo="november"
    }
    else
    {
        mo="december"
    }
    var fulldate=dd+"/"+mo+"/"+yy

    document.getElementById("Date").innerHTML.fulldate;
   switch(day)
    {
        case 0:
            day="Sunday"
            document.body.style.backgroundImage="url(bg1.jpg)"
            break;
        case 1:
            day="Monday"
            document.body.style.backgroundImage="url(bg2.jpg)"
            break;
        case 2:
            day="Tuesday"
            document.body.style.backgroundImage="url(bg3.jpg)"
            break;
        case 3:
            day="Wednesday"
            document.body.style.backgroundImage="url(bg4.jpg)"
            break;
        case 4:
            day="Thursday"
            document.body.style.backgroundImage="url(bg5.jpg)"
            break;
        case 5:
            day="Friday"
            document.body.style.backgroundImage="url(bg6.jpg)"
            break;
        case 6:
            day="Saturday"
            document.body.style.backgroundImage="url(bg7.jpg)"
            break;
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000)
}
function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning"
        document.getElementById("bgVid").src="morning.mp4"
    }
    else if(hh>12 && hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bgVid").src="afternoon.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
    else if(hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bgVid").src="sunset.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
    else
    {
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("bgVid").src="night.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
}
greet()
   function closewind()
    {
     document.getElementById("greet").style.display="none"
    }
    var a=setTimeout(closewind,5000)