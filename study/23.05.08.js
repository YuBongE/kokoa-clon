css

1. div p {
  
}
=> div안에 있는 p를 지정

**********************
2. div > p {

}
=> div *바로 밑에*(자식속성) 있는 p를 지정
{
<div>
<p>123</p>
</div>
}

*********************
3. div + p {
  
}
=> div 바로 다음으로 있는 p를 지정

{
<div>
</div>
<p>123</p>
}

************************

p +span : p의 바로 아래있는 형제 span 선택
p ~span : p와 같은 부모를 공유하는 모든 span 선택
(attribute sellectors)
tag[attribute = "vallue"] : 속성의 값이 "vallue"인 태그를 모두적용
tag[attribute ~= "vallue"] : 앞뒤에 공백이 있는 상태에서 "vallue" 값을 포함한 모든 tag 적용
tag[attribute *= "vallue"] : 앞뒤 공백 상관없이 "vallue" 값을 포함한 모든 tag 적용
그외
tag: required {} required 속성을 가지고있는tag
(필수적인)
tag: optional {} required 속성이 없는
(자유로운,선택적인)

1) active : 대상을 클릭하고 있는 상태
2) hover : 마우스가 대상 위에 있을때의 상태
3) focus : active와 비슷하다고 생각될 수 있는데, 키보드로 선택되었을때를 말한다 !
4) visited : 링크에만 적요이된다 그 링크에 방문했다면 그 안에 스타일이 적용이된다
5) focus-within : focuse된 자식을 가진 부모 엘리먼트의 상태를 말한다


# 색상 체계 (color system)
1) hex code
: #2ecc71와 같은 색상 코드입니다.

2) rgb
: 각각 red, green, blue를 의미합니다.
가령, rgb(0,140,200)의 경우엔 red 값이 0, green 값이 140, blue 값이 200이라고 이해할 수 있습니다.

3) rgba
: 2와 동일하지만 a가 포함된 형태입니다. 'a(alpha)'는 투명도를 담당합니다.
0(투명)~1(불투명) 사이의 값으로 조절할 수 있습니다.


# variable
(custom property라고도 합니다. 니코쌤은 variable이라고 부르는 걸 선호하신다고 합니다.)

: 작업량을 줄여줄 수 있는 기능으로 이해했습니다. 예를 들면,

div {color: #2ecc71}
p {color: #2ecc71}
상태에서, 둘 모두의 색을 바꾸고 싶다면 우리는 div와 p의 색상 코드를 지우고, 또 다시 입력해야 합니다. 그러나 variable을 이용하면 더 간단해집니다. (해당 설명은 4:35부터 보시면 됩니다.)
