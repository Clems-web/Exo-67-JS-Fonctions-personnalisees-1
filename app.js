function majPara(idPara, newTexte) {
    idPara = document.getElementById(idPara);
    idPara.innerHTML = newTexte;
    console.log(idPara + idPara.innerHTML);
}

majPara("p1", "chaise");
majPara("p2", "meuble");
majPara("p3", "bureau");
majPara("p4", "pc");
majPara("p5", "Xiaomi p9 lite");


