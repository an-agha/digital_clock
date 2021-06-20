// select elements from html
time = document.getElementsByTagName('h1');
hour = time[0];
minute = time[1];
second = time[2];

setInterval(function get_time()
{
    date = Date();
    get_hour = date.slice(16, 18);
    // convert 24 hour to 12
    if (get_hour > 12)
        get_hour -= 12;
    // covert 1 digit to 2 digit
        if (get_hour < 10)
            get_hour = '0' + get_hour;
    
    
    hour.innerText = get_hour;
    minute.innerText = date.slice(19, 21);
    second.innerText = date.slice(22, 24);
})
