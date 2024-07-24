export function createTitle() {
  const titleDiv = document.createElement("div");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = `title`;
  const titleLabel = document.createElement("label");
  titleLabel.textContent = `Title`;
  titleLabel.setAttribute("for", "title");

  titleDiv.append(titleLabel, titleInput);

  return titleDiv;
}

export function createDescription() {
  const descriptionDiv = document.createElement("div");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = `description`;
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = `Description`;
  descriptionLabel.setAttribute("for", "description");

  descriptionDiv.append(descriptionLabel, descriptionInput);

  return descriptionDiv;
}

export function createDueDate() {
  const dueDateDiv = document.createElement("div");
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "text";
  dueDateInput.id = `due-date`;
  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = `Due Date`;
  dueDateLabel.setAttribute("for", "due-date");

  dueDateDiv.append(dueDateLabel, dueDateInput);

  return dueDateDiv;
}
