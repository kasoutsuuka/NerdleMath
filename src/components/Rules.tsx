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
        
        Sonoko.study
      </span>
      <p className="font-bold text-center text-md">遊び方</p>
      <ul className="text-xs list-disc">
        <li>入力可能なのは 0, 1, ,2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, ^, = の数字と記号</li>
        <li>隠れている数式を見つけるゲームです</li>
        <li>初めに一番上の行に数字的に正しい式を入力してください</li>
        <li>式を入力したら“実行”をクリック</li>
        <li>
          名⬜に色がつきます
          <br /> 🟩=数字も場所も正解 <br /> 🟨=数字は正しいが場所が違う <br /> ⬛=数字も場所も違う
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
        正解に複数の数字がある場合は黄色で示されます
      <li>⬜の色を参考にしながら、次の行に数字と記号を入力して新しい数式をつくり“実行”をクリック</li>
      <li>これを繰り返し、一行全部が緑になれば正解、あなたの勝！</li>
      　<br /> がんばってね！
      </div>
    </div>
  )
}

export default Rules
