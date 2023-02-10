function addItem() {
    let textEl = document.getElementsByClassName("input");
    let text = textEl[0].value;
    if (text != "") {
        let itemlist = document.getElementById("content");
        let item = document.createElement("list-item");
        item.innerHTML = "";
        let textnode = document.createTextNode(text);
        item.appendChild(textnode);
        itemlist.prepend(item);
    }




}
class ListItem extends HTMLElement {
    connectedCallback() {
        this.className = "listItem"
        this.innerHTML = `<p onClick = "txtClicked(this)" > ${this.innerText}</p >
        <button onclick="removeItem(this)" > Delete </button > `;
    }

}
customElements.define("list-item", ListItem)


function txtClicked(e) {
    console.log("afsad");
    e.style.textDecoration = "line-through";

}
function removeItem(e) {
    e.parentNode.remove();
}