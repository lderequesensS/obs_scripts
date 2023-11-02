function getPrevSessionDate(tp) {
    const campaign = tp.file.folder(true);
    const prevSession = app.plugins.plugins.dataview.api
                    .pages(`"${campaign}"`)
                    .where(page => {
                        if (page.type === "session") return true;
                    })
                    .sort(page => page.sessionNum, "desc")[1]
    // [0] is the new session with tags in the date
    let formattedDate;
    if (prevSession.date.c) {
        formattedDate = `${prevSession.year}-${String(prevSession.month).padStart(2, '0')}-${String(prevSession.day).padStart(2, '0')}`;console.log(prevSession);
    } else {
        // So I could do a some future sessions 
        formattedDate = prevSession.date;
    }
    return formattedDate;
}

module.exports = getPrevSessionDate;
