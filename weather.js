function search() {
    city = loc.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(data => data.json()).then(wdata => display(wdata));


    function display(data) {

    
        // temperature
        temp = data.main.temp;
        temp = temp - 273.15;
        temp=temp.toFixed(2);
        temp1.innerHTML = "";
        temp1.innerHTML=temp;
        //comment
        comment = data.weather[0].description;
        comment1.innerHTML=comment;

        // main
        main = data.weather[0].main;
        console.log(main);
        if (main == 'Clouds') {
            imgtab.innerHTML = '<i class="fa-solid fa-cloud fa-2xl" style="color: #fff70f;"></i>';
            console.log("SUCCESS");
        }
        else if(main=='Haze'){
            imgtab.innerHTML='<i class="fa-solid fa-smog fa-2xl" style="color: #ababab;"></i>';
        }
        
    }
}