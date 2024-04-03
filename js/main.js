$(function(){
    $(".container").ripples({
        resolution: 600, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
        perturbance: 0.1, // 잔물경 굴절 강도. 0은 굴절 없음
    });

    skrollr.init()

    const menu = $('header ul li'),
          contents = $('main > section')
          
    menu.click(function(){
        // menu click했을 때 on
        // $(this).addClass('on')
        // $(this).siblings().removeClass('on')

        // menu click했을 때 각 해당영역으로 이동
        let idx = $(this).index()
        console.log(idx)
        let section = contents.eq(idx)
        let sectionD = section.offset().top-(110)
        $('html, body').animate({
            scrollTop : sectionD
        })
    })

    AOS.init({
        duration : 2500,
    })
})