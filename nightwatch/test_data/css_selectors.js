module.exports = {
    fields: {
        hdr: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        ori: 'input[name="oriInput"]',
        nam: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        rac: 'input[name="racInput"]',
        hgt: 'input[name="hgtInput"]',
        wgt: 'input[name="wgtInput"]',
        hai: 'input[name="haiInput"]',
        off: 'input[name="offInput"]',
        dow: 'input[name="dowInput"]',
        oln: 'input[name="olnInput"]',
        ols: 'input[name="olsInput"]',
        old: 'input[name="oldInput"]',
        lic: 'input[name="licInput"]',
        lis: 'input[name="lisInput"]',
        lid: 'input[name="lidInput"]',
        wid: 'input[name="widInput"]',
        res: 'input[name="resInput"]',
        dat: 'input[name="datInput"]'

    },
    buttons: {
        enterWantedButton: 'p[name="enterWantedButton"]', //links
        modifyWantedButton: 'p[name="modifyWantedButton"]', //links
        cancelWantedButton: 'p[name="cancelWantedButton"]', //links
        submitButton: 'button[id="saveBtn"]', //actual button
        clearButton: 'button[id="clearBtn"]' //actual button
    },
    messages: {
        header: 'h4[id="validHeader"]', //main header stating if an error or not.
        errorMessage: 'li[class="errorMessage"]', //use text to cointain. This holds all the output words errors or not thing        
        queryTitle: 'span[name="queryTitle"]', //title for bottom outputted text.
        assembledQuery: 'span[name="queryBody"]' //body for the ouptutted text on the bottom?
    },
    text: {
        enterWantedText: 'h2[name="enterWantedText"]', //the main text
        pertinentInfoText: 'h4[name="pertinentInfoText"]', //input pert info
        submitListText: 'p[name="submitListText"]', //next line that says submit in it
        versionText: 'h6[name="versionText"]' //the version text
    }
}