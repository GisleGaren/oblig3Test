function kjop() {
    let filmen = $("#filmValg").val();
    let antallet = $("#antall").val();
    let fornavn = $("#fornavn").val();
    let etternavn = $("#etternavn").val();
    let telefonnr = $("#telefonnr").val();
    let epost = $("#epost").val();

    let check = false;
    if ($("#antall").val() === "") {
        let error = "Må skrive noe i antall feltet";
        check = true;
        let errormelding = error.fontcolor("red");
        $("#labelantall").html(errormelding);
    } else {
        $("#labelantall").html("");
    }
    if ($("#fornavn").val() === "") {
        check = true;
        let error = "Må skrive noe i fornavn feltet";
        let errormelding = error.fontcolor("red");
        $("#labelfor").html(errormelding);
    } else {
        $("#labelfor").html("");
    }
    if ($("#etternavn").val() === "") {
        check = true;
        let error = "Må skrive noe i etternavn feltet";
        let errormelding = error.fontcolor("red");
        $("#labelett").html(errormelding);
    } else {
        $("#labelett").html("");
    }
    if ($("#telefonnr").val() === "") {
        check = true;
        let error = "Må skrive noe i telefon feltet";
        let errormelding = error.fontcolor("red");
        $("#labeltlf").html(errormelding);
    } else {
        $("#labeltlf").html("");
    }
    if ($("#epost").val() === "") {
        check = true;
        let error = "Må skrive noe i epost feltet";
        let errormelding = error.fontcolor("red");
        $("#labelepost").html(errormelding);
    } else {
        $("#labelepost").html("");
    }

    let bilett = {
        film : filmen,
        antall: antallet,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }

    if (check === false) {
        $.post("/add", bilett, function () {
            hentBiletter();
        })
    }
    $("#filmValg").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function hentBiletter(){
    $.get("/return",function (biletter){
        console.log(biletter.antall);
        formaterBiletter(biletter);
    })
}

function formaterBiletter(biletter){
    let ut = "<table class='table table-striped'> <tr>\n" +
        "        <th>Film</th>" +
        "        <th>Antall</th>" +
        "        <th>Fornavn</th>" +
        "        <th>Etternavn</th>" +
        "        <th>TelefonNr</th>" +
        "        <th>Epost</th>" +
        "    </tr> ";

    for(let bilett of biletter){
        ut += "<tr>" +
            "<td>" + bilett.film + "</td>" +
            "<td>" + bilett.antall + "</td>" +
            "<td>" + bilett.fornavn + "</td>" +
            "<td>" + bilett.etternavn + "</td>" +
            "<td>" + bilett.telefonnr + "</td>" +
            "<td>" + bilett.epost + "</td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#resultat").html(ut);
}

function slettArray(){
    $.get("/slett",function (biletter){
        formaterBiletter(biletter);
    })
}