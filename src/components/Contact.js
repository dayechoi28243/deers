import { useState } from "react";

function Contact() {
  function SendTrue() {
    return (
      <div className="flex justify-center items-center flex-col gap-4 mt-12">
        <h1 className="text-3xl font-semibold mb-4">CONTACT US</h1>
        <p className="mt-12 mb-3">감사합니다. 접수되었습니다.</p>
        <p
          onClick={() => setSend(false)}
          className="text-sm text-black/50 border-b border-black/50 cursor-pointer"
        >
          다른 내용 접수하기
        </p>
      </div>
    );
  }

  const [a, setA] = useState("");

  function SendFalse() {
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [v3, setV3] = useState("");
    const [v4, setV4] = useState("");

    return (
      <form className="flex justify-center items-center flex-col gap-4 mt-12">
        <h1 className="text-3xl font-semibold mb-4">CONTACT US</h1>
        <label className="border-black border-b block w-52 px-2 py-2 bg-[#f9f9f9]">
          <input
            type="text"
            placeholder="회사명"
            className="w-full outline-none bg-transparent"
            onChange={(e) => {
              setV1(e.target.value);
            }}
            value={v1}
          />
        </label>
        <label className="border-black border-b block w-52 px-2 py-2 bg-[#f9f9f9]">
          <input
            type="text"
            placeholder="성함"
            className="w-full outline-none bg-transparent"
            onChange={(e) => setV2(e.target.value)}
          />
        </label>
        <label className="border-black border-b block w-52 px-2 py-2 bg-[#f9f9f9]">
          <input
            type="text"
            placeholder="이메일 or 전화번호"
            className="w-full outline-none bg-transparent"
            onChange={(e) => setV3(e.target.value)}
          />
        </label>
        <label className="border-black border-b block w-52 px-2 py-2 bg-[#f9f9f9]">
          <textarea
            type="text"
            placeholder="내용"
            className="w-full h-[100px] outline-none bg-transparent"
            onChange={(e) => setV4(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (v1 && v2 && v3 && v4) {
              setA(false);
              setSend(true);
              console.log(a);
            } else {
              setA(true);
              console.log(a);
            }
          }}
          className="py-2 text-white bg-[#f4ac27] w-52"
        >
          SEND
        </button>
      </form>
    );
  }

  const [send, setSend] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div
      style={open ? { right: "300px" } : { right: "0" }}
      className="fixed top-0 z-10 transition-all"
    >
      <div
        style={
          open
            ? { boxShadow: "rgba(0,0,0,0.2) 0px 0px 15px"  }
            : { boxShadow: "none" }
        }
        className="absolute left-full top-0 h-[100vh] w-[300px] bg-white"
      >
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="border-[5px] border-[#f4ac27] px-4 md:px-6 py-2 rotate-90 translate-x-[6px] md:translate-x-[55px] rounded-b-2xl text-[#f4ac27] font-semibold bg-white/30 cursor-pointer backdrop-blur-md absolute right-full bottom-24 w-16 md:w-40"
        >
        <div className="md:block hidden">CONTACT US</div>
        <div className="md:hidden block">
        <svg className="-rotate-90 fill-[#f4ac27]" xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>

        </div>
          
        </div>

        {send ? <SendTrue /> : <SendFalse a={a} setS={setA} />}
        {a && (
          <p className="ml-12 mt-2 text-sm text-red-500">
            *내용을 모두 입력해주세요
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
