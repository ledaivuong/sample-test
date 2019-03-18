const timeout = 30000;

export class CommonFunction {

    static generateText(length) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    static formatDate(d) {
        let date = new Date(d);

        if (isNaN(date.getTime())) {
            return d;
        }
        else {
            let month = new Array();
            month[0] = "Jan", month[1] = "Feb", month[2] = "Mar", month[3] = "Apr",
            month[4] = "May", month[5] = "Jun", month[6] = "Jul", month[7] = "Aug",
            month[8] = "Sept", month[9] = "Oct", month[10] = "Nov", month[11] = "Dec";
            let day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            return day + " " + month[date.getMonth()] + " " + date.getFullYear();
        }

    }
    static randomCompany() {
        let companyList = 
            ["Apple Inc.", "Thinking Machines", "RCA", "Netronics", "Tandy Corporation",
            "Commodore International", "MOS Technology", "Micro Instrumentation and Telemetry Systems",
            "IMS Associates, Inc.", "Digital Equipment Corporation", "Lincoln Laboratory",
            "Moore School of Electrical Engineering", "IBM", "Amiga Corporation", "Canon", "Nokia", "Sony",
            "OQO", "NeXT", "Atari", "Acorn computer", "Timex Sinclair", "Nintendo", "Sinclair Research Ltd",
            "Xerox", "Hewlett-Packard", "Zemmix", "ACVS", "Sanyo", "Cray", "Evans & Sutherland", "E.S.R. Inc.",
            "OMRON", "BBN Technologies", "Lenovo Group", "ASUS", "Amstrad", "Sun Microsystems", "Texas Instruments",
            "HTC Corporation", "Research In Motion", "Samsung Electronics"
            ];
        return companyList[Math.floor(Math.random() * companyList.length)];

    }

}

