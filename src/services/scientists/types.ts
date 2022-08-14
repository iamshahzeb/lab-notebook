export interface IAddNote {
  name: string
  description: string
}

export interface INote extends IAddNote {
  id: string
  failedAction: string
}

export interface INotesActionItem {
  key: string
  title: string
  handler: () => void
}