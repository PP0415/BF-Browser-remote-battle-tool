//ディスコ用ウィンドウ関連
window.onload = function () {
    // 親ウィンドウの存在チェック
    obj_window = window.open("Child.html", "child", "width=1200,height=1200,top=0,left=1800");
    douki()
}
document.getElementById("ChildWindowOpen").addEventListener("click", function (e) {
    obj_window = window.open("Child.html", "child", "width=1200,height=1200,top=0,left=1800");
    douki()
});
//URL関連
document.getElementById("Explanation").addEventListener("click", function (e) {
    Explanation_window = window.open("Explanation.html", "_blank");
});

document.getElementById("Discord").addEventListener("click", function (e) {
    Discord_window = window.open("https://discord.gg/7QgAD9Jttg", "_blank");
});

document.getElementById("PP_URL").addEventListener("click", function (e) {
    PP_URL_window = window.open("https://twitter.com/PP85982551", "_blank");
});

const douki = () => {
    obj_window.document.getElementById("GaugeSpace").innerHTML = document.getElementById("GaugeSpace").innerHTML;
    obj_window.document.getElementById("GaugeSpace").innerHTML = document.getElementById("GaugeSpace").innerHTML;
    obj_window.document.getElementById("MonsterArea").innerHTML = document.getElementById("MonsterArea").innerHTML;
    obj_window.document.getElementById("MagicArea").innerHTML = document.getElementById("MagicArea").innerHTML;
    obj_window.document.getElementById("FlagSpace").innerHTML = document.getElementById("FlagSpace").innerHTML;
    obj_window.document.getElementById("ItemArea").innerHTML = document.getElementById("ItemArea").innerHTML;
    obj_window.document.getElementById("BuddySpace").innerHTML = document.getElementById("BuddySpace").innerHTML;
    obj_window.document.getElementById("DeckCardSpace").innerHTML = document.getElementById("DeckCardSpace").innerHTML;
    obj_window.document.getElementById("LostDeckCardSpace").innerHTML = document.getElementById("LostDeckCardSpace").innerHTML;
    obj_window.document.getElementById("DropSpace").innerHTML = document.getElementById("DropSpace").innerHTML;
    obj_window.document.getElementById("LifeCounter").innerText = document.getElementById("LifeCounter").value;

    obj_window.document.getElementById("HandSpace").innerHTML = document.getElementById("HandSpace").innerHTML;
    if (document.getElementById("HandViewer").innerText == "カード非公開中") {
        Hand = obj_window.document.getElementById("HandSpace")
        for (i = 0; i < Hand.children.length; i++) {
            Card = Hand.children[i];
            alt = Card.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                let Sleeve = document.getElementById("SleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                let Sleeve = document.getElementById("LostSleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            }
        }
    }
    obj_window.document.getElementById("FreeZoneSpace").innerHTML = document.getElementById("FreeZoneSpace").innerHTML;
    if (document.getElementById("FreeZoneViewer").innerText == "カード非公開中") {
        Hand = obj_window.document.getElementById("FreeZoneSpace")
        for (i = 0; i < Hand.children.length; i++) {
            Card = Hand.children[i];
            alt = Card.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                let Sleeve = document.getElementById("SleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                let Sleeve = document.getElementById("LostSleeveSpace")
                let Back = Sleeve.firstElementChild;
                Card.src = Back.src;
            }
        }
    };
    obj_window.document.body.style.backgroundImage = document.body.style.backgroundImage;
    obj_window.document.getElementById("DeckViewer").innerText = document.getElementById("DeckViewer").innerText;
    obj_window.document.getElementById("DeckViewer").className = document.getElementById("DeckViewer").className;
    obj_window.document.getElementById("LostDeckViewer").innerText = document.getElementById("LostDeckViewer").innerText;
    obj_window.document.getElementById("LostDeckViewer").className = document.getElementById("LostDeckViewer").className;
    obj_window.document.getElementById("HandViewer").innerText = document.getElementById("HandViewer").innerText;
    obj_window.document.getElementById("HandViewer").className = document.getElementById("HandViewer").className;
    obj_window.document.getElementById("FreeZoneViewer").innerText = document.getElementById("FreeZoneViewer").innerText;
    obj_window.document.getElementById("FreeZoneViewer").className = document.getElementById("FreeZoneViewer").className;
    obj_window.document.getElementById("GaugeCount").innerText = document.getElementById("GaugeCount").innerText;
    obj_window.document.getElementById("MagicCount").innerText = document.getElementById("MagicCount").innerText;
    obj_window.document.getElementById("ItemCount").innerText = document.getElementById("ItemCount").innerText;
    obj_window.document.getElementById("DeckCount").innerText = document.getElementById("DeckCount").innerText;
    obj_window.document.getElementById("LostDeckCount").innerText = document.getElementById("LostDeckCount").innerText;
    obj_window.document.getElementById("DropCount").innerText = document.getElementById("DropCount").innerText;
    obj_window.document.getElementById("HandCount").innerText = document.getElementById("HandCount").innerText;
}

