import React, { useState } from "react";

function About() {
  return (
    <>
      {/* 메인 배경 */}
      <div className="w-full h-[300px] overflow-hidden relative mt-40">
        <img
          className="w-full h-full object-cover opacity-70 grayscale-[0.2]"
          src="./img/about-bg.jpg"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white shadow-about">
          ABOUT
        </h1>
      </div>

      {/* 섹션1---------- */}
      <div className="my-24 mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col">
        <div className="flex-1 mr-3 md:mr-12 break-keep order-2">
          <h1 className="text-3xl font-extrabold">
          <span className="w-5 h-6 bg-green-700 inline-block mr-2"></span>
            DEAR LIFE, DEERS</h1>
          <p className="text-lg mt-3">생활을 지키는 화학</p>
          <p className="text-black/50 my-10">
            디어스의 가장 큰 자산인 인재를 바탕으로 하는 고유의 도전 정신, 서로
            간의 협력과 평형, 지속된 열정과 실행력으로 오늘보다 나아진 미래를
            열어가기 위해 최선을 다하고 있습니다.
          </p>
        </div>
        <div className="flex-1 overflow-hidden order-1 md:order-2 mb-12 md:mb-0">
          <img
            className="h-full object-cover hover:scale-[1.1] transition-transform"
            src="./img/deargreen_default.png"
          />
        </div>
      </div>

      {/* 섹션2---------- */}
      <div className="my-24 mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col">
        <div className="flex-1 overflow-hidden mb-12 md:mb-0">
          <img
            className="h-full object-cover hover:scale-[1.1] transition-transform"
            src="./img/dearlife_default.png"
          />
        </div>
        <div className="flex-1 mr-3 md:ml-12 break-keep">
          <h1 className="text-3xl font-extrabold">
          <span className="w-5 h-6 bg-yellow-500 inline-block mr-2"></span>
            DEAR LIFE, DEERS</h1>
          <p className="text-lg mt-3">고객을 생각하는 마음</p>
          <p className="text-black/50 my-10">
            고객의 삶의 가치를 높이는 PLUS Value를 제공하기 위해 연구합니다.
            지속된 열정과 실행력으로 오늘보다 나아진 미래를 열어가기 위해 최선을
            다하고 있습니다.
          </p>
        </div>
      </div>

      {/* 섹션3---------- */}
      <div className="my-24 mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col">
        <div className="flex-1 mr-3 md:mr-12 break-keep order-2">
          <h1 className="text-3xl font-extrabold">
            <span className="w-5 h-6 bg-slate-800 inline-block mr-2"></span>
            DEAR LIFE, DEERS
          </h1>
          <p className="text-lg mt-3">생활을 지키는 화학</p>
          <p className="text-black/50 my-10">
            디어스인과 고객을 위해 최적화 된 시스템과 기술을 서비스합니다.
            지속된 열정과 실행력으로 오늘보다 나아진 미래를 열어가기 위해 최선을
            다하고 있습니다.
          </p>
        </div>
        <div className="flex-1 overflow-hidden order-1 md:order-2 mb-12 md:mb-0">
          <img
            className="h-full object-cover hover:scale-[1.1] transition-transform"
            src="./img/dearpeople_default.png"
          />
        </div>
      </div>
    </>
  );
}

export default About;
