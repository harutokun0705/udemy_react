import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplateList(inputText);
};

//リストから指定の要素を削除
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncomplateList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除する
    deleteFromIncomplateList(complateButton.parentNode);

    const addTarget = complateButton.parentNode;
    //todo内容テキスト取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //button 生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストカラ削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomplateList(text);
    });

    //dibノコ要素に設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complate-list").appendChild(addTarget);
  });
  //button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除する
    deleteFromIncomplateList(deleteButton.parentNode);
  });

  //dibタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("incomplate-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
