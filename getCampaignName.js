function getCampaignName(tp) {
    const directory = tp.file.folder(true);
    return directory.split("/")[0];
}

module.exports = getCampaignName;
