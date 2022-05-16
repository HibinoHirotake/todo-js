import "./styles.css";

const onClickAdd = () => {
  ///テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button完了タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //button削除タグ生成
  const deleteButton = document.createElement("button");
  completeButton.innerText = "削除";
  console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
