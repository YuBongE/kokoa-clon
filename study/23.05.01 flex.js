
flex는 부모 속성에만 넣어야 함.
  
자식에게 명시하지 않고 부모에게 명시해야한다.

  justify - content:  ==> 가로축 설정.

    align - items: ==> 세로축 설정 

inline block의 문제점을 해결하기 위해 flexblock를 생각해냈다.
flexbox 사용 규칙

1. 자식 엘리먼트에는 어떤 것도 적지 말아야 함.
자식 엘리먼트를 움직이게 하려면 부모 엘리먼트를 flex container로 만들어야 한다.

2. align - items : cross axis에서 작용(세로)

3. justify - content : main axis에서 작용(가로)(디폴트)
flex - container가 height를 가지고 있지 않으면 align - items를 사용하더라도 위치가 바뀌지 않음.

  vh = viewport height(스크린에 따라 다름)
/*
- justify-content나 align-items의 default를 변경하기 위해선, 'flex-direction'을 수정하면 된다.

- flex-direction에는 두 가지 속성, column과 row가 있다.

- display를 flex로 했을 때 default는 row이다. 따라서 flex-direction: column;을 주면 주축과 교차축이 반전된다.

- 원하는만큼 flex 부모-자식 엘리먼트를 만들어낼 수 있다.

- flex-wrap: nowrap;을 통해 wrapping이 일어나지 않게 할 수 있다.

- flexbox는 width값을 초기 사이즈로만 여기고, 모든 엘리먼트를 같은 줄에 있게 하기 위해 width를 바꾸기도 한다.

- flex-direction: column-reverse; 밑에서 시작해서 위로 올라가게 한다.(마찬가지로 row-reverse도 있다.)

- flex-wrap: wrap-reverse; 또한 있는데, 브라우저를 줄일 때, 엘리먼트가 겹쳐지는 위치가 역전된다.
  */

position fixed를 이용하면 스크롤해도 항상 제자리에 머무른다.
처음 만들어진 자리에 고정 되어있다.하지만 top, left, right, bottom 중 하나만 수정해도 서로 다른 레이어에 위치하게되어 원래 위치가 무시된다.
positon fixed를 이용하면 가장 위에 위치하게 된다. (맨 앞)

1. position: static(default ) - 박스를 처음 위치한 곳에 두는 것
2. position: fixed - 처음에 위치한 자리에서 화면의 스크롤에 상관없이 고정되는 것, top, bottom, left, right 속성을 줘서 고정된 위치 이동시킬 수 있음.단 이동이 되면 가장 위의 새 레이어에 놓이게됨
3. position: relative - 박스가 처음 위치한 곳을 기준으로 이동,
  top, bottom, left, right 속성을 주면 첫 위치를 기준으로 이동됨
4. position: absolute - 가장 가까운 부모 엘리먼트에 position:relative를 추가한다면, 그 부모 기준으로 top, bottom, left, right이동하고 / 아닐시엔 body 기준으로 이동된다


div: last - child {
  background - color: teal;
}
id나 class를 따로 만드는것보다 이렇게 지정하는게 훨씬 좋은 방법이다.
css에서만 선택을 하면 되니까! html코드를 고칠 필요가 없기 때문이다

n번째 태그 수정하기 nth - child(n) 올ㅋ
span: nth - child(2) {
  background - color: teal;
}
span: nth - child(even) { //or odd ( 홀수 )
  background - color: teal;
}

even은 짝수! 짝수번째를 모두 바꿀 수있다 오 so cool!

span: nth - child(5n + 1) {
  background - color: silver;
}
n을 사용하면 매우 편하다