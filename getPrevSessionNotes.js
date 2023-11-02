function getPrevSessionNotes(tp) {
    const campaign = tp.file.folder(true);
    const prevSession = app.plugins.plugins.dataview.api
                    .pages(`"${campaign}"`)
                    .where(page => {
                        if (page.type === "session") return true;
                    })
                    .sort(page => page.sessionNum, "desc")[1];
    // [0] is the new session with tags in the date
    const file = prevSession.file.name;
    return `![[${file}#Notas y TODOs]]`;
}

module.exports = getPrevSessionNotes;
