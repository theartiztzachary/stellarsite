//Date("2025-01-01T10:00:00Z");

export default function mostRecentDate(dates: Object): Object { //dict should be <some kind of identifier, date as string>
    var result: Record <string, string> = {
        'default': '0001-01-01T10:00:00Z'
    };
    var currentResultTime = '0001-01-01T10:00:00Z';
    var currentTime = '0001-01-01T10:00:00Z';

    for (const [key, value] of Object.entries(dates)) {
        currentTime = value;
        const currentResultDate = new Date(currentResultTime);
        const currentDate = new Date(currentTime);

        if (currentDate > currentResultDate) {
            currentResultTime = currentTime;
            result = {
                key: value
            }
        };
    };
    
    return result;
};