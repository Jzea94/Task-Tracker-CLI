import { setDate, setId } from "../utils/helpers.js"

// TODO: id incremental usando 

export class Task {
  constructor ({ description }) {
    this.id = setId();
    this.description = description,
    this.status = 'todo',
    this.createdAt = setDate();
    this.updatedAt = setDate();
  }
}