module.exports = {
    goodData: {
        goodDataEnterWanted: {
            input: {
                hdr: '123456789',
                mke: 'MKE',
                ori: 'CHI1234SI',
                nam: 'Dallas Killpack',
                sex: 'M',
                rac: 'W',
                hgt: '602',
                wgt: '185',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                old: '',
                lic: '',
                lis: '',
                lid: ''

            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MKE.CHI1234SI.Dallas Killpack.M.W.602.185.Brown.Arson.05022016......',
                assembledQuery2: '1234567890........000.........'
            }
        },



        goodDataEnterWantedOptional: {
            input: {
                hdr: '123456789',
                mke: 'MKE',
                ori: 'CHI1234SI',
                nam: 'Dallas Killpack',
                sex: 'M',
                rac: 'W',
                hgt: '602',
                wgt: '185',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345678909',
                ols: 'UT',
                old: '11212010',
                lic: 'abcd1234',
                lis: 'CA',
                lid: '11212010'

            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MKE.CHI1234SI.Dallas Killpack.M.W.602.185.Brown.Arson.05022016.12345678909.UT.11212010.abcd1234.CA.11212010'
            }
        },

        goodDataCancelWanted: {
            input: {
                wid: '1234567890',
                res: 'asdfghjklASDFGHJKL',
                dat: '04072017'
            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '1234567890.asdfghjklASDFGHJKL.04072017'
            }
        }
    },



    badData: {
        badDataEnterWanted: {
            input: {
                hdr: '123456789',
                mke: 'MKE',
                ori: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                old: '',
                lic: '',
                lis: '',
                lid: ''
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    oln: 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },




        badDataEnterWantedMin: {
            input: {
                hdr: 'aB1$aaaa',
                mke: '1',
                ori: '123abca!',
                nam: 'a$',
                sex: '',
                rac: '',
                hgt: '61',
                wgt: 'a',
                hai: 'br',
                off: 'aA1$',
                dow: '1111111',
                oln: '',
                ols: 'u',
                old: '199',
                lic: 'aA12',
                lis: 'u',
                lid: '123',
                wid: 'abcdefghi'
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    ori: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    sex: 'The field named "Sex" must be included.',
                    rac: 'The field named "Race" must be included.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field can only include numeric characters.',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: '',
                    ols: 'The "DL State" field should be 2 characters long.',
                    old: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    lid: 'The "License Year" field should be 4 characters long.',
                    wid: 'The "Warrant ID" field should be 10 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },



        badDataEnterWantedMax: {
            input: {
                hdr: 'aB1$aaaaaaaaaaaaaaaa',
                mke: '12345',
                ori: '123abc$$$!',
                nam: '12345678901234567890123456789$a',
                sex: 'F1',
                rac: 'A1',
                hgt: '6100',
                wgt: '1234',
                hai: 'abc123abc$',
                off: '1234567890abc$$$',
                dow: 'abc123456',
                oln: '12345678901234567890abc',
                ols: '123',
                old: 'abcde',
                lic: 'ac123ABC$',
                lis: '123',
                lid: '1234567abc',
                wid: '12345678901'
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    hdr: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    ori: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    sex: 'The field named "Sex" must be included.',
                    rac: 'The field named "Race" must be included.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: '',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long.',
                    oln: '',
                    ols: 'The "DL State" field should be 2 characters long.',
                    old: 'The "DL Expiration Date" field should be 8 characters long.',
                    lic: 'The "License Plate" field should be between 5 and 8 characters long.',
                    lis: 'The "License State" field should be 2 characters long.',
                    lid: 'The "License Year" field should be 4 characters long.',
                    wid: 'The "Warrant ID" field should be 10 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },



        badDataEnterWantedEmpty: {
            input: {
                hdr: '123456789',
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    hdr: 'The field named "Header" must be included.',
                    mke: 'The field named "MKE" must be included.',
                    ori: 'The field named "Originating Agency Identifier" must be included.',
                    nam: 'The field named "Name" must be included.',
                    sex: 'The field named "Sex" must be included.',
                    rac: 'The field named "Race" must be included.',
                    hgt: 'The field named "Height" must be included.',
                    wgt: 'The field named "Weight" must be included.',
                    hai: 'The field named "Hair" must be included.',
                    off: 'The field named "Offense" must be included.',
                    dow: 'The field named "Date of Warrant/Violation" must be included.',
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },



        badDataModifyWanted: {
            input: {
                wid: 'abcdefghi',
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    wid: 'The field named "Warrant ID" must be included.',
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },




        badDataCancelWantedMin: {
            input: {
                wid: 'abcdefghi',
                res: '12aA',
                dat: '0407abc'
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    wid: 'The "Warrant ID" field should be 10 characters long.',
                    res: 'The "Reason for Cancellation" field should be between 5 and 150 characters long.',
                    dat: 'The "Date of Cancellation" field should be 8 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },



        badDataCancelWantedMax: {
            input: {
                wid: '12345678901',
                res: 'abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890',
                dat: '0407abcdE'
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    wid: 'The "Warrant ID" field should be 10 characters long.',
                    res: 'The "Reason for Cancellation" field should be between 5 and 150 characters long.',
                    dat: 'The "Date of Cancellation" field should be 8 characters long.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },



        badDataCancelWantedEmpty: {
            input: {
                wid: '12345678901',
                res: 'abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz1234567890',
                dat: '0407abcdE'
            },
            output: {
                header: 'Errors Received:',
                errorList: {
                    wid: 'The field named "Warrant ID" must be included.',
                    res: 'The field named "Reason for Cancellation" must be included.',
                    dat: 'The field named "Date of Cancellation" must be included.'
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        }
    }
}