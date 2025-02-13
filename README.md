# HTML

    1.컴포넌트가 시작되는 부모요소는 늘 하나다.
    2.클래스를 부모요소에게 준 다음에 시작한다.
    3.클래스를 마구잡이로 부여하지 않는다. 시멘틴 태그를 써서 해결

# CSS

    1. .클래스.클래스 ....; 여러가지 클래스가 한꺼번에 들어간 태그를 선택
       -응용:#아이디#아이디...: 여러가지 아이디가 한꺼번에 들어간 태그를 선택
       - 한 번 정의해둔 클래스를 다른 태그에서도 마음껏 사용할 수 있음
        - 공통된 스타일을 저장하는 용도로 사용하면 개꿀.

       -
    2. 선행 선택자+ 마지막선택자: 마지막선택자가 내가 스타일링을 줄 태그임.

    3. position:
        -relative:부모요소로 지정 기준이됨
        -absolute:자식요소로 지정, 기준을 따라감
                    **주의사항**:top,left 또는 top,rigth 또는 botton,
                    left 또는  button right 로만 작성하면됨.
        -content:'';
         **가상요소만드는 친구 **:absolute를 섞어서 사용하면 편함
    4.  object-fit:
        -cover: 찌그러진 사진을 예쁘게 펴줌, 단점: 위치조정은 안됨

    5. 태그+ 태그 : 태그옆에 태그를 선택할수 있음
    6. input에서 :checked라고 하는 상태를 선택할수 있음
    7.transition: 애니메이션 효과를 적용할수 있음
        -예시 transition: all ,5s(속도)
    8.labal,span:display 속성을 block으로 줘야만 눈으로 확인할수있음

# JS

    1.document: DOM(Document Object Model): 웹 그자체
    2.document.querySelector:추노 css 작성 규칙을 따라서 잡아옴
            -예시: const body=document.querySelector('body)
            -예시: const body=document.querySelector('body.btn)
                    **주의** 클래스명은 많은곳에서 사용할수 있기 때문에 btn은 복수가 될수도있음


    3.document.createEelement:태그를 달아줌
        -예시:const button = document.createElement('button')


    4.잡아온태그 .onclick= 화살표 함수를 사용해서 클릭하는 이벤트를  설정할수 있음

    5.setInterval: 설정한 시간 단위마다 계속해서 반복적으로 실행되는 코드를 짤 수있음
     -예시
     const intervalId= setInterval(
        ()=>{

        },3000 //밀리세컨 단위 1000=1초
     )
     **새로고침 이외에 멈출 방법이 하나밖에 없음,  interbalId를 사용해서 꺼줘야함

        -예시 :clearInterbal(interbalId)// 이거쓰면 멈춤
