import React from "react"
import { ColoredSquare } from "components/ColoredSquare"

type RulesType = {
  open: boolean
}

export const Rules: React.FC<RulesType> = ({ open }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        open ? "translate-y-0" : "translate-y-[100vh]"
      } px-10 py-6 bg-gray-50 rounded-md shadow-md transition-all duration-500 ease-in-out transform flex flex-col gap-4 text-gray-700`}
    >
      <span className="flex items-center justify-center gap-4 text-2xl font-black">
        <button>
          <a href="https://rebrand.ly/nerdle-translate">
            <img
              src="https://ik.imagekit.io/rezza/translate_IilSwbtdm.png?ik-sdk-version=javascript-1.4.3"
              width={30}
              alt="Translate"
            />
          </a>
        </button>
        Sonoko.study
      </span>
      <p className="font-bold text-center text-md">ルール</p>
      <ul className="text-xs list-disc">
        <li>正しい式を入力してください</li>
        <li>入力可能なのは 0 1 2 3 4 5 6 7 8 9 + - * / or =.</li>
        <li>
          計算式は{" "}
          <a
            className="font-bold text-green-500 underline"
            href="https://www.jica.go.jp/jica-ri/IFIC_and_JBICI-Studies/jica-ri/publication/archives/jica/kenkyu/95_22/04_03.html" target="_blank"
          >
            BODMAS
          </a>
          .
        </li>
        <li>
          色違いの説明
          <br /> 🟩=数字も場所も正解 <br /> 🟨=数字は正しいが場所は違う <br /> ⬛=数字も場所も違う
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <span className="flex gap-[2px]">
          {ColoredSquare({ value: "1", state: "correct" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "*" })}
          {ColoredSquare({ value: "2" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "=" })}
          {ColoredSquare({ value: "2" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "0" })}
        </span>
        <p className="text-xs font-bold text-center">
          1 は正解
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="flex gap-[2px]">
          {ColoredSquare({ value: "1" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "*" })}
          {ColoredSquare({ value: "2", state: "partially-correct" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "=" })}
          {ColoredSquare({ value: "2", state: "partially-correct" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "0" })}
        </span>
        <p className="text-xs font-bold text-center">
          2 は場所違い
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="flex gap-[2px]">
          {ColoredSquare({ value: "1" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "*", state: "incorrect" })}
          {ColoredSquare({ value: "2" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "=" })}
          {ColoredSquare({ value: "2" })}
          {ColoredSquare({ value: "0" })}
          {ColoredSquare({ value: "0" })}
        </span>
        <p className="text-xs font-bold text-center">
          * は正解には入らない
        </p>
      </div>
      <div className="text-xs leading-[16px] text-center">
        正解は複数の数字ある場合は,
        <br /> 黄色表示されます
      　<br /> がんばってね！
      </div>
    </div>
  )
}

export default Rules
