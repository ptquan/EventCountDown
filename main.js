/*  const xMas = document.getElementById('xMas');
        const xDay = new Date(" Dec 24,2018 24:00:00").getTime();
        //Tổng số giây 
        const xmasCome = setInterval(() =>{
 
            const now = new Date().getTime();
            //Số s đến thời gian hiện tại
            const timeRest = xDay - now;
            //Số s còn lại để đến tết;
            const day = Math.floor(timeRest/(1000*60*60*24));
            //Số ngày còn lại
            const hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));
            // Số giờ còn lại
            const minute = Math.floor(timeRest%(1000*60*60)/(1000*60));
            // Số phút còn lại
            const sec = Math.floor(timeRest%(1000*60)/(1000));
            // Số giây còn lại

            xMas.innerHTML = `<strong> There are  ${day} Day ${hours} Hours ${minute} minutes ${sec} until Chrismas`;
            
                        if(timeRest <= 0){
                        clearInterval(xmasCome);
                        xMas.innerHTML = "Keep calm and jingle on ";
                        }              
    },1000); */
 
    const newYear1 = document.getElementById("newYear");
    const day = document.getElementById("day");
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    
    const newYear = new Date(" Dec 31,2018 24:00:00").getTime();
    const newYearCountDown = setInterval(() =>{
        const now = new Date().getTime();
        const timeRest = newYear - now;
        const days = Math.floor(timeRest/(1000*60*60*24));
        const hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));
        const minutes = Math.floor(timeRest%(1000*60*60)/(1000*60));
        const seconds = Math.floor(timeRest%(1000*60)/(1000));
    
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
    
    if( timeRest <= 0) {
        clearInterval(newYearCountDown);
        newYear1.innerHTML = "happy new year!";
    }
    },1000)
    //  china new year
    const lunarYear = document.getElementById("chineseNewYear");
    const d = document.getElementById("d");
    const h = document.getElementById("h");
    const m = document.getElementById("m");
    const s = document.getElementById("s");
    
    const lunarNewYear = new Date(" feb 05,2019 24:00:00").getTime();
    const CountDown2 = setInterval(() =>{
        const now = new Date().getTime();
        const timeRest = lunarNewYear - now;
        const days = Math.floor(timeRest/(1000*60*60*24));
        const hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));
        const minutes = Math.floor(timeRest%(1000*60*60)/(1000*60));
        const seconds = Math.floor(timeRest%(1000*60)/(1000));
    
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
    
    if( timeRest <= 0) {
        clearInterval(CountDown2);
        lunarYear.innerHTML = "happy new year!";
    }
    },1000)
        
    