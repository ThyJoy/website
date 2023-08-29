//запускаю периодическое действие
        setInterval(function(){
    
            //узнаем что пользователь написал в телеграм
    
                //отправляем запрос на сервер телеграм и получает информацию
                let postman = new XMLHttpRequest();
                postman.open('GET','https://api.telegram.org/bot6224444669:AAHg49fONnSzMoWim3ICs97GXBNcete8PLs/getUpdates',false);
                postman.send();
    
                //раскодируем данные которые получили
                let json = postman.responseText;
                let data = JSON.parse(json);
    
                console.log(data);
                
                //считаем сколько всего сообщений
                let messagesNumber = data['result'].length;
                //определяем номер последнего сообщения
                let lastNumber = messagesNumber - 1;
                //выводим текст на экран
                let text = data['result'][lastNumber]['message']['text'];
    
            //используем это для изменения страницы
    
            //делаем текмст на странице равным тому что написали в телеграм
            document.getElementById('text').innerHTML = text;
    
            //меняем цвет страницы на тот который написали в телеграм
            document.querySelector('body').style.backgroundColor = text;
    
        }, 1000);
