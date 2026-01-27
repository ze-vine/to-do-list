const itemsGroup = document.querySelector(".to-do-list__itemsGroup");
const inputText = document.querySelector(".to-do-list__input-text");
const spanError = document.querySelector(".to-do-list__span-error");
const buttonAdd = document.querySelector(".to-do-list__button-add");

inputText.addEventListener("focus", () => {
    inputText.classList.remove("to-do-list__input-text--error");
    spanError.classList.remove("visible");
});

inputText.addEventListener("blur", () => {
    if (treatText(inputText.value) === "") {
        inputText.classList.add("to-do-list__input-text--error");
        spanError.classList.add("visible");
    } else {
        inputText.classList.remove("to-do-list__input-text--error");
        spanError.classList.remove("visible");
    }
});

buttonAdd.addEventListener("click", () => {
    if (treatedText === "") {
        inputText.classList.add("to-do-list__input-text--error");
        spanError.classList.add("visible");
    } else {
        const item = createItem();
        addItemToDOM(itemsGroup, item);
    }

    clearInput();
});

function createItem() {
    const newItem = document.createElement("div");
    const checkbox = createCheckBox();
    const textItem = createTextItem(inputText.target.value);
    const deleteButton = createDeleteButton();

    newItem.classList.add("item");
    newItem.appendChild(checkbox);
    newItem.appendChild(textItem);
    newItem.appendChild(deleteButton);

    return newItem;
}

function createCheckBox() {
    const newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.classList.add("item__input-checkbox");
    return newCheckBox;
}

function createTextItem(text) {
    const textItem = document.createElement("p");
    textItem.classList.add("item__p");
    textItem.innerHTML = text;
    return textItem;
}

function createDeleteButton() {
    const deleteButton = document.createElement("img");
    deleteButton.setAttribute("src", "./assets/img/delete-button.svg");
    return deleteButton;
}

function treatText(text) {
    return text.trim();
}

function addItemToDOM(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

function clearInput() {
    inputText.value = "";
}