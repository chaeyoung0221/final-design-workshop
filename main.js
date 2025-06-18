console.log("main.js 로드 완료");

const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#close-btn");
const imgContainer = overlay.querySelector(".img-container");

// 오버레이 애니메이션
const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } });

tl.to(overlay, {
  duration: 0.6,
  bottom: "0px",
});

tl.fromTo(
  imgContainer,
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.4 },
  "-=0.3"
);



// 데이터 배열 정의
const itemsData = [
{
  itemName: "Samsung",
  itemCategory: "Living",
  itemLink: "https://www.samsung.com/sec/",
  itemCopy:
    "무광인덕션<br>프리미엄에<br>트렌드를 더하다",
  itemImg: "images/Stel uw persoonlijke stijlboek samen.jpg",
},
  {
    itemName: "Augustinus Bader",
    itemCategory: "Beauty",
    itemLink: "https://augustinusbader.com/int/en/?gc_id=9234598288&h_ad_id=715803577901&gad_source=1&gad_campaignid=9234598288&gbraid=0AAAAAC8_8EOnWXFqjjJ8StAO4UzxoPBGw&gclid=CjwKCAjwgb_CBhBMEiwA0p3oODDlUxQRqyadRY_B76UiQ0RPHo98nkWcsz6yaO9lrmQFYts8zpsZhxoC7_EQAvD_BwE",
    itemCopy: "헤어케어의 새로운 기준 <br>TFC8 헤어 리뉴얼 시스템",
    itemImg: "images/Augustinus Bader The 12 Days of Bader Kit.jpg",
  },
  {
    itemName: "MATERASSO",
    itemCategory: "Living",
    itemLink: "https://materasso.eu/",
    itemCopy: "좋은 잠을 찾아서,마테라소",
    itemImg: "images/Polsterbett Tayla aus Teddy-Bouclé.jpg",
  },
  {
    itemName: "JAKOMO",
    itemCategory: "Living",
    itemLink: "https://jakomosofa.com/",
    itemCopy: "변함없는 1등 소파<br>결국 자코모",
    itemImg: "images/Carmo Sofa by BoConcept.jpg",
  },
];

// 아이템 클릭 시 오버레이 열고 내용 바꾸기
const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    const data = itemsData[index];

    // 텍스트, 링크, 이미지 업데이트
    document.getElementById("item-name").textContent = data.itemName;
    document.getElementById("item-category").textContent = data.itemCategory;
    document.getElementById("item-link").href = data.itemLink;
   document.getElementById("item-copy").innerHTML = data.itemCopy;
    document.getElementById("item-img").src = data.itemImg;

    tl.play();
  });
});

// 닫기 버튼
closeBtn.addEventListener("click", () => {
  tl.reverse();
});


