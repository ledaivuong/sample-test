import {CommonFunction} from '../../utils/CommonFunction'
let data = [
    {
        "id": "UAC_H_0011",
        "info" : {
            "name": CommonFunction.generateText(8),
            "introducedDate": "2019-03-13",
            "discontinuedDate": "2020-03-13",
            "company": CommonFunction.randomCompany()
        }
    },
    {
        "id": "UAC_H_0012",
        "info" : {
            "name": CommonFunction.generateText(8)
        }
    },
    {
        "id": "UAC_H_0014",
        "info" : {
            "name": CommonFunction.generateText(8),
            "introducedDate": "2019-03-13",
            "discontinuedDate": "2020-03-13",
            "company": CommonFunction.randomCompany()
        }
    },
];
export default new Map(data.map((i) => [i.id, i]));
