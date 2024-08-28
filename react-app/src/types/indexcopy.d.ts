type GameSquare = {
  value: string
  state: "default" | "違います" | "正解" | "ちょっと違う" | "empty"
}

type DifficultyConfig = {
  name: string
  ROWS: number
  color: string
}
type SetState<T> = React.Dispatch<React.SetStateAction<T>>
