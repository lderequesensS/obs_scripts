function getSessionNumber(tp) {
    const campaign = tp.file.folder(true);
    const numOfGames = app.plugins.plugins.dataview.api
                        .pages(`"${campaign}"`)
                        .where(page => {
                            if (page.type === "session") {
                                return true;
                            }
                        }).length - 1; // This is because session 0
    return numOfGames.toString().padStart(3, '0');
}

module.exports = getSessionNumber;