//プレイマットセット
document.getElementById("PlayMatSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            document.body.style.backgroundImage = "url(" + blobUrl + ")";
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキスリーブセット
document.getElementById("SleeveSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        SleeveSpace.innerHTML = "";
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            let img_element = document.createElement("img");
            img_element.src = blobUrl;
            img_element.alt = "スリーブ";
            img_element.width = "126";
            img_element.height = "176";
            let Space = document.getElementById("SleeveSpace");
            Space.appendChild(img_element);
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//ロストデッキスリーブセット
document.getElementById("LostSleeveSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        LostSleeveSpace.innerHTML = "";
        setTimeout(function () {
            let file = e.target.files[0];
            let blobUrl = window.URL.createObjectURL(file);
            let img_element = document.createElement("img");
            img_element.src = blobUrl;
            img_element.alt = "ロストスリーブ";
            img_element.width = "126";
            img_element.height = "176";
            let Space = document.getElementById("LostSleeveSpace");
            Space.appendChild(img_element);
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//フラッグセット
document.getElementById("FlagSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        FlagSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                let Sleeve = document.getElementById("SleeveSpace")
                let Back = Sleeve.firstElementChild;
                img_element.src = Back.src;
                img_element.alt = "Flag:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("DetaMenu").style.position = "absolute";
                    document.getElementById("DetaMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("DetaMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("DetaMenu").style.display = "block";
                    document.getElementById("DetaReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {
                            let Sleeve = document.getElementById("SleeveSpace")
                            let Back = Sleeve.firstElementChild;
                            img_element.src = Back.src;
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("DetaRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("DetaMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("FlagSpace");
                Space.appendChild(img_element);
            }
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//バディセット
document.getElementById("BuddySet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        BuddySpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                let Sleeve = document.getElementById("SleeveSpace")
                let Back = Sleeve.firstElementChild;
                img_element.src = Back.src;
                img_element.alt = "Buddy:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("DetaMenu").style.position = "absolute";
                    document.getElementById("DetaMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("DetaMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("DetaMenu").style.display = "block";
                    document.getElementById("DetaReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {
                            let Sleeve = document.getElementById("SleeveSpace")
                            let Back = Sleeve.firstElementChild;
                            img_element.src = Back.src;
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("DetaRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("DetaMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("BuddySpace");
                Space.appendChild(img_element);
            }
        }, 50);
    }
    setTimeout(function () {
        douki()
    }, 100);
});
//デッキセット
document.getElementById("DeckSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        DeckCardSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Deck:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {

                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                                let Sleeve = document.getElementById("LostSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                            let Lost = document.getElementById("LostDeckCardSpace");
                            Lost.insertBefore(img_element, Lost.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                            let Lost = document.getElementById("LostDeckCardSpace");
                            Lost.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("DeckCardSpace");
                Space.appendChild(img_element);
            }
        }, 1000);
        let elmRandom = document.getElementById("DeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

//ロストデッキセット
document.getElementById("LostDeckSet").addEventListener("change", function (e) {
    if (e.target.files.length == 0) {

    } else {
        LostDeckCardSpace.innerHTML = "";
        setTimeout(function () {
            for (i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];
                let blobUrl = window.URL.createObjectURL(file);
                let img_element = document.createElement("img");
                img_element.src = blobUrl;
                img_element.alt = "Lost:" + blobUrl;
                img_element.width = "126";
                img_element.height = "176";
                img_element.addEventListener("contextmenu", function (e) {
                    document.getElementById("CardMenu").style.position = "absolute";
                    document.getElementById("CardMenu").style.top = e.clientY + window.pageYOffset + "px";
                    document.getElementById("CardMenu").style.left = e.clientX + window.pageXOffset + "px";
                    document.getElementById("CardMenu").style.display = "block";
                    document.getElementById("CardReverse").onclick = function hoge() {
                        alt = img_element.alt;
                        src = img_element.src;
                        if (src == alt.substr(alt.indexOf(':') + 1)) {

                            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                                let Sleeve = document.getElementById("SleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                                let Sleeve = document.getElementById("LostSleeveSpace")
                                let Back = Sleeve.firstElementChild;
                                img_element.src = Back.src;
                            }
                        } else {
                            img_element.src = alt.substr(alt.indexOf(':') + 1)
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    }
                    document.getElementById("CardRest/Stand").onclick = function hoge() {
                        if (img_element.style.transform == 'rotate(90deg)') {
                            img_element.style.transform = '';
                        } else if (img_element.style.transform == '') {
                            img_element.style.transform = 'rotate(90deg)';
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckTop").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, Deck.firstChild);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                            let Lost = document.getElementById("LostDeckCardSpace");
                            Lost.insertBefore(img_element, Lost.firstChild);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                    document.getElementById("CardDeckButtom").onclick = function hoge() {
                        alt = img_element.alt;
                        if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                            let Deck = document.getElementById("DeckCardSpace");
                            Deck.insertBefore(img_element, null);
                        } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                            let Lost = document.getElementById("LostDeckCardSpace");
                            Lost.insertBefore(img_element, null);
                        }
                        setTimeout(function () {
                            douki()
                        }, 100);
                    };
                });
                img_element.onmousedown = function () {
                    document.getElementById("CardMenu").style.display = "none"; //右クリックメニューが開いてら閉じる
                }
                let Space = document.getElementById("LostDeckCardSpace");
                Space.appendChild(img_element);
            }
        }, 1000);
        let elmRandom = document.getElementById("LostDeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

//エリア関連
//Monster関連
document.getElementById("CreateMonsterBox").addEventListener("click", function (e) {
    let Space = document.getElementById("MonsterArea");
    let tmpArray = [];
    if (Space.children.length != 0) {
        for (i = 0; i < Space.children.length; i++) {
            tmpStr = Space.children[i].id;
            tmpStr = tmpStr.substr(tmpStr.indexOf(":") + 1);
            tmpArray.push(tmpStr);
        }
        for (i = 0; i < tmpArray.length + 1; i++) {
            str = String(i);
            value = tmpArray.includes(str)
            if (value == false) {
                tmpNumber = i
                break;
            }
        }
    } else {
        tmpNumber = 0;
    }

    let div = document.createElement("div");
    let text = document.createElement("input");
    let handle = document.createElement("div");
    let button = document.createElement("button");
    let free = document.createElement("button");
    let box = document.createElement("div");

    //div関連

    div.classList.add("DivZone");
    div.id = "MonsterDivZone:" + tmpNumber;
    Space.appendChild(div);

    //text関連

    text.type = "text";
    text.classList.add("TextZone");
    text.placeholder = "エリア名入力"
    div.appendChild(text);

    //handle関連

    handle.classList.add("HandleZone");
    handle.innerText = "ここをもってドラッグ"
    div.appendChild(handle);

    //Free関連
    free.classList.add("FreeButtonZone");
    free.innerText = "全てのカードをフリーゾーンへ"
    tmpID = "MonsterFreeButtonZone:" + tmpNumber;
    free.id = tmpID
    free.addEventListener("click", function () {
        n = box.children.length
        var result = window.confirm("確認:モンスターゾーンを全てフリーゾーンに送りますか?")
        if (result) {
            for (i = 0; i < n; i++) {
                document.getElementById("FreeZoneSpace").insertBefore(box.firstElementChild, null);
            }
            setTimeout(function () {
                douki()
            }, 100);
        }
    });
    div.appendChild(free);
    //button関連
    button.classList.add("ButtonZone");
    button.innerText = "BOX消去"
    tmpID = "MonsterButtonZone:" + tmpNumber;
    button.id = tmpID
    button.addEventListener("click",
        function () {
            const Box = this.nextElementSibling;
            if (Box.hasChildNodes()) {
                alert("中のカードを全て別のゾーンにおいてください");
            } else {
                this.parentElement.remove();
            }
            setTimeout(function () {
                douki()
            }, 100);
        },
    );
    div.appendChild(button);
    //box関連
    box.classList.add("BoxZone");
    tmpID = "MonsterBoxZone:" + tmpNumber;
    box.id = tmpID;
    div.appendChild(box);
    tmpID = document.getElementById(String(tmpID))
    new Sortable.create(tmpID, {
        group: {
            name: "Card",
            put: ["Card"]
        },
        animation: 150
    });
    setTimeout(function () {
        douki()
    }, 100);
});
//Magic関連
document.getElementById("CreateMagicBox").addEventListener("click", function (e) {
    let Space = document.getElementById("MagicArea");
    let tmpArray = [];
    if (Space.children.length != 0) {
        for (i = 0; i < Space.children.length; i++) {
            tmpStr = Space.children[i].id;
            tmpStr = tmpStr.substr(tmpStr.indexOf(":") + 1);
            tmpArray.push(tmpStr);
        }
        for (i = 0; i < tmpArray.length + 1; i++) {
            str = String(i);
            value = tmpArray.includes(str)
            if (value == false) {
                tmpNumber = i
                break;
            }
        }
    } else {
        tmpNumber = 0;
    }


    let div = document.createElement("div");
    let text = document.createElement("input");
    let handle = document.createElement("div");
    let button = document.createElement("button");
    let free = document.createElement("button");
    let box = document.createElement("div");

    //div関連

    div.classList.add("DivZone");
    div.id = "MagicDivZone:" + tmpNumber;
    Space.appendChild(div);

    //text関連

    text.type = "text";
    text.classList.add("TextZone");
    text.placeholder = "エリア名入力"
    div.appendChild(text);

    //handle関連
    handle.classList.add("HandleZone");
    handle.innerText = "ここをもってドラッグ"
    div.appendChild(handle);
    //Free関連
    free.classList.add("FreeButtonZone");
    free.innerText = "全てのカードをフリーゾーンへ"
    tmpID = "MagicFreeButtonZone:" + tmpNumber;
    free.id = tmpID
    free.addEventListener("click", function () {
        n = box.children.length
        var result = window.confirm("確認:マジックゾーンのカードを全てフリーゾーンに送りますか?")
        if (result) {
            for (i = 0; i < n; i++) {
                document.getElementById("FreeZoneSpace").insertBefore(box.firstElementChild, null);
            }
            setTimeout(function () {
                douki()
            }, 100);
        }
    });
    div.appendChild(free);
    //button関連
    button.classList.add("ButtonZone");
    button.innerText = "BOX消去"
    tmpID = "MagicButtonZone:" + tmpNumber;
    button.id = tmpID
    button.addEventListener("click",
        function () {
            const Box = this.nextElementSibling;
            if (Box.hasChildNodes()) {
                alert("中のカードを全て別のゾーンにおいてください");
            } else {
                this.parentElement.remove();
            }
            setTimeout(function () {
                douki()
            }, 100);
        },
    );
    div.appendChild(button);
    //box関連
    box.classList.add("BoxZone");
    tmpID = "MagicBoxZone:" + tmpNumber;
    box.id = tmpID;
    div.appendChild(box);
    tmpID = document.getElementById(String(tmpID))
    new Sortable.create(tmpID, {
        group: {
            name: "Card",
            put: ["Card"]
        },
        animation: 150
    });
    setTimeout(function () {
        douki()
    }, 100);
});
//Item関連
document.getElementById("CreateItemBox").addEventListener("click", function (e) {
    let Space = document.getElementById("ItemArea");
    let tmpArray = [];
    if (Space.children.length != 0) {
        for (i = 0; i < Space.children.length; i++) {
            tmpStr = Space.children[i].id;
            tmpStr = tmpStr.substr(tmpStr.indexOf(":") + 1);
            tmpArray.push(tmpStr);
        }
        for (i = 0; i < tmpArray.length + 1; i++) {
            str = String(i);
            value = tmpArray.includes(str)
            if (value == false) {
                tmpNumber = i
                break;
            }
        }
    } else {
        tmpNumber = 0;
    }
    let div = document.createElement("div");
    let text = document.createElement("input");
    let handle = document.createElement("div");
    let button = document.createElement("button");
    let free = document.createElement("button");
    let box = document.createElement("div");

    //div関連

    div.classList.add("DivZone");
    div.id = "ItemDivZone:" + tmpNumber;
    Space.appendChild(div);

    //text関連

    text.type = "text";
    text.classList.add("TextZone");
    text.placeholder = "エリア名入力"
    div.appendChild(text);

    //handle関連
    handle.classList.add("HandleZone");
    handle.innerText = "ここをもってドラッグ"
    div.appendChild(handle);
    //Free関連
    free.classList.add("FreeButtonZone");
    free.innerText = "全てのカードをフリーゾーンへ"
    tmpID = "ItemFreeButtonZone:" + tmpNumber;
    free.id = tmpID
    free.addEventListener("click", function () {
        n = box.children.length
        var result = window.confirm("確認:アイテムゾーンのカードを全てフリーゾーンに送りますか?")
        if (result) {
            for (i = 0; i < n; i++) {
                document.getElementById("FreeZoneSpace").insertBefore(box.firstElementChild, null);
            }
            setTimeout(function () {
                douki()
            }, 100);
        }
    });
    div.appendChild(free);

    //button関連
    button.classList.add("ButtonZone");
    button.innerText = "BOX消去"
    tmpID = "ItemButtonZone:" + tmpNumber;
    button.id = tmpID
    button.addEventListener("click",
        function () {
            const Box = this.nextElementSibling;
            if (Box.hasChildNodes()) {
                alert("中のカードを全て別のゾーンにおいてください");
            } else {
                this.parentElement.remove();
            }
            setTimeout(function () {
                douki()
            }, 100);
        },
    );
    div.appendChild(button);
    //box関連

    box.classList.add("BoxZone");
    tmpID = "ItemBoxZone:" + tmpNumber;
    box.id = tmpID;
    div.appendChild(box);
    tmpID = document.getElementById(String(tmpID))
    new Sortable.create(tmpID, {
        group: {
            name: "Card",
            put: ["Card"]
        },
        animation: 150
    });
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキ関連
//1ドロー
document.getElementById("Deck1Draw").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Hand = document.getElementById("HandSpace");
    Hand.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1ゲージ
document.getElementById("Deck1Gauge").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Gauge = document.getElementById("GaugeSpace");
    let Sleeve = document.getElementById("SleeveSpace");
    let Card = Deck.firstElementChild;
    let Back = Sleeve.firstElementChild;
    Card.src = Back.src;
    Gauge.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1ドロップ
document.getElementById("Deck1Drop").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Drop = document.getElementById("DropSpace");
    Drop.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1表フリー
document.getElementById("Deck1FrontFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1裏フリー
document.getElementById("Deck1BackFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    let Sleeve = document.getElementById("SleeveSpace");
    let Card = Deck.firstElementChild;
    let Back = Sleeve.firstElementChild;
    Card.src = Back.src;
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキシャッフル
document.getElementById("DeckShuffle").addEventListener("click", function (e) {
    let elmRandom = document.getElementById("DeckCardSpace");
    for (let i = elmRandom.children.length; i >= 0; i--) {
        elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
    }
});

//デッキを見る
document.getElementById("DeckViewer").addEventListener("click", function (e) {
    let Deck = document.getElementById("DeckZone");
    if (Deck.style.display != "none") {
        Deck.style.display = "none"
        this.classList.remove("on")
        this.classList.add("off")
        this.innerHTML = "デッキ非閲覧中"
        let elmRandom = document.getElementById("DeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
    } else {
        Deck.style.display = "block"
        this.classList.remove("off")
        this.classList.add("on")
        this.innerHTML = "デッキ閲覧中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//ロストデッキ関連
//1ドロー
document.getElementById("LostDeck1Draw").addEventListener("click", function (e) {
    var Deck = document.getElementById("LostDeckCardSpace");
    var Hand = document.getElementById("HandSpace");
    Hand.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1ゲージ
document.getElementById("LostDeck1Gauge").addEventListener("click", function (e) {
    let Deck = document.getElementById("LostDeckCardSpace");
    let Gauge = document.getElementById("GaugeSpace");
    let Sleeve = document.getElementById("LostSleeveSpace");
    let Card = Deck.firstElementChild;
    let Back = Sleeve.firstElementChild;
    Card.src = Back.src;
    Gauge.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1ドロップ
document.getElementById("LostDeck1Drop").addEventListener("click", function (e) {
    let Deck = document.getElementById("LostDeckCardSpace");
    let Drop = document.getElementById("DropSpace");
    Drop.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1表フリー
document.getElementById("LostDeck1FrontFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("LostDeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//1裏フリー
document.getElementById("LostDeck1BackFreeZone").addEventListener("click", function (e) {
    let Deck = document.getElementById("LostDeckCardSpace");
    let Free = document.getElementById("FreeZoneSpace");
    let Sleeve = document.getElementById("LostSleeveSpace");
    let Card = Deck.firstElementChild;
    let Back = Sleeve.firstElementChild;
    Card.src = Back.src;
    Free.insertBefore(Deck.firstElementChild, null);
    setTimeout(function () {
        douki()
    }, 100);
});

//デッキシャッフル
document.getElementById("LostDeckShuffle").addEventListener("click", function (e) {
    let elmRandom = document.getElementById("LostDeckCardSpace");
    for (let i = elmRandom.children.length; i >= 0; i--) {
        elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
    }
});

//デッキを見る
document.getElementById("LostDeckViewer").addEventListener("click", function (e) {
    let Deck = document.getElementById("LostDeckZone");
    if (Deck.style.display != "none") {
        Deck.style.display = "none"
        this.classList.remove("on")
        this.classList.add("off")
        this.innerHTML = "デッキを非閲覧中"
        let elmRandom = document.getElementById("LostDeckCardSpace");
        for (let i = elmRandom.children.length; i >= 0; i--) {
            elmRandom.appendChild(elmRandom.children[Math.random() * i | 0]);
        }
    } else {
        Deck.style.display = "block"
        this.classList.remove("off")
        this.classList.add("on")
        this.innerHTML = "デッキを閲覧中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});
//ライフカウンター
document.getElementById("LifeUp").addEventListener("click", function (e) {
    document.getElementById("LifeCounter").value = Number(document.getElementById("LifeCounter").value) + 1;
    setTimeout(function () {
        douki()
    }, 100);
});

document.getElementById("LifeDown").addEventListener("click", function (e) {
    document.getElementById("LifeCounter").value = document.getElementById("LifeCounter").value - 1;
    setTimeout(function () {
        douki()
    }, 100);
});

//その他管理
//ソータブル関連
Sortable.create(GaugeSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(DropSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(DeckCardSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(LostDeckCardSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(HandSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});

Sortable.create(FreeZoneSpace, {
    group: {
        name: "Card",
        put: ["Card"]
    },
    animation: 150
});
//エリア関連
Sortable.create(ItemArea, {
    handle: ".HandleZone",
    animation: 150
});

Sortable.create(MonsterArea, {
    handle: ".HandleZone",
    animation: 150
});

Sortable.create(MagicArea, {
    handle: ".HandleZone",
    animation: 150
});
//
document.body.addEventListener('sort', function (e) {
    douki()
});
//メニュー関連
document.body.addEventListener('click', function (e) {
    document.getElementById("CardMenu").style.display = "none";
});

document.body.addEventListener('click', function (e) {
    document.getElementById("DetaMenu").style.display = "none";
});
//手札公開
document.getElementById("HandViewer").addEventListener("click", function (e) {
    if (this.innerText == "カード公開中") {
        this.classList.remove("on")
        this.classList.add("off")
        this.innerText = "カード非公開中"
    } else {
        this.classList.remove("off")
        this.classList.add("on")
        this.innerText = "カード公開中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

document.getElementById("FreeZoneViewer").addEventListener("click", function (e) {
    if (this.innerText == "カード公開中") {
        this.classList.remove("on")
        this.classList.add("off")
        this.innerText = "カード非公開中"
    } else {
        this.classList.remove("off")
        this.classList.add("on")
        this.innerText = "カード公開中"
    }
    setTimeout(function () {
        douki()
    }, 100);
});

//カード移動関連(ToFree)
document.getElementById("HandToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("HandSpace").children.length
    var result = window.confirm("確認:手札を全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("HandSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});



document.getElementById("GaugeToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("GaugeSpace").children.length
    var result = window.confirm("確認:ゲージを全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("GaugeSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("DropToFreeZone").addEventListener("click", function (e) {
    n = document.getElementById("DropSpace").children.length
    var result = window.confirm("確認:ドロップを全てフリーゾーンに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("FreeZoneSpace").insertBefore(document.getElementById("DropSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});


//カード移動関連(FromFree)
document.getElementById("FreeZoneToHand").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全て手札に送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("HandSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneToGauge").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全てゲージに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            alt = document.getElementById("FreeZoneSpace").firstElementChild.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                Back = document.getElementById("SleeveSpace").firstElementChild;
                document.getElementById("FreeZoneSpace").firstElementChild.src = Back.src;
            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                Back = document.getElementById("LostSleeveSpace").firstElementChild;
                document.getElementById("FreeZoneSpace").firstElementChild.src = Back.src;
            }
            document.getElementById("GaugeSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneToDrop").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全てドロップに送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            document.getElementById("DropSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneToDeck").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    var result = window.confirm("確認:フリーゾーンのカードを全てデッキの下に送りますか?");
    if (result) {
        for (i = 0; i < n; i++) {
            alt = document.getElementById("FreeZoneSpace").firstElementChild.alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                document.getElementById("DeckCardSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                document.getElementById("LostDeckCardSpace").insertBefore(document.getElementById("FreeZoneSpace").firstElementChild, null);
            }
        }
        setTimeout(function () {
            douki()
        }, 100);
    }
});

document.getElementById("FreeZoneFront").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
    for (i = 0; i < n; i++) {
        alt = document.getElementById("FreeZoneSpace").children[i].alt;
        document.getElementById("FreeZoneSpace").children[i].src = alt.substr(alt.indexOf(':') + 1)
        }
        setTimeout(function () {
            douki()
        }, 100);
});

document.getElementById("FreeZoneBack").addEventListener("click", function (e) {
    n = document.getElementById("FreeZoneSpace").children.length
        for (i = 0; i < n; i++) {
            alt = document.getElementById("FreeZoneSpace").children[i].alt;
            if (alt.substr(0, alt.indexOf(':')) == "Deck") {
                Back = document.getElementById("SleeveSpace").firstElementChild;
                document.getElementById("FreeZoneSpace").children[i].src = Back.src;
            } else if (alt.substr(0, alt.indexOf(':')) == "Lost") {
                Back = document.getElementById("LostSleeveSpace").firstElementChild;
                document.getElementById("FreeZoneSpace").children[i].src = Back.src;
            }
        }
        setTimeout(function () {
            douki()
        }, 100);
});
//ゲージ表向き

//カード枚数管理

//ゲージ

GaugeElm = document.getElementById("GaugeSpace");
GaugeCount = document.getElementById("GaugeCount");
const ObsGauge = new MutationObserver(records => {
    GaugeCount.innerText = "(" + GaugeElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsGauge.observe(GaugeElm, {
    childList: true
})

//魔法

MagicElm = document.getElementById("MagicArea");
MagicCount = document.getElementById("MagicCount");
const ObsMagic = new MutationObserver(records => {
    MagicCount.innerText = "(" + MagicElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsMagic.observe(MagicElm, {
    childList: true
})

//アイテム

ItemElm = document.getElementById("ItemArea");
ItemCount = document.getElementById("ItemCount");
const ObsItem = new MutationObserver(records => {
    ItemCount.innerText = "(" + ItemElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsItem.observe(ItemElm, {
    childList: true
})

//デッキ

DeckElm = document.getElementById("DeckCardSpace");
DeckCount = document.getElementById("DeckCount");
const ObsDeck = new MutationObserver(records => {
    DeckCount.innerText = "(" + DeckElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);

})
ObsDeck.observe(DeckElm, {
    childList: true
})

//ロストデッキ

LostDeckElm = document.getElementById("LostDeckCardSpace");
LostDeckCount = document.getElementById("LostDeckCount");
const ObsLostDeck = new MutationObserver(records => {
    LostDeckCount.innerText = "(" + LostDeckElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsLostDeck.observe(LostDeckElm, {
    childList: true
})

//ドロップ
DropElm = document.getElementById("DropSpace");
DropCount = document.getElementById("DropCount");
const ObsDrop = new MutationObserver(records => {
    DropCount.innerText = "(" + DropElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsDrop.observe(DropElm, {
    childList: true
})

//手札

HandElm = document.getElementById("HandSpace");
HandCount = document.getElementById("HandCount");
const ObsHand = new MutationObserver(records => {
    HandCount.innerText = "(" + HandElm.childElementCount + ")";
    setTimeout(function () {
        douki()
    }, 100);
})
ObsHand.observe(HandElm, {
    childList: true
})