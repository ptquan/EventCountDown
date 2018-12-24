const xMas = document.getElementById('xMas');
        const xDay = new Date(" Dec 24,2018 24:00:00").getTime();
        //Tổng số giây 
        const xmasCome = setInterval(function (){
 
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
    },1000)

const newYear = document.getElementById('newYear');
        const sunCalendar = new Date(" Dec 30,2018 24:00:00").getTime();
        //Tổng số giây 
        const countDown = setInterval(function (){
 
            const now = new Date().getTime();
            //Số s đến thời gian hiện tại
            const timeRest = sunCalendar - now;
            //Số s còn lại để đến tết;
            const day = Math.floor(timeRest/(1000*60*60*24));
            //Số ngày còn lại
            const hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));
            // Số giờ còn lại
            const minute = Math.floor(timeRest%(1000*60*60)/(1000*60));
            // Số phút còn lại
            const sec = Math.floor(timeRest%(1000*60)/(1000));
            // Số giây còn lại

            newYear.innerHTML = `<strong> There are :  ${day} Day ${hours} Hours ${minute} minutes ${sec} until New Year`;
            
                        if(timeRest <= 0){
                        clearInterval(countDown);
                        newYear.innerHTML = "Happy New Year! ";
                        }              
    },1000)

    const moon = document.getElementById('chineseNewYear');
        const moonCalendar = new Date(" feb 5,2019 24:00:00").getTime();
        //Tổng số giây 
        const countDown2 = setInterval(function (){
 
            const now = new Date().getTime();
            //Số s đến thời gian hiện tại
            const timeRest = moonCalendar - now;
            //Số s còn lại để đến tết;
            const day = Math.floor(timeRest/(1000*60*60*24));
            //Số ngày còn lại
            const hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));
            // Số giờ còn lại
            const minute = Math.floor(timeRest%(1000*60*60)/(1000*60));
            // Số phút còn lại
            const sec = Math.floor(timeRest%(1000*60)/(1000));
            // Số giây còn lại

            moon.innerHTML = ` <strong> There are ONLY: ${day} Day ${hours} Hours ${minute} minutes ${sec} until Chinese New Year`;
            
                        if(timeRest <= 0){
                        clearInterval(countDown2);
                        moon.innerHTML = "Happy New Year! ";
                        }              
    },1000)

