const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const functions = require('../test_data/functions')

module.exports = {

    before: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Good Data Test without Optional': browser => {
        browser
            .click(selectors.buttons.enterWantedButton)
            .pause(100)
        functions.enterValue(selectors.fields.hdr, data.goodData.goodDataEnterWanted.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.goodData.goodDataEnterWanted.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.goodData.goodDataEnterWanted.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.goodData.goodDataEnterWanted.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.goodData.goodDataEnterWanted.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.goodData.goodDataEnterWanted.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.goodData.goodDataEnterWanted.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.goodData.goodDataEnterWanted.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.goodData.goodDataEnterWanted.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.goodData.goodDataEnterWanted.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.goodData.goodDataEnterWanted.input.dow, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.goodDataEnterWanted.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.goodDataEnterWanted.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.goodDataEnterWanted.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Good Data Test with Optional': browser => {

        functions.enterValue(selectors.fields.hdr, data.goodData.goodDataEnterWantedOptional.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.goodData.goodDataEnterWantedOptional.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.goodData.goodDataEnterWantedOptional.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.goodData.goodDataEnterWantedOptional.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.goodData.goodDataEnterWantedOptional.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.goodData.goodDataEnterWantedOptional.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.goodData.goodDataEnterWantedOptional.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.goodData.goodDataEnterWantedOptional.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.goodData.goodDataEnterWantedOptional.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.goodData.goodDataEnterWantedOptional.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.goodData.goodDataEnterWantedOptional.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.goodData.goodDataEnterWantedOptional.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.goodData.goodDataEnterWantedOptional.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.goodData.goodDataEnterWantedOptional.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.goodData.goodDataEnterWantedOptional.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.goodData.goodDataEnterWantedOptional.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.goodData.goodDataEnterWantedOptional.input.lid, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.goodDataEnterWantedOptional.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.goodDataEnterWantedOptional.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.goodDataEnterWantedOptional.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Good Data Enter Wanted made BAD because oln Drivers license requirements not met': browser => {

        functions.enterValue(selectors.fields.hdr, data.badData.badDataEnterWanted.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.badData.badDataEnterWanted.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.badData.badDataEnterWanted.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.badData.badDataEnterWanted.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.badData.badDataEnterWanted.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.badData.badDataEnterWanted.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.badData.badDataEnterWanted.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.badData.badDataEnterWanted.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.badData.badDataEnterWanted.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.badData.badDataEnterWanted.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.badData.badDataEnterWanted.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.badData.badDataEnterWanted.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.badData.badDataEnterWanted.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.badData.badDataEnterWanted.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.badData.badDataEnterWanted.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.badData.badDataEnterWanted.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.badData.badDataEnterWanted.input.lid, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataEnterWanted.output.header)
        browser.expect.element(selectors.messages.errorMessage).text.to.equal(data.badData.badDataEnterWanted.output.errorList.oln)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataEnterWanted.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataEnterWanted.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Bad data ENTER WANTED MIN test': browser => {

        functions.enterValue(selectors.fields.hdr, data.badData.badDataEnterWantedMin.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.badData.badDataEnterWantedMin.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.badData.badDataEnterWantedMin.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.badData.badDataEnterWantedMin.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.badData.badDataEnterWantedMin.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.badData.badDataEnterWantedMin.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.badData.badDataEnterWantedMin.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.badData.badDataEnterWantedMin.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.badData.badDataEnterWantedMin.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.badData.badDataEnterWantedMin.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.badData.badDataEnterWantedMin.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.badData.badDataEnterWantedMin.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.badData.badDataEnterWantedMin.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.badData.badDataEnterWantedMin.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.badData.badDataEnterWantedMin.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.badData.badDataEnterWantedMin.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.badData.badDataEnterWantedMin.input.lid, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataEnterWantedMin.output.header)
        browser.expect.element(selectors.messages.errorMessage).text.to.equal(data.badData.badDataEnterWantedMin.output.errorList.hdr)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataEnterWantedMin.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataEnterWantedMin.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Bad data ENTER WANTED MAX test': browser => {

        functions.enterValue(selectors.fields.hdr, data.badData.badDataEnterWantedMax.input.hdr, browser)
        functions.enterValue(selectors.fields.mke, data.badData.badDataEnterWantedMax.input.mke, browser)
        functions.enterValue(selectors.fields.ori, data.badData.badDataEnterWantedMax.input.ori, browser)
        functions.enterValue(selectors.fields.nam, data.badData.badDataEnterWantedMax.input.nam, browser)
        functions.enterValue(selectors.fields.sex, data.badData.badDataEnterWantedMax.input.sex, browser)
        functions.enterValue(selectors.fields.rac, data.badData.badDataEnterWantedMax.input.rac, browser)
        functions.enterValue(selectors.fields.hgt, data.badData.badDataEnterWantedMax.input.hgt, browser)
        functions.enterValue(selectors.fields.wgt, data.badData.badDataEnterWantedMax.input.wgt, browser)
        functions.enterValue(selectors.fields.hai, data.badData.badDataEnterWantedMax.input.hai, browser)
        functions.enterValue(selectors.fields.off, data.badData.badDataEnterWantedMax.input.off, browser)
        functions.enterValue(selectors.fields.dow, data.badData.badDataEnterWantedMax.input.dow, browser)
        functions.enterValue(selectors.fields.oln, data.badData.badDataEnterWantedMax.input.oln, browser)
        functions.enterValue(selectors.fields.ols, data.badData.badDataEnterWantedMax.input.ols, browser)
        functions.enterValue(selectors.fields.old, data.badData.badDataEnterWantedMax.input.old, browser)
        functions.enterValue(selectors.fields.lic, data.badData.badDataEnterWantedMax.input.lic, browser)
        functions.enterValue(selectors.fields.lis, data.badData.badDataEnterWantedMax.input.lis, browser)
        functions.enterValue(selectors.fields.lid, data.badData.badDataEnterWantedMax.input.lid, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataEnterWantedMax.output.header)
        browser.expect.element(selectors.messages.errorMessage).text.to.equal(data.badData.badDataEnterWantedMax.output.errorList.hdr)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataEnterWantedMax.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataEnterWantedMax.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Enter Wanted EMPTY SPACES Test': browser => {
        browser
            .click(selectors.buttons.enterWantedButton)
            .pause(100)
        functions.enterValue(selectors.fields.hdr, data.goodData.goodDataEnterWanted.input.hdr, browser)
        browser
            .clearValue(selectors.fields.hdr)
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataEnterWantedEmpty.output.header)
        browser.expect.element(selectors.messages.errorMessage).text.to.equal(data.badData.badDataEnterWantedEmpty.output.errorList.mke)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataEnterWantedEmpty.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataEnterWantedEmpty.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Modify Wanted GOOD Test': browser => {

        browser
            .click(selectors.buttons.modifyWantedButton)
            .pause(100)
        functions.enterValue(selectors.fields.wid, data.goodData.goodDataCancelWanted.input.wid, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.goodData.goodDataEnterWanted.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.goodData.goodDataEnterWanted.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.goodData.goodDataEnterWanted.output.assembledQuery2)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Modify Wanted EMPTY SPACES Test': browser => {

        functions.enterValue(selectors.fields.wid, data.badData.badDataModifyWanted.input.wid, browser)
        browser
            .clearValue(selectors.fields.wid)
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataModifyWanted.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataModifyWanted.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataModifyWanted.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Cancel Wanted BAD test MIN': browser => {

        browser
            .click(selectors.buttons.cancelWantedButton)
            .pause(100)
        functions.enterValue(selectors.fields.wid, data.badData.badDataCancelWantedMin.input.wid, browser)
        functions.enterValue(selectors.fields.res, data.badData.badDataCancelWantedMin.input.res, browser)
        functions.enterValue(selectors.fields.dat, data.badData.badDataCancelWantedMin.input.dat, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataCancelWantedMin.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataCancelWantedMin.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataCancelWantedMin.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Cancel Wanted BAD test MAX': browser => {

        functions.enterValue(selectors.fields.wid, data.badData.badDataCancelWantedMax.input.wid, browser)
        functions.enterValue(selectors.fields.res, data.badData.badDataCancelWantedMax.input.res, browser)
        functions.enterValue(selectors.fields.dat, data.badData.badDataCancelWantedMax.input.dat, browser)
        browser
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataCancelWantedMax.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataCancelWantedMax.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataCancelWantedMax.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'Cancel Wanted BAD test EMPTY': browser => {
        browser
            .click(selectors.buttons.cancelWantedButton)
            .pause(100)
        functions.enterValue(selectors.fields.wid, data.badData.badDataCancelWantedEmpty.input.wid, browser)
        browser
            .clearValue(selectors.fields.wid)
            .click(selectors.buttons.submitButton)
            .pause(100)
        browser.expect.element(selectors.messages.header).text.to.equal(data.badData.badDataCancelWantedEmpty.output.header)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(data.badData.badDataCancelWantedEmpty.output.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(data.badData.badDataCancelWantedEmpty.output.assembledQuery)
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    }
}

