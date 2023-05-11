<style>
  a {
    color: white;
  background-color: tomato;
  text-decoration: none;
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 55px;
  transition: all 1s ease-in-out;
    }

  a:hover {
    color: tomato;
  background-color: wheat;
  border-radius: 20px;
    }
</style>

ease -in
  ease - out
... 등등 다양한 Transition 효과가 있음


Transform => 위치를 이동시키거나 다양한 활동 시 다른 애들에게 영향을 주지 않음.
  left로 50px 옮긴다고 옆에 있던 글자가 같이 이동되지 않음.


   < style >
    @keyframes YubongCoinFlip {
  0 % {
    transform: rotateY(0);
  }

  50 % {
    transform: rotateY(360deg) translateY(100px);
  }

  100 % {
    transform: rotateY(0);
  }
}

    img {
  border: 4px solid black;
  border - radius: 50 %;
  animation: YubongCoinFlip 2s ease -in -out infinite;
}

    body {
  display: flex;
  height: 100vh;
  align - items: center;
  justify - content: center;
}
  </style >
