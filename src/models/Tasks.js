import { setDate } from "../utils/helpers.js"

// TODO: id incremental usando 

export class Task {
  constructor ({id, description, status, createdAt, updatedAt}) {
    this.id = 1,
    this.description = description,
    this.status = 'todo',
    this.createdAt = setDate();
    this.updatedAt = setDate();
  }
}