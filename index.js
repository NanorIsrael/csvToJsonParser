const createObjectFromArrays = (keysArray, valuesArray) => Object.fromEntries(keysArray.map((value, index) => [value, valuesArray[index]]));


function spreadSheetIntoJson(csvText) {
    //Split all the text into seperate lines on new lines and carriage return feeds
    var allTextLines = csvText.split(/\r\n|\n/);

    //Split per line on tabs and commas
    var headers = allTextLines[0].split(/\t|,/);

    var rows = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var row = allTextLines[i].split(/\t|,/);
        rows.push(row)
    }
    let spreadSheetDataInJson = [];
    if (row?.length === headers.length) {
        for (let row of rows) {

            const jsonResult = createObjectFromArrays(headers, row)
            spreadSheetDataInJson.push(jsonResult)
        }

    }
    console.log(spreadSheetDataInJson)
    console.log()
    return spreadSheetDataInJson;
}

spreadSheetIntoJson("Assigned To\tCountry\tCountry\tAlpha-2 code\tAlpha-3 code\tCountry Code\tNational Number\tsample phone number\tPhone Format\tCurrency \tCurrency abbr\tCurrency Symbol (hexCode)\tCurrency Symbol (Unicode)\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "Leslie\tAfghanistan\tAfghanistan\tAF\tAFG\t93\t9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAlbania\tAlbania\tAL\tALB\t355\t3 to 9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAlgeria\tAlgeria\tDZ\tDZA\t213\t8, 9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAmerican Samoa\tAmerican Samoa\tAS\tASM\t1\t(684)+7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAndorra\tAndorra\tAD\tAND\t376\t6, 8, 9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAngola\tAngola\tAO\tAGO\t244\t9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAnguilla\tAnguilla\tAI\tAIA\t1\t(264)+7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAntigua and Barbuda\tAntarctica\tAQ\tATA\t1\t(268)+7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tArgentina\tAntigua and Barbuda\tAG\tATG\t54\t10 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tArmenia\tArgentina\tAR\tARG\t374\t8 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAruba\tArmenia\tAM\tARM\t297\t7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAustralia\tAruba\tAW\tABW\t61\t5 to 15 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAustralian External Territories\tAustralia\tAU\tAUS\t672\t6 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAustria\tAustria\tAT\tAUT\t43\t4 to 13 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tAzerbaijan\tAzerbaijan\tAZ\tAZE\t994\t8 to 9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBahamas\tBahamas (the)\tBS\tBHS\t1\t(242)+7 digits\t\t\tBahamian dollar\tBSD\tB$\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBahrain\tBahrain\tBH\tBHR\t973\t8 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBangladesh\tBangladesh\tBD\tBGD\t880\t6 to 10 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBarbados\tBarbados\tBB\tBRB\t1\t(246)+7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBelarus\tBelarus\tBY\tBLR\t375\t9 to 10 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBelgium\tBelgium\tBE\tBEL\t32\t8 to 9 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBelize\tBelize\tBZ\tBLZ\t501\t7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBenin\tBenin\tBJ\tBEN\t229\t8 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBermuda\tBermuda\tBM\tBMU\t1\t(441)+7 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBhutan\tBhutan\tBT\tBTN\t975\t7 to 8 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    "\tBolivia (Plurinational State of)\tBolivia (Plurinational State of)\tBO\tBOL\t591\t8 digits\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")
