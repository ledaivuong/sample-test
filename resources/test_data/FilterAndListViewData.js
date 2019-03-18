import {CommonFunction} from '../../utils/CommonFunction'
let data = [
    {
        "id": "FLV_H_0022",
        "info" : [
            {
                "name": "test filter 1",
                "introducedDate": "2019-03-13",
                "discontinuedDate": "2020-03-13",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 2",
                "introducedDate": "2019-03-14",
                "discontinuedDate": "2020-03-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 3",
                "introducedDate": "2019-02-14",
                "discontinuedDate": "2020-02-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 4",
                "introducedDate": "2019-05-14",
                "discontinuedDate": "2020-02-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 5",
                "introducedDate": "2018-11-11",
                "discontinuedDate": "2020-03-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 6",
                "introducedDate": "2019-03-20",
                "discontinuedDate": "2020-03-31",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 7",
                "introducedDate": "2017-03-14",
                "discontinuedDate": "2020-03-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 8",
                "introducedDate": "2017-03-14",
                "discontinuedDate": "2030-03-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter 9",
                "introducedDate": "2017-03-14",
                "discontinuedDate": "2020-03-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test filter exactly",
                "introducedDate": "2021-01-14",
                "discontinuedDate": "2025-12-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "TEST FILTER UPPERCASE",
                "introducedDate": "2017-03-14",
                "discontinuedDate": "2020-03-11",
                "company": CommonFunction.randomCompany()
            },
            {
                "name": "test special character @!#$%^&*()-_+=",
                "introducedDate": "2019-10-14",
                "discontinuedDate": "2020-03-11",
                "company": CommonFunction.randomCompany()
            },
        ]
    }
];
export default new Map(data.map((i) => [i.id, i]));
