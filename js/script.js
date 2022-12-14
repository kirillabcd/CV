var chatMessages = [{
    name: "ms1",
    msg: "<strong class='c-1'>Кирилл:</strong> Привет, спишь?",
    delay: 60,
    align: "left",

  },
  {
    name: "ms3",
    msg: "Привет, нет",
    delay: 700,
    align: "right",

  },
  {
    name: "ms4",
    msg: "Кто это??",
    delay: 1000,
    align: "right",

  },
  {
    name: "ms5",
    msg: "<strong class='c-1'>Кирилл:</strong> Меня зовут Кирилл, хочу к тебе в команду)",
    delay: 700,
    align: "left",

  },
  {
    name: "ms6",
    msg: "Ок, расскажи о себе...",
    delay: 400,
    align: "right",

  },
  {
    name: "ms7",
    msg: "<strong class='c-1'>Кирилл:</strong> Я 10 лет занимаюсь аналитикой на стороне медиаселлеров, сейчас руковожу небольшим отделом 🔗<a href='https://www.everest-sales.ru' target='_blank'> тут</a>",
    delay: 1200,
    align: "left",

  },
  {
    name: "ms8",
    msg: "<strong class='c-1'>Кирилл:</strong> Анализирую продажи и медиапоказатели, разрабатываю системы ценообразования для рекламы на ТВ, прогнозирую рынки, формирую модели данных и визуализирую их в дашбордах",
    delay: 3000,
    align: "left",

  },
  {
    name: "ms9",
    msg: "<strong class='c-1'>Кирилл:</strong> Еще увлекаюсь фронтендом, поэтому мое сопроводительное письмо выглядит так",
    delay: 5000,
    align: "left",

  },
  {
    name: "ms10",
    msg: "<strong class='c-1'>Кирилл:</strong> Cтрессоустойчивость, легкообучаемость, принтер и вот это все 💪",
    delay: 1200,
    align: "left",

  },
  {
    name: "ms11",
    msg: "Скинь CV, пожалуйста, посмотрим что можно с этим сделать",
    delay: 600,
    align: "right",

  },
  {
    name: "ms12",
    msg: "<strong class='c-1'>Кирилл:</strong>💚💚💚",
    delay: 500,
    align: "left",

  },

  {
    name: "ms13",
    msg: "<strong class='c-1'>Кирилл:</strong>🔗 <a href='#cv'>Кирилл_М_CV</a>",
    delay: 500,
    align: "left",

  }
  ];
  
  var chatDelay = 0;
  
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };
  
  var scroll = true;
  
//   $(window).scroll(function(){
//     if(scroll)
//     {
      $.each(chatMessages, function(index, obj) {
        chatDelay = chatDelay + 1000;
        chatDelay2 = chatDelay + obj.delay;
        chatDelay3 = chatDelay2 + 10;
        scrollDelay = chatDelay;
        chatTimeString = " ";
        msgname = "." + obj.name;
        msginner = ".messageinner-" + obj.name;
        spinner = ".sp-" + obj.name;
        if (obj.showTime == true) {
          chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
        }
  
        $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  
        $(msgname).delay(chatDelay).fadeIn();
        $(spinner).delay(chatDelay2).hide(1);
        $(msginner).delay(chatDelay3).fadeIn();
        setTimeout(onRowAdded, chatDelay);
        setTimeout(onRowAdded, chatDelay3);
        chatDelay = chatDelay3;
    //   });
    // }
    
    scroll = false;
  });

  $('ul.cv-tabs').on('click', 'li:not(cv-tab_active)', function() {
    $(this)
      .addClass('cv-tab_active').siblings().removeClass('cv-tab_active')
      .closest('div.cv-content-container').find('div.cv-content').removeClass('cv-content_active').eq($(this).index()).addClass('cv-content_active');
  });