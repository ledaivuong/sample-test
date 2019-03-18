import {CommonFunction} from '../../utils/CommonFunction'
let data = [
    {
        "id": "ANC_H_0001",
        "info" : {
            "name": CommonFunction.generateText(8),
            "introducedDate": "2019-03-13",
            "discontinuedDate": "2020-03-13",
            "company": CommonFunction.randomCompany()
        }
    },
    {
        "id": "ANC_H_0002",
        "info" : {
            "name": CommonFunction.generateText(8)
        }
    },
    {
        "id": "ANC_H_0004",
        "info" : {
            "name": CommonFunction.generateText(8),
            "introducedDate": "2019-03-13",
            "discontinuedDate": "2020-03-13",
            "company": CommonFunction.randomCompany()
        }
    },
];
export default new Map(data.map((i) => [i.id, i]));
