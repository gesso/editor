import {
  generateBlocks,
  generateBlockViewLayout,
  generateTasks,
  generateTaskViewLayout
} from "../../model"
import { IBlock, IBlockLayoutView, ITask, ITaskLayoutView } from "../../types"

export const fetchBlocks = (count: number): IBlock[] => {
  return generateBlocks(count)
}

export const fetchTasks = (count: number): ITask[] => {
  return generateTasks(count)
}

export const fetchBlockViewLayout = (
  maxColumnCount: number,
  blocks: IBlock[]
): IBlockLayoutView => {
  return generateBlockViewLayout({
    minColumnCount: 0,
    maxColumnCount,
    tasks: blocks
  })
}

// export interface IFetchTaskLayoutRandomOptions {
//   minColumnCount: number
//   maxColumnCount: number
//   tasks: ITask[]
// }

// export interface IFetchTaskLayoutInputOptions {
//   minColumnCount: number
//   maxColumnCount: number
//   tasks: ITask[]
// }

// export type IFetchTaskLayoutOption =
//   | IFetchTaskLayoutRandomOptions
//   | IFetchTaskLayoutInputOptions

export const fetchTaskViewLayout = (
  minColumnCount: number = 0,
  maxColumnCount: number,
  tasks: ITask[]
): ITaskLayoutView => {
  return generateTaskViewLayout({
    minColumnCount,
    maxColumnCount,
    tasks
  })
}