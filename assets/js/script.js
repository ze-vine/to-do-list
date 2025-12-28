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
    const treatedText = treatText(inputText.value);

    if (treatedText === "") {
        inputText.classList.add("to-do-list__input-text--error");
        spanError.classList.add("visible");
    } else {
        const item = createItem();
        const checkbox = createCheckBox();
        const textItem = createTextItem(treatedText);

        addItemToDOM(item, checkbox);
        addItemToDOM(item, textItem);
        addItemToDOM(itemsGroup, item);
    }

    clearInput();
});

function createItem() {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
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

function treatText(text) {
    return text.trim();
}

function addItemToDOM(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

function clearInput() {
    inputText.value = "";
}