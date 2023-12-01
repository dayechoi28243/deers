import React, { useState } from "react";

function Section3() {
  const itemText = [
    {
      title: "CHEMISTRY",
      text: "1945년 창업 이래 주요 산업 분야인 화학 산업을 기반으로 잉크, 수지 등의 기초 기반 산업 소재부터 차량, 건축, 생활 소재까지 삶의 손길이 닿는 모든 공간에 관련된 우수한 재료와 제품을 생산하고 있습니다.",
    },
    {
      title: "DISTRIBUTION",
      text: "효율적이고 신속한 유통 구조를 기반으로 고객들이 선택 할 수 있는 상품의 폭을 넓히고 기업의 성장과 이익의 균형을 확립하고 진심 어린 서비스를 실천하기 위해 노력하고 있습니다.",
    },
    {
      title: "SERVICE",
      text: "산업과 환경을 고려한 안전성과 생산성 향상을 연구, 개발하여 다양한 산업현장에 적용하고 실현해왔습니다. 친인간, 친환경, 친화학의 미래지향적 혁신을 제공하여 대한민국의 산업 근간을 발전시키는 데에 기여할 수 있도록 최선을 다하고 있습니다.",
    },
    {
      title: "GREEN",
      text: "지구를 생각하는 소재과 생산 공정을 끊임없이 개발하며 도덕적인 구성원들의 마음가짐을 중심으로 사람과 산업, 환경을 지킬 수 있도록 고려하고 있습니다.",
    },
  ];

  const itemImg = [
    "./img/main_page_img_1.png",
    "./img/main_page_img_2.png",
    "./img/main_page_img_3.png",
    "./img/main_page_img_4.png",
  ];

  const [itemIndex, setItemIndex] = useState(0);

  const itemLeft = itemImg.map((i, index) => {
    const a = itemIndex === index;
    return (
      <div
        key={i}
        style={a ? { opacity: 1 } : { opacity: 0 }}
        className="w-full h-full absolute top-0 left-0 transition-opacity duration-[1s]"
      >
        <img className="w-full h-full object-cover" src={i} />
      </div>
    );
  });

//   const [checked, setChecked] = useState(false);

  const itemRight = itemText.map((i, index) => {
    return (
      <label
        // key={i.title}
        onClick={() => {
          setItemIndex(index);
          console.log(index);
        }}
        className="relative group cursor-pointer"
      >
        <input
          type="radio"
          name="a"
          className="peer hidden"
        />
        <div className="text-3xl lg:text-6xl font-semibold text-[#ddd] py-3 lg:py-5 relative w-auto flex gap-5 transition-all duration-300">
          {i.title}
          <img
            className="block w-3 h-3 lg:w-5 lg:h-5 mt-2 lg:mt-3 opacity-0 group-hover:opacity-100 transition-opacity group-checked:opacity-100"
            src="./img/hover_arrow.png"
          />
        </div>
        <div className="text-3xl lg:text-6xl font-semibold text-[#f6c12a] py-3 lg:py-5 absolute top-0 left-0 w-0 group-hover:w-full overflow-hidden transition-all duration-300 peer-checked:w-full">
          {i.title}
        </div>
        <div className="peer-checked:max-h-full max-h-0 overflow-hidden transition-all duration-300">
          <p className="text-base lg:text-lg pb-5">{i.text}</p>
        </div>
        <div className="w-full h-[2px] bg-[#ddd]"></div>
        <div className="w-0 h-[2px] bg-[#f6c12a] absolute bottom-0 left-0 group-hover:w-full transition-all duration-300 peer-checked:w-full"></div>
      </label>
    );
  });

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto flex md:gap-5 lg:gap-14 md:flex-row flex-col mb-24">
      <div className="md:flex-1 h-[300px] md:h-[450px] lg:h-[600px] relative">
        {itemLeft}
      </div>
      <div className="mt-5 md:mt-0 md:flex-1 break-keep h-[400px]">
        {itemRight}
      </div>
    </section>
  );
}

export default Section3;
