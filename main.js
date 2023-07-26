
const model = [
    { type: 'title1', select:'block', value:{
         
        h1:'Mobile  app',
        p:'Suspendisse in amet volutpat et crasit velit magna risus posuere volutpatlaoreet dictum lectus tellus massa necvel proin'
    }},
    { type: 'title2', select:'block', value:{
           
        h1:'Crypto supported',
        p:'Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet dictum lectus tellus massa nec vel proin'
    }},
    { type: 'title3', select:'block', value:{
           
        h1:'256-bit  security',
        p:'Suspendisse in amet volutpat et crasit velit magna risus posuere volutpatlaoreet dictum lectus tellus massa necvel proin'
    }},
    { type: 'title4', select:'block', value:{
           
        h1:'World-class support',
        p:'Suspendisse in amet volutpat et crasit velit magna risus posuere volutpatlaoreet dictum lectus tellus massa necvel proin'
    }},
    { type: 'title5', select:'block', value:{
          
        h1:'Expense reports',
        p:'Suspendisse in amet volutpat et crasit velit magna risus posuere volutpatlaoreet dictum lectus tellus massa necvel proin'
    }},
    { type: 'title6', select:'block', value:{
           
        h1:'Automatic payments',
        p:'Suspendisse in amet volutpat et crasit velit magna risus posuere volutpatlaoreet dictum lectus tellus massa necvel proin'
    }},
    
]
 const $site = document.querySelector('.capabilities ') // $ используется для отличия DOM-элементов от элементов js
 model.forEach(block=>{
    console.log(block);
    let html= ``//Создается каждый раз при обращении
    switch(block.type) {
        case 'title1':
                html+=`
                    <div class="col-xl-4 col-md-6 col-xs-12">
                        <img src="img/телефон.png" alt="">
                        <h1>${block.value.h1}</h1>
                        <p>${block.value.p}</p>
                    </div>
                    `;
            break;
        case 'title2':
                html+=`
                    <div class="col-xl-4 col-md-6 col-xs-12">
                        <img src="img/деньги.png" alt="">
                        <h1>${block.value.h1}</h1>
                        <p>${block.value.p}</p>
                    </div>
                    `;
            break;
        case 'title3':
                html+=`
                    <div class="col-xl-4 col-md-6 col-xs-12">
                        <img src="img/замок.png" alt="">
                        <h1>${block.value.h1}</h1>
                        <p>${block.value.p}</p>
                    </div>
                    `;
            break;
        case 'title4':
                html+=`
                    <div class="col-xl-4 col-md-6 col-xs-12">
                        <img src="img/наушники.png" alt="">
                        <h1>${block.value.h1}</h1>
                        <p>${block.value.p}</p>
                    </div>
                    `;
            break;
        case 'title5':
                html+=`
                    <div class="col-xl-4 col-md-6 col-xs-12">
                        <img src="img/часы.png" alt="">
                        <h1>${block.value.h1}</h1>
                        <p>${block.value.p}</p>
                    </div>
                    `;
            break;
        case 'title6':
                html+=`
                    <div class="col-xl-4 col-md-6 col-xs-12">
                        <img src="img/комп.png" alt="">
                        <h1>${block.value.h1}</h1>
                        <p>${block.value.p}</p>
                    </div>
                    `;
            break;

    }

    $site.insertAdjacentHTML( 'afterbegin', html ) //Метод позволяет вставлять в определённое место html-код
    
 })
 