export function createTask(title, description, dueDate, priority, status) {
  const task = {
    title,
    description,
    dueDate,
    priority,
    status,
  };
  return task;
}
