
            const timeunit = document.querySelectorAll('#timeunit .timer');
            const action = document.querySelectorAll('#action .btn');
            function hours(){
                let counter = parseInt(timeunit[0].innerHTML);
                counter++;
                timeunit[0].innerHTML=counter<10? `0${counter}` : counter;
            }
            function minutes(){
                let counter = parseInt(timeunit[1].innerHTML);
                counter++;
                timeunit[1].innerHTML=counter<10? `0${counter}` : counter;
                if(counter==60 ){
                    timeunit[1].innerHTML='00';
                    hours();
                }
            }
            function seconds(){
                let counter = parseInt(timeunit[2].innerHTML);
                counter++;
                timeunit[2].innerHTML=counter<10? `0${counter}` : counter;
                if(counter==60 ){
                    timeunit[2].innerHTML='00';
                    minutes();
                }
            }
            function startTimer(){
                const interval = setInterval(()=>{
                    let counter=parseInt(timeunit[3].innerHTML);
                    counter++;
                    timeunit[3].innerHTML=counter<10? `0${counter}` : counter;
                    if(counter==100){
                        timeunit[3].innerHTML='00';
                        seconds();
                    }
                },10);
                action[1].onclick=()=>{
                    clearInterval(interval);
                    action[0].className=action[0].className.split(' ')[0];
                }
            }

            action[0].onclick=()=>{
                if(action[0].className.search('active')=== -1){
                    startTimer();
                    action[0].className += ' active';
                }
            }
            action[2].onclick=()=>{
                for(let i=0;i<timeunit.length;i++){
                    timeunit[i].innerHTML='00';
                    action[0].className=action[0].className.split(' ')[0];

                }
            }
