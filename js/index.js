(() => {
    const cat = document.querySelector('.cartoon-cat__cat');
    const about = document.querySelector('.block-about__description');
    const coorAbout = about.getBoundingClientRect();
    const animItems = document.querySelectorAll('.anime');
    const animItemsMove = document.querySelectorAll('.cat-hand');
    const animItemsMoveInverse = document.querySelectorAll('.cat-hand-inverse');
    const animItemsMoveEnd = document.querySelectorAll('.move-end');

    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        if(Number.parseInt(scroll) >= Number.parseInt(coorAbout.top) && !cat.classList.contains('move')){
            cat.classList.add('move')
        }
    });



    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnscrollEmergence)
        function animOnscrollEmergence() {
            for(let index=0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset  < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                } else {
                    animItem.classList.remove('active');
                }
            }
        }

    }

    if(animItemsMove.length > 0) {
        window.addEventListener('scroll', animOnscrollMove)
        function animOnscrollMove() {
            for(let index = 0; index < animItemsMove.length; index++) {
                const animItem = animItemsMove[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset  < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('cat-hand-move');
                } else {
                    animItem.classList.remove('cat-hand-move');
                }
            }
        }

    }

    if(animItemsMoveInverse.length > 0) {
        window.addEventListener('scroll', animOnscrollMoveInverse)
        function animOnscrollMoveInverse() {
            for(let index = 0; index < animItemsMoveInverse.length; index++) {
                const animItem = animItemsMoveInverse[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset  < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('cat-hand-move-inverse');
                } else {
                    animItem.classList.remove('cat-hand-move-inverse');
                }
            }
        }

    }

    if(animItemsMoveEnd.length > 0) {
        window.addEventListener('scroll', animOnscrollMoveEnd)
        function animOnscrollMoveEnd() {
            for(let index = 0; index < animItemsMoveEnd.length; index++) {
                const animItem = animItemsMoveEnd[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset  < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('cat-hand-move-end');
                } else {
                    animItem.classList.remove('cat-hand-move-end');
                }
            }
        }

    }


    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left +scrollLeft}
    }

    // cat.addEventListener('click', () => {
    //     cat.classList.add(['animate__animated","animate__backInDown'])
    // })
})()