import { NoteStatusEnums } from './constants';

export type NoteStatus = NoteStatusEnums.FAILED | NoteStatusEnums.SUCCESS
export interface IAddNote {
  id?: string
  name: string
  description: string
  isUpdating?: boolean
}

export interface INote extends IAddNote {
  failedAction?: string
  status?: NoteStatus
}

export interface INotesActionItem {
  key: string
  title: string
  handler: (key: string) => void
}

export interface INotesMockData {
  data: INote[]
  status: number
}
